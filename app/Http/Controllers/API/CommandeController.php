<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Commande;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CommandeController extends Controller
{
    public function index()
    {
        return Commande::with('utilisateur', 'menus')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'utilisateur_id' => 'required|exists:users,id',
            'date_commande' => 'required|date',
            'date_prestation' => 'required|date',
            'heure_livraison' => 'required',
            'prix_menu' => 'required|numeric',
            'nombre_personne' => 'required|integer',
            'prix_livraison' => 'required|numeric',
            'statut' => 'required|string',
        ]);

        $data = $request->all();
        $data['numero_commande'] = Str::upper(Str::random(10));

        $commande = Commande::create($data);

        return $commande->load('utilisateur');
    }

    public function show(Commande $commande)
    {
        return $commande->load('utilisateur', 'menus');
    }

    public function update(Request $request, Commande $commande)
    {
        $request->validate([
            'date_commande' => 'sometimes|date',
            'date_prestation' => 'sometimes|date',
            'heure_livraison' => 'sometimes',
            'prix_menu' => 'sometimes|numeric',
            'nombre_personne' => 'sometimes|integer',
            'prix_livraison' => 'sometimes|numeric',
            'statut' => 'sometimes|string',
        ]);

        $commande->update($request->all());

        return $commande->load('utilisateur', 'menus');
    }

    public function destroy(Commande $commande)
    {
        $commande->delete();

        return response()->json(['message' => 'Commande supprimée']);
    }
}
