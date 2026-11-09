<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Commande;

class SalarieController extends Controller
{
    public function dashboard()
    {
        return response()->json([
            'commandes_du_jour'  => Commande::whereDate('created_at', today())->count(),
            'menus_prepares'     => 0,
            'heures_travaillees' => 0,
        ]);
    }
}
