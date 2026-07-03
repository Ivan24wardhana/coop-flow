<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('crops', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parcel_id')->constrained()->onDelete('cascade');
            $table->string('crop_type'); // misal: padi, jagung
            $table->date('planting_date'); // Tanggal mulai tanam
            $table->date('estimated_harvest_date')->nullable(); // Diisi nanti oleh ML Engine
            $table->string('status')->default('growing'); // growing, harvested, failed
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('crops');
    }
};