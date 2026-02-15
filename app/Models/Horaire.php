<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'nombre_personne_min',
        'prix_par_personne',
        'description',
        'quantite_restante',
        'regime_id',
        'theme_id',
    ];

    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */

    // Un menu appartient à un régime
    public function regime()
    {
        return $this->belongsTo(Regime::class);
    }

    // Un menu appartient à un thème
    public function theme()
    {
        return $this->belongsTo(Theme::class);
    }

    // Un menu contient plusieurs plats (pivot menu_plat)
    public function plats()
    {
        return $this->belongsToMany(Plat::class, 'menu_plat')
            ->withPivot(['quantite'])
            ->withTimestamps();
    }

    // Un menu peut apparaître dans plusieurs commandes
    public function commandes()
    {
        return $this->belongsToMany(Commande::class, 'commande_menu')
            ->withPivot(['quantite', 'prix_unitaire'])
            ->withTimestamps();
    }
}
