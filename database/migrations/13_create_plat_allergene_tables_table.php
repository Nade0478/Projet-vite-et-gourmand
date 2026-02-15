<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('plat_allergene', function (Blueprint $table) {

            // Clés étrangères
            $table->foreignId('plat_id')->constrained('plats')->onDelete('cascade');
            $table->foreignId('allergene_id')->constrained('allergenes')->onDelete('cascade');

            $table->timestamps();

            // Empêche les doublons plat/allergene
            $table->primary(['plat_id', 'allergene_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('plat_allergene');
    }
};
