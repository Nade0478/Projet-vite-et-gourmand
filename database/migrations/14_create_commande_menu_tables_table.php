<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('commande_menu', function (Blueprint $table) {

            // Clés étrangères
            $table->foreignId('commande_id')->constrained('commandes')->onDelete('cascade');
            $table->foreignId('menu_id')->constrained('menus')->onDelete('cascade');

            // Quantité commandée
            $table->integer('quantite')->default(1);

            // Prix unitaire du menu au moment de la commande
            $table->decimal('prix_unitaire', 8, 2);

            $table->timestamps();

            // Empêche les doublons commande/menu
            $table->primary(['commande_id', 'menu_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('commande_menu');
    }
};
