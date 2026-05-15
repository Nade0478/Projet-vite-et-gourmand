<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_get_users_returns_success()
    {
        $user = User::factory()->create();
        $token = auth()->login($user);
        $response = $this->withHeader('Authorization', "Bearer $token")
            ->get('/api/users');
        $response->assertStatus(200);
    }
}
