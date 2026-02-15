<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();

            // Champs principaux
            $table->string('titre');
            $table->integer('nombre_personne_min');
            $table->decimal('prix_par_personne', 8, 2);
            $table->text('description')->nullable();
            $table->integer('quantite_restante')->default(0);

            // Relations
            $table->foreignId('regime_id')->constrained('regimes')->onDelete('cascade');
            $table->foreignId('theme_id')->constrained('themes')->onDelete('cascade');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
