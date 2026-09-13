<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class AuthController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('auth:api', except: ['login', 'register']),
        ];
    }

    public function register(Request $request)
    {
        $request->validate([
            'prenom' => 'required|string',
            'nom' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
            'telephone' => 'required|string',
            'role_id' => 'required|exists:roles,id',
        ]);

        $user = User::create([
            'prenom' => $request->prenom,
            'nom' => $request->nom,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Sécurisé par le hachage du mot de passe
            'telephone' => $request->telephone,
            'role_id' => $request->role_id,
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'Inscription réussie',
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Identifiants incorrects'], 401);
        }

        /** @var \App\Models\User|null $user */
        $user = auth()->user();

        return response()->json([
            'message' => 'Connexion réussie',
            'token' => $token,
            'user' => $user
        ]);
    }

    public function me()
    {
        /** @var \App\Models\User|null $user */
        $user = auth()->user();

        return response()->json($user);
    }

    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Déconnexion réussie']);
    }
}
