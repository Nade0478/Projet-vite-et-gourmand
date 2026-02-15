<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Regime;

class RegimeSeeder extends Seeder
{
    public function run(): void
    {
        $regimes = [
            'Classique',
            'Végétarien',
            'Vegan',
            'Sans gluten',
            'Halal',
            'Casher',
        ];

        foreach ($regimes as $r) {
            Regime::create(['libelle' => $r]);
        }
    }
}
