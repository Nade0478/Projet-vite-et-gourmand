<?php

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
    AuthController,
};

// Routes publiques
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/health', fn() => ['status' => 'ok']);

// Lectures publiques (catalogue)
Route::apiResource('menus', MenuController::class)->only(['index', 'show']);
Route::apiResource('plats', PlatController::class)->only(['index', 'show']);
Route::apiResource('allergenes', AllergeneController::class)->only(['index', 'show']);
Route::apiResource('regimes', RegimeController::class)->only(['index', 'show']);
Route::apiResource('themes', ThemeController::class)->only(['index', 'show']);
Route::apiResource('horaires', HoraireController::class)->only(['index', 'show']);
Route::apiResource('avis', AvisController::class)->only(['index']);

// Routes protégées par JWT
Route::middleware('auth:api')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('roles', RoleController::class);
    Route::apiResource('users', UserController::class);
    Route::apiResource('commandes', CommandeController::class);

    Route::apiResource('menus', MenuController::class)->except(['index', 'show']);
    Route::apiResource('plats', PlatController::class)->except(['index', 'show']);
    Route::apiResource('allergenes', AllergeneController::class)->except(['index', 'show']);
    Route::apiResource('regimes', RegimeController::class)->except(['index', 'show']);
    Route::apiResource('themes', ThemeController::class)->except(['index', 'show']);
    Route::apiResource('horaires', HoraireController::class)->except(['index', 'show']);
    Route::apiResource('avis', AvisController::class)->except(['index']);
});
