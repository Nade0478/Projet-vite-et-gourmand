<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('horaires', function (Blueprint $table) {
            $table->id();

            // Jour de la semaine
            $table->string('jour');

            // Heures d'ouverture et de fermeture
            $table->time('heure_ouverture');
            $table->time('heure_fermeture');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('horaires');
    }
};
