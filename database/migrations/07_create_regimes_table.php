<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('regimes', function (Blueprint $table) {
            $table->id();

            // Libellé du régime
            $table->string('libelle');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('regimes');
    }
};
