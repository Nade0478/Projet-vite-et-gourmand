<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('commandes', function (Blueprint $table) {
            $table->id();
            $table->string('numéro_commande');
            $table->date('date_prestation');
            $table->string('statut');
            $table->date('heure_livraison');
            $table->int('prix_menu');
            $table->int('prix_livraison');
            $table->int('nombre_personnes');
            $table->string('pret_materiel');
            $table->string('réalisation_materiel');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
