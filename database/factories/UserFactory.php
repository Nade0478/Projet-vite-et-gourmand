<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    public function definition(): array
    {
        return [
            'prenom' => $this->faker->firstName(),
            'nom' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => Hash::make('password'),
            'telephone' => $this->faker->phoneNumber(),
            'adresse_postale' => $this->faker->address(),
            'ville' => $this->faker->city(),
            'pays' => $this->faker->country(),
            'role_id' => $this->faker->randomElement([1, 2, 3]),
        ];
    }
}
