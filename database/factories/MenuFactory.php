<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MenuFactory extends Factory
{
    public function definition(): array
    {
        return [
            'titre' => $this->faker->sentence(3),
            'nombre_personne_min' => $this->faker->numberBetween(5, 20),
            'prix_par_personne' => $this->faker->randomFloat(2, 10, 50),
            'description' => $this->faker->paragraph(),
            'quantite_restante' => $this->faker->numberBetween(0, 100),
            'regime_id' => $this->faker->numberBetween(1, 3),
            'theme_id' => $this->faker->numberBetween(1, 3),
        ];
    }
}
