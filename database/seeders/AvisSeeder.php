<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Avis;

class AvisSeeder extends Seeder
{
    public function run(): void
    {
        Avis::create([
            'utilisateur_id' => 3, // un client
            'note' => 5,
            'description' => 'Service impeccable, je recommande vivement.',
            'statut' => 'valide',
        ]);

        Avis::create([
            'utilisateur_id' => 3,
            'note' => 4,
            'description' => 'Très bon repas, livraison rapide.',
            'statut' => 'valide',
        ]);

        Avis::create([
            'utilisateur_id' => 3,
            'note' => 3,
            'description' => 'Correct mais peut mieux faire.',
            'statut' => 'en_attente',
        ]);
    }
}
