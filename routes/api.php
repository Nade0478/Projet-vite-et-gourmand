<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    AllergeneController,
    AvisController,
    CommandeController,
    HoraireController,
    MenuController,
    PlatController,
    RegimeController,
    RoleController,
    ThemeController,
    UserController
};

// Route protégée par Sanctum (optionnelle)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Toutes les routes API REST
Route::middleware('api')->group(function () {

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
});
