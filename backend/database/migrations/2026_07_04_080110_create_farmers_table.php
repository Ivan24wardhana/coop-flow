<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('farmers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('farmer_group_id')->nullable()->constrained('farmer_groups')->onDelete('set null');
            $table->string('nik', 16)->unique();
            
            $table->char('province_id', 2)->nullable(); 
            $table->char('city_id', 4)->nullable(); 
            $table->char('district_id', 7)->nullable(); 
            $table->char('village_id', 10)->nullable(); 

            $table->decimal('total_land_area', 8, 2)->default(0.00);
            $table->text('notes')->nullable(); 
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('farmers');
    }
};