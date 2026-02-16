<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Regime;
use Illuminate\Http\Request;

class RegimeController extends Controller
{
    public function index()
    {
        return Regime::with('menus')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'libelle' => 'required|string|unique:regimes,libelle',
        ]);

        return Regime::create($request->all());
    }

    public function show(Regime $regime)
    {
        return $regime->load('menus');
    }

    public function update(Request $request, Regime $regime)
    {
        $request->validate([
            'libelle' => 'required|string|unique:regimes,libelle,' . $regime->id,
        ]);

        $regime->update($request->all());

        return $regime->load('menus');
    }

    public function destroy(Regime $regime)
    {
        $regime->delete();

        return response()->json(['message' => 'Régime supprimé']);
    }
}
