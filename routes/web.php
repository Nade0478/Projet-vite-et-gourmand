<?php

use App\Http\Controllers\CommandeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;




Route::middleware('api')->group(function () {
    Route::apiResource('roles', RoleController::class);
});

Route::middleware('api')->group(function () {
    Route::apiResource('users', UserController::class);
});

Route::middleware('api')->group(function () {
    Route::apiResource('commandes', CommandeController::class);
});
Route::middleware('api')->group(function () {
    Route::apiResource('menus', MenuController::class);
});