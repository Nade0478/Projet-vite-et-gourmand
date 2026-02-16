<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Horaire;
use Illuminate\Http\Request;

class HoraireController extends Controller
{
    public function index()
    {
        return Horaire::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'jour' => 'required|string|unique:horaires,jour',
            'heure_ouverture' => 'required',
            'heure_fermeture' => 'required',
        ]);

        return Horaire::create($request->all());
    }

    public function show(Horaire $horaire)
    {
        return $horaire;
    }

    public function update(Request $request, Horaire $horaire)
    {
        $request->validate([
            'jour' => 'sometimes|string|unique:horaires,jour,' . $horaire->id,
            'heure_ouverture' => 'sometimes',
            'heure_fermeture' => 'sometimes',
        ]);

        $horaire->update($request->all());

        return $horaire;
    }

    public function destroy(Horaire $horaire)
    {
        $horaire->delete();

        return response()->json(['message' => 'Horaire supprimé']);
    }
}
