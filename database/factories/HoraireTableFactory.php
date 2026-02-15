<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class HoraireFactory extends Factory
{
    public function definition(): array
    {
        return [
            'jour' => $this->faker->randomElement([
                'Lundi',
                'Mardi',
                'Mercredi',
                'Jeudi',
                'Vendredi',
                'Samedi',
                'Dimanche'
            ]),
            'heure_ouverture' => $this->faker->time('H:i'),
            'heure_fermeture' => $this->faker->time('H:i'),
        ];
    }
}
