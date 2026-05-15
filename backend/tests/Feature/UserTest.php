<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function test_get_users_returns_success()
    {
        // 1. Créer un utilisateur
        $user = User::factory()->create();

        // 2. Générer un token JWT
        $token = auth()->login($user);

        // 3. Appeler la route protégée avec le token
        $response = $this->withHeader('Authorization', "Bearer $token")
            ->get('/api/users');

        // 4. Vérifier que la route répond bien 200
        $response->assertStatus(200);
    }
}
