<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('commandes', function (Blueprint $table) {
            $table->id();

            // Numéro de commande
            $table->string('numero_commande')->unique();

            // Relation avec l'utilisateur
            $table->foreignId('utilisateur_id')->constrained('users')->onDelete('cascade');

            // Dates
            $table->date('date_commande');
            $table->date('date_prestation');
            $table->time('heure_livraison');

            // Prix
            $table->decimal('prix_menu', 8, 2);
            $table->integer('nombre_personne');
            $table->decimal('prix_livraison', 8, 2);

            // Statut de la commande
            $table->string('statut')->default('en_attente');

            // Matériel
            $table->boolean('pret_materiel')->default(false);
            $table->boolean('restitution_materiel')->default(false);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
