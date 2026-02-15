<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AllergeneFactory extends Factory
{
    public function definition(): array
    {
        return [
            'libelle' => $this->faker->randomElement([
                'Gluten',
                'Lactose',
                'Arachides',
                'Soja',
                'Œufs',
                'Poisson'
            ]),
        ];
    }
}
