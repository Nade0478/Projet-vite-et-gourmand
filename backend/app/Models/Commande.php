<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;

    protected $fillable = [
        'numero_commande',
        'user_id',
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
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Une commande contient plusieurs menus (pivot commande_menu)
    public function menu()
    {
        return $this->belongsToMany(Menu::class, 'commande_menu')
            ->withPivot(['quantite', 'prix_unitaire'])
            ->withTimestamps();
    }
}
