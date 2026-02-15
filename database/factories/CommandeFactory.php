<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CommandeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'numero_commande' => Str::upper(Str::random(10)),
            'utilisateur_id' => $this->faker->numberBetween(1, 10),
            'date_commande' => $this->faker->date(),
            'date_prestation' => $this->faker->date(),
            'heure_livraison' => $this->faker->time(),
            'prix_menu' => $this->faker->randomFloat(2, 20, 300),
            'nombre_personne' => $this->faker->numberBetween(1, 100),
            'prix_livraison' => $this->faker->randomFloat(2, 0, 50),
            'statut' => $this->faker->randomElement(['en_attente', 'validee', 'livree', 'annulee']),
            'pret_materiel' => $this->faker->boolean(),
            'restitution_materiel' => $this->faker->boolean(),
        ];
    }
}
