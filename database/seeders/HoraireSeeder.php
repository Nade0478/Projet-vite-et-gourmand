<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Horaire;

class HoraireSeeder extends Seeder
{
    public function run(): void
    {
        $jours = [
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi',
            'Dimanche'
        ];

        foreach ($jours as $jour) {
            Horaire::create([
                'jour' => $jour,
                'heure_ouverture' => '09:00',
                'heure_fermeture' => '18:00',
            ]);
        }
    }
}
