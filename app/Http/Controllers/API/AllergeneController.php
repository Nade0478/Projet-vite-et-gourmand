<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Allergene;
use Illuminate\Http\Request;

class AllergeneController extends Controller
{
    public function index()
    {
        return Allergene::with('plats')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'libelle' => 'required|string|unique:allergenes,libelle',
        ]);

        return Allergene::create($request->all());
    }

    public function show(Allergene $allergene)
    {
        return $allergene->load('plats');
    }

    public function update(Request $request, Allergene $allergene)
    {
        $request->validate([
            'libelle' => 'required|string|unique:allergenes,libelle,' . $allergene->id,
        ]);

        $allergene->update($request->all());

        return $allergene->load('plats');
    }

    public function destroy(Allergene $allergene)
    {
        $allergene->delete();

        return response()->json(['message' => 'Allergène supprimé']);
    }
}
