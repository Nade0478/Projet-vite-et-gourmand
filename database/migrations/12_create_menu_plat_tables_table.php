<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('menu_plat', function (Blueprint $table) {

            // Clés étrangères
            $table->foreignId('menu_id')->constrained('menus')->onDelete('cascade');
            $table->foreignId('plat_id')->constrained('plats')->onDelete('cascade');

            // Quantité optionnelle
            $table->integer('quantite')->default(1);

            $table->timestamps();

            // Empêche les doublons menu/plat
            $table->primary(['menu_id', 'plat_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menu_plat');
    }
};
