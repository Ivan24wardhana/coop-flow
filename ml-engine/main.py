from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="COOP-FLOW ML Engine",
    description="API untuk prediksi kebutuhan dan mitigasi kelangkaan pupuk",
    version="1.0.0"
)

# Template skema data input (contoh data luas lahan dan jenis tanaman)
class PredictionInput(BaseModel):
    land_area: float
    crop_type: str

@app.get("/")
def read_root():
    return {"status": "online", "message": "COOP-FLOW ML Engine API is running"}

@app.post("/predict")
def predict_fertilizer(data: PredictionInput):
    # Ini tempat menaruh model Linear Regression / Prophet nanti
    # Sementara kita buat dummy logic dulu untuk testing
    recommended_amount = data.land_area * 150 
    
    return {
        "status": "success",
        "input": {
            "land_area": data.land_area,
            "crop_type": data.crop_type
        },
        "prediction": {
            "recommended_fertilizer_kg": recommended_amount,
            "confidence_score": 0.95
        }
    }