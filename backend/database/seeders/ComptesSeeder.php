<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ComptesSeeder extends Seeder
{
    public function run(): void
    {
        $this->creer('administrateur', 'admin@viteetgourmand.fr', 'Admin', env('ADMIN_PASSWORD', 'ChangeMe123!'));
        $this->creer('salarie', 'salarie@viteetgourmand.fr', 'Salarié', env('SALARIE_PASSWORD', 'ChangeMe123!'));
    }

    private function creer(string $role, string $email, string $nom, string $password): void
    {
        User::updateOrCreate(
            ['email' => $email],
            [
                'nom'      => $nom,
                'prenom'   => 'Test',
                'password' => Hash::make($password),
                'role_id'  => Role::where('name', $role)->value('id'),
            ]
        );
    }
}
