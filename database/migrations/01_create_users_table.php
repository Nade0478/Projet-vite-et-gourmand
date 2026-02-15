<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('prenom');
            $table->string('nom');
            $table->string('telephone');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->string('adresse_postale')->nullable();
            $table->string('ville')->nullable();
            $table->string('pays')->nullable();

            // Un seul rôle par utilisateur
            $table->foreignId('role_id')->constrained()->onDelete('cascade');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
