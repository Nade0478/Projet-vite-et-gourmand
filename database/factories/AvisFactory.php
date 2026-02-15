<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AvisFactory extends Factory
{
    public function definition(): array
    {
        return [
            'utilisateur_id' => $this->faker->numberBetween(1, 10),
            'note' => $this->faker->numberBetween(1, 5),
            'description' => $this->faker->sentence(10),
            'statut' => $this->faker->randomElement(['en_attente', 'valide', 'refuse']),
        ];
    }
}
