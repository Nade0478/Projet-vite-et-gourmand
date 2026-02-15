<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'prenom' => 'Admin',
            'nom' => 'Principal',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'telephone' => '0102030405',
            'role_id' => 1, // administrateur
        ]);

        User::create([
            'prenom' => 'Jean',
            'nom' => 'Salarie',
            'email' => 'salarie@example.com',
            'password' => Hash::make('password'),
            'telephone' => '0102030406',
            'role_id' => 2, // salarie
        ]);

        User::create([
            'prenom' => 'Marie',
            'nom' => 'Client',
            'email' => 'client@example.com',
            'password' => Hash::make('password'),
            'telephone' => '0102030407',
            'role_id' => 3, // client
        ]);
    }
}
