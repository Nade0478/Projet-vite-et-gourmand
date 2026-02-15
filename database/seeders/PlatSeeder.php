<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Plat;

class PlatSeeder extends Seeder
{
    public function run(): void
    {
        Plat::create([
            'titre_plat' => 'Poulet rôti',
            'description' => 'Poulet fermier rôti avec herbes de Provence.',
            'photo_path' => null,
        ]);

        Plat::create([
            'titre_plat' => 'Salade César',
            'description' => 'Salade fraîche avec poulet, parmesan et croûtons.',
            'photo_path' => null,
        ]);

        Plat::create([
            'titre_plat' => 'Tarte aux légumes',
            'description' => 'Tarte maison aux légumes de saison.',
            'photo_path' => null,
        ]);
    }
}
