<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('avis', function (Blueprint $table) {
            $table->id();

            // Relation avec l'utilisateur
            $table->foreignId('utilisateur_id')->constrained('users')->onDelete('cascade');

            // Note entre 1 et 5
            $table->integer('note');

            // Description de l'avis
            $table->text('description')->nullable();

            // Statut
            $table->string('statut')->default('en_attente');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('avis');
    }
};
