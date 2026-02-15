<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Commande;
use Illuminate\Support\Str;

class CommandeSeeder extends Seeder
{
    public function run(): void
    {
        Commande::create([
            'numero_commande' => Str::upper(Str::random(10)),
            'utilisateur_id' => 3, // un client
            'date_commande' => now()->toDateString(),
            'date_prestation' => now()->addDays(3)->toDateString(),
            'heure_livraison' => '12:00',
            'prix_menu' => 120.00,
            'nombre_personne' => 10,
            'prix_livraison' => 15.00,
            'statut' => 'en_attente',
            'pret_materiel' => false,
            'restitution_materiel' => false,
        ]);
    }
}
