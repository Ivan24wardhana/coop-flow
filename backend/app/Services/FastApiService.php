<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Exception;

class FastApiService
{
    protected string $baseUrl;
    protected int $timeout;

    public function __construct()
    {
        $this->baseUrl = config('services.fastapi.base_url');
        $this->timeout = config('services.fastapi.timeout');
    }

    /**
     * Mengirim data lahan ke FastAPI untuk prediksi kebutuhan pupuk
     */
    public function predictFertilizer(array $data): ?array
    {
        try {
            $response = Http::timeout($this->timeout)
                ->withHeaders(['Accept' => 'application/json'])
                ->post("{$this->baseUrl}/predict/fertilizer", $data);

            if ($response->successful()) {
                return $response->json();
            }

            Log::error('FastAPI Fertilizer Prediction Failed: ' . $response->body());
            return null;

        } catch (Exception $e) {
            Log::error('FastAPI Connection Error: ' . $e->getMessage());
            return null;
        }
    }

    /**
     * Mengirim data stok ke FastAPI untuk peramalan stock-out/bullwhip
     */
    public function forecastStock(array $data): ?array
    {
        try {
            $response = Http::timeout($this->timeout)
                ->withHeaders(['Accept' => 'application/json'])
                ->post("{$this->baseUrl}/forecast/stock", $data);

            if ($response->successful()) {
                return $response->json();
            }

            Log::error('FastAPI Stock Forecast Failed: ' . $response->body());
            return null;

        } catch (Exception $e) {
            Log::error('FastAPI Connection Error: ' . $e->getMessage());
            return null;
        }
    }
}