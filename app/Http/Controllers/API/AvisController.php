<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Avis;
use Illuminate\Http\Request;

class AvisController extends Controller
{
    public function index()
    {
        return Avis::with('utilisateur')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'utilisateur_id' => 'required|exists:users,id',
            'note' => 'required|integer|min:1|max:5',
            'description' => 'nullable|string',
            'statut' => 'nullable|string',
        ]);

        return Avis::create($request->all());
    }

    public function show(Avis $avi)
    {
        return $avi->load('utilisateur');
    }

    public function update(Request $request, Avis $avi)
    {
        $request->validate([
            'note' => 'sometimes|integer|min:1|max:5',
            'description' => 'sometimes|string',
            'statut' => 'sometimes|string',
        ]);

        $avi->update($request->all());

        return $avi->load('utilisateur');
    }

    public function destroy(Avis $avi)
    {
        $avi->delete();

        return response()->json(['message' => 'Avis supprimé']);
    }
}
