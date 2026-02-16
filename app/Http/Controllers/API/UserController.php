<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        return User::with('role')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'prenom' => 'required|string',
            'nom' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'telephone' => 'required|string',
            'role_id' => 'required|exists:roles,id',
        ]);

        $data = $request->all();
        $data['password'] = Hash::make($request->password);

        return User::create($data);
    }

    public function show(User $user)
    {
        return $user->load('role');
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'prenom' => 'sometimes|string',
            'nom' => 'sometimes|string',
            'email' => 'sometimes|email|unique:users,email,' . $user->id,
            'password' => 'sometimes|string|min:6',
            'telephone' => 'sometimes|string',
            'role_id' => 'sometimes|exists:roles,id',
        ]);

        $data = $request->all();

        if ($request->password) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);

        return $user->load('role');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json(['message' => 'Utilisateur supprimé']);
    }
}
