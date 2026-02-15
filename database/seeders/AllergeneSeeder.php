<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Allergene;

class AllergeneSeeder extends Seeder
{
    public function run(): void
    {
        $allergenes = [
            'Gluten',
            'Lactose',
            'Fruits à coque',
            'Arachides',
            'Soja',
            'Œufs',
            'Poisson',
            'Crustacés',
            'Moutarde',
            'Sésame',
        ];

        foreach ($allergenes as $a) {
            Allergene::create(['libelle' => $a]);
        }
    }
}
