<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Menu;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        Menu::create([
            'titre' => 'Menu Traditionnel',
            'nombre_personne_min' => 10,
            'prix_par_personne' => 25.50,
            'description' => 'Un menu classique pour vos événements.',
            'quantite_restante' => 50,
            'regime_id' => 1,
            'theme_id' => 1,
        ]);

        Menu::create([
            'titre' => 'Menu Végétarien',
            'nombre_personne_min' => 8,
            'prix_par_personne' => 22.00,
            'description' => 'Un menu 100% végétarien.',
            'quantite_restante' => 30,
            'regime_id' => 2,
            'theme_id' => 2,
        ]);
    }
}
