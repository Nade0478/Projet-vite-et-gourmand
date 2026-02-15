<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'prenom',
        'nom',
        'email',
        'telephone',
        'password',
        'adresse_postale',
        'ville',
        'pays',
        'role_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Relation : un utilisateur appartient à un rôle
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    // Relation : un utilisateur a plusieurs commandes
    public function commandes()
    {
        return $this->hasMany(Commande::class);
    }

    // Relation : un utilisateur a plusieurs avis
    public function avis()
    {
        return $this->hasMany(Avis::class);
    }
}
