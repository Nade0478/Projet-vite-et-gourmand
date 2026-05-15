<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Role;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_users_returns_success()
    {
        // Créer le rôle d'abord
        $role = Role::create(['nom' => 'admin']);

        // Créer un utilisateur avec ce rôle
        $user = User::factory()->create(['role_id' => $role->id]);

        $token = auth()->login($user);

        $response = $this->withHeader('Authorization', "Bearer $token")
            ->get('/api/users');

        $response->assertStatus(200);
    }
}
