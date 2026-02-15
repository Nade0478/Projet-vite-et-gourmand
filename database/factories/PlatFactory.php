<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PlatFactory extends Factory
{
    public function definition(): array
    {
        return [
            'titre_plat' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'photo_path' => null,
        ];
    }
}
