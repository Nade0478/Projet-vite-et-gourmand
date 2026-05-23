<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Avis;
use Illuminate\Http\Request;

class AvisController extends Controller
{
    // Lister tous les avis
    public function index()
    {
        $avis = Avis::all();
        return response()->json($avis);
    }

    // Créer un avis
    public function store(Request $request)
    {
        $request->validate([
            'note'        => 'required|integer|min:1|max:5',
            'description' => 'nullable|string',
        ]);

        $avis = Avis::create([
            'user_id'     => auth()->id(),
            'note'        => $request->note,
            'description' => $request->description,
            'statut'      => 'en_attente',
        ]);

        return response()->json($avis, 201);
    }

    // Afficher un avis
    public function show(string $id)
    {
        $avis = Avis::findOrFail($id);
        return response()->json($avis);
    }

    // Modifier le statut d'un avis (admin)
    public function update(Request $request, string $id)
    {
        $avis = Avis::findOrFail($id);

        $request->validate([
            'statut' => 'required|in:en_attente,approuve,rejete',
        ]);

        $avis->update(['statut' => $request->statut]);

        return response()->json($avis);
    }

    // Supprimer un avis
    public function destroy(string $id)
    {
        $avis = Avis::findOrFail($id);
        $avis->delete();
        return response()->json(['message' => 'Avis supprimé']);
    }
}
