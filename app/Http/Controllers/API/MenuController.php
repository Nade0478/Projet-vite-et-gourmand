<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        return Menu::with(['regime', 'theme', 'plats'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string',
            'nombre_personne_min' => 'required|integer',
            'prix_par_personne' => 'required|numeric',
            'description' => 'nullable|string',
            'quantite_restante' => 'required|integer',
            'regime_id' => 'required|exists:regimes,id',
            'theme_id' => 'required|exists:themes,id',
        ]);

        $menu = Menu::create($request->all());

        return $menu->load(['regime', 'theme']);
    }

    public function show(Menu $menu)
    {
        return $menu->load(['regime', 'theme', 'plats']);
    }

    public function update(Request $request, Menu $menu)
    {
        $request->validate([
            'titre' => 'sometimes|string',
            'nombre_personne_min' => 'sometimes|integer',
            'prix_par_personne' => 'sometimes|numeric',
            'description' => 'sometimes|string',
            'quantite_restante' => 'sometimes|integer',
            'regime_id' => 'sometimes|exists:regimes,id',
            'theme_id' => 'sometimes|exists:themes,id',
        ]);

        $menu->update($request->all());

        return $menu->load(['regime', 'theme', 'plats']);
    }

    public function destroy(Menu $menu)
    {
        $menu->delete();

        return response()->json(['message' => 'Menu supprimé']);
    }
}
