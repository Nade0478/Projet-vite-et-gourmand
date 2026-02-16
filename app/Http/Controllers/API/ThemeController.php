<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Theme;
use Illuminate\Http\Request;

class ThemeController extends Controller
{
    public function index()
    {
        return Theme::with('menus')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'libelle' => 'required|string|unique:themes,libelle',
        ]);

        return Theme::create($request->all());
    }

    public function show(Theme $theme)
    {
        return $theme->load('menus');
    }

    public function update(Request $request, Theme $theme)
    {
        $request->validate([
            'libelle' => 'required|string|unique:themes,libelle,' . $theme->id,
        ]);

        $theme->update($request->all());

        return $theme->load('menus');
    }

    public function destroy(Theme $theme)
    {
        $theme->delete();

        return response()->json(['message' => 'Thème supprimé']);
    }
}
