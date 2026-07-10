import os
from contextlib import asynccontextmanager
import joblib
import pandas as pd
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel

# Penampung model pkl di level memory teratas
storage_model = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Memuat semua berkas pkl satu kali saja saat startup untuk efisiensi resource."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    try:
        storage_model["pupuk_presisi"] = joblib.load(os.path.join(base_dir, "models", "model_pupuk_presisi.pkl"))
        storage_model["stok_forecasting"] = joblib.load(os.path.join(base_dir, "models", "model_stok_forecasting.pkl"))
    except Exception as e:
        print(f"Gagal memuat file pkl: {str(e)}")
        raise e
    yield
    storage_model.clear()

app = FastAPI(title="COOP-FLOW ML Engine", lifespan=lifespan)

# ==========================================
# PYDANTIC REQUEST SCHEMAS
# ==========================================

class InputPupukRequest(BaseModel):
    luas_lahan_hektar: float
    jenis_komoditas: str
    fase_tanam: str
    curah_hujan_mm: float
    kelembapan_persen: float
    suhu_rata_rata_celcius: float

class InputStokRequest(BaseModel):
    days_ahead: int


# ==========================================
# CORE API ENDPOINTS
# ==========================================

@app.get("/")
def check_status_via_browser():
    """Cukup diakses via browser untuk memastikan engine aktif."""
    return {"status": "online", "engine": "COOP-FLOW ML"}


@app.post("/predict/pupuk-presisi")
async def predict_pupuk_presisi(payload: InputPupukRequest):
    """Endpoint Mikro: Memperkirakan kebutuhan pupuk per petani."""
    try:
        # Konversi object request ke dataframe secara linear tanpa mapping berulang
        data_input = pd.DataFrame([payload.model_dump()])
        
        # Eksekusi prediksi regresi multi-output [[urea, npk]]
        hasil_array = storage_model["pupuk_presisi"].predict(data_input)
        
        return {
            "status": "success",
            "data": {
                "urea_kg": round(float(hasil_array[0][0]), 2),
                "npk_kg": round(float(hasil_array[0][1]), 2)
            }
        }
    except Exception as error:
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=str(error))


@app.post("/predict/stok-forecasting")
async def predict_stok_forecasting(payload: InputStokRequest):
    """Endpoint Makro: Meramal kuantitas pengadaan stok koperasi."""
    try:
        model_prophet = storage_model["stok_forecasting"]
        
        # Generate tanggal masa depan & ambil data tail sesuai jumlah hari request
        future_dataframe = model_prophet.make_future_dataframe(periods=payload.days_ahead, freq='D')
        hasil_forecast = model_prophet.predict(future_dataframe).tail(payload.days_ahead)
        
        # Mapping array dataframe menggunakan list comprehension (cepat & hemat memory)
        list_ramalan = [
            {
                "tanggal": row['ds'].strftime('%Y-%m-%d'),
                "estimasi_stok_keluar_kg": max(0.0, round(float(row['yhat']), 2))
            }
            for _, row in hasil_forecast.iterrows()
        ]
        
        return {
            "status": "success",
            "total_hari": payload.days_ahead,
            "data": list_ramalan
        }
    except Exception as error:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(error))