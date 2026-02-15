<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;

    protected $fillable = [
        'numero_commande',
        'utilisateur_id',
        'date_commande',
        'date_prestation',
        'heure_livraison',
        'prix_menu',
        'nombre_personne',
        'prix_livraison',
        'statut',
        'pret_materiel',
        'restitution_materiel',
    ];

    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */

    // Une commande appartient à un utilisateur
    public function utilisateur()
    {
        return $this->belongsTo(User::class, 'utilisateur_id');
    }

    // Une commande contient plusieurs menus (pivot commande_menu)
    public function menus()
    {
        return $this->belongsToMany(Menu::class, 'commande_menu')
            ->withPivot(['quantite', 'prix_unitaire'])
            ->withTimestamps();
    }
}
