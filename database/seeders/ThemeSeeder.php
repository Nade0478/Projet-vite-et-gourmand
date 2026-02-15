<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Theme;

class ThemeSeeder extends Seeder
{
    public function run(): void
    {
        $themes = [
            'Anniversaire',
            'Mariage',
            'Entreprise',
            'Cocktail',
            'Buffet froid',
            'Gastronomique',
        ];

        foreach ($themes as $t) {
            Theme::create(['libelle' => $t]);
        }
    }
}
