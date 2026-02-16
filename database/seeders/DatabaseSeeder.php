<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Ordre IMPORTANT pour respecter les clés étrangères

        // 1. Rôles
        $this->call(RoleSeeder::class);

        // 2. Utilisateurs
        $this->call(UserSeeder::class);

        // 3. Régimes
        $this->call(RegimeSeeder::class);

        // 4. Thèmes
        $this->call(ThemeSeeder::class);

        // 5. Plats
        $this->call(PlatSeeder::class);

        // 6. Allergènes
        $this->call(AllergeneSeeder::class);

        // 7. Menus
        $this->call(MenuSeeder::class);

        // 8. Horaires
        $this->call(HoraireSeeder::class);

        // 9. Avis
        $this->call(AvisSeeder::class);

        // 10. Tables pivot
        // $this->call(MenuPlatSeeder::class);
        // $this->call(CommandeMenuSeeder::class);

        // 11. Commandes (générer)
        // $this->call(CommandeSeeder::class);
    }
}
