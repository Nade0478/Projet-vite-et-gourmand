<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ThemeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'libelle' => $this->faker->randomElement([
                'Anniversaire',
                'Mariage',
                'Entreprise',
                'Cocktail',
                'Buffet froid',
                'Gastronomique'
            ]),
        ];
    }
}
