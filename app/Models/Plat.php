<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plat extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre_plat',
        'description',
        'photo_path',
    ];

    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */

    // Un plat appartient à plusieurs menus
    public function menus()
    {
        return $this->belongsToMany(Menu::class, 'menu_plat')
            ->withPivot(['quantite'])
            ->withTimestamps();
    }

    // Un plat peut avoir plusieurs allergènes
    public function allergenes()
    {
        return $this->belongsToMany(Allergene::class, 'plat_allergene')
            ->withTimestamps();
    }
}
