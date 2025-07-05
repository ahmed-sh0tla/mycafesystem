<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login_handel(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email:dns,rfc',
            'password' => 'required|string|min:8'
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();
            return response()->json(['message' => 'Login successful'], 200);
        }

        return response()->json([
            'errors' => ['email' => ['Email or password is incorrect']]
        ], 422);
    }

    public function signup_handel(Request $request)
    {
        $validated = $request->validate([
            'fullname' => 'required|string|min:3',
            'email' => 'required|email:dns,rfc|unique:users,email',
            'password' => 'required|string|min:8'
        ]);

        User::create([
            'name' => $request->fullname,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json(['message' => 'User created successfully'], 201);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully']);
    }

    public function allUsers()
{
    $users = User::all();
    return response()->json($users);
}
}
