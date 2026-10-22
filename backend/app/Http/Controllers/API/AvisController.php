<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Avis;
use Illuminate\Http\Request;

class AvisController extends Controller
{
    // Public : uniquement les avis approuvés
    public function index()
    {
        $avis = Avis::where('statut', 'approuve')
            ->latest()
            ->get();

        return response()->json($avis);
    }

    // Admin : tous les avis (pour la modération)
    public function all()
    {
        if (!$this->isAdmin()) {
            return response()->json(['message' => 'Accès refusé'], 403);
        }

        return response()->json(Avis::latest()->get());
    }

    // Créer un avis (utilisateur connecté)
    public function store(Request $request)
    {
        $data = $request->validate([
            'note'        => 'required|integer|min:1|max:5',
            'description' => 'nullable|string|max:1000',
        ]);

        $avis = Avis::create([
            'user_id'     => auth()->id(),
            'note'        => $data['note'],
            'description' => $data['description'] ?? null,
            'statut'      => 'en_attente',
        ]);

        return response()->json($avis, 201);
    }

    // Afficher un avis : approuvé, ou accessible à l'admin
    public function show(string $id)
    {
        $avis = Avis::findOrFail($id);

        if ($avis->statut !== 'approuve' && !$this->isAdmin()) {
            return response()->json(['message' => 'Avis introuvable'], 404);
        }

        return response()->json($avis);
    }

    // Modifier le statut (admin)
    public function update(Request $request, string $id)
    {
        if (!$this->isAdmin()) {
            return response()->json(['message' => 'Accès refusé'], 403);
        }

        $avis = Avis::findOrFail($id);

        $data = $request->validate([
            'statut' => 'required|in:en_attente,approuve,rejete',
        ]);

        $avis->update($data);

        return response()->json($avis);
    }

    // Supprimer un avis (admin)
    public function destroy(string $id)
    {
        if (!$this->isAdmin()) {
            return response()->json(['message' => 'Accès refusé'], 403);
        }

        Avis::findOrFail($id)->delete();

        return response()->json(['message' => 'Avis supprimé']);
    }

    // À ADAPTER selon ton système de rôles
    private function isAdmin(): bool
    {
        $user = auth()->user();

        return $user && $user->role_id === 1;
    }
}
