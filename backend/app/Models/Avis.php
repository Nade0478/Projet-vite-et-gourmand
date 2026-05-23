<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Avis extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'avis';

    protected $fillable = [
        'user_id',
        'note',
        'description',
        'statut',
    ];

    protected $attributes = [
        'statut' => 'en_attente',
    ];
}
