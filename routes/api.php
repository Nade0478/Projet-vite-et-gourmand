<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\{
    AllergeneController,
    AvisController,
    CommandeController,
    HoraireController,
    MenuController,
    PlatController,
    RegimeController,
    RoleController,
    ThemeController,
    UserController,
    AuthController
};

// Routes publiques (auth)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Routes protégées par JWT
Route::middleware('auth:api')->group(function () {

    Route::apiResource('roles', RoleController::class);
    Route::apiResource('users', UserController::class);
    Route::apiResource('commandes', CommandeController::class);
    Route::apiResource('menus', MenuController::class);
    Route::apiResource('plats', PlatController::class);
    Route::apiResource('allergenes', AllergeneController::class);
    Route::apiResource('regimes', RegimeController::class);
    Route::apiResource('themes', ThemeController::class);
    Route::apiResource('horaires', HoraireController::class);
    Route::apiResource('avis', AvisController::class);

    // infos utilisateur connecté
    Route::get('me', [AuthController::class, 'me']);

    // déconnexion
    Route::post('logout', [AuthController::class, 'logout']);
});
