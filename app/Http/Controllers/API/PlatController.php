<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Plat;
use Illuminate\Http\Request;

class PlatController extends Controller
{
    public function index()
    {
        return Plat::with(['menus', 'allergenes'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre_plat' => 'required|string',
            'description' => 'nullable|string',
            'photo_path' => 'nullable|string',
        ]);

        return Plat::create($request->all());
    }

    public function show(Plat $plat)
    {
        return $plat->load(['menus', 'allergenes']);
    }

    public function update(Request $request, Plat $plat)
    {
        $request->validate([
            'titre_plat' => 'sometimes|string',
            'description' => 'sometimes|string',
            'photo_path' => 'sometimes|string',
        ]);

        $plat->update($request->all());

        return $plat->load(['menus', 'allergenes']);
    }

    public function destroy(Plat $plat)
    {
        $plat->delete();

        return response()->json(['message' => 'Plat supprimé']);
    }
}
