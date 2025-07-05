<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return response()->json(Menu::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
        'price' => 'nullable|numeric|max:10000',
        'components' => 'nullable|string|max:500',
        'categories' => 'required|string',
    ]);

    $menu = Menu::create($validated);

    return response()->json($menu, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(menu $menu)
    {
        //
        return $menu;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, menu $menu)
    {
        //
        $validated = $request->validate([
        'price' => 'nullable|numeric|max:10000',
        'components' => 'nullable|string|max:500',
        'categories' => 'required|string',
    ]);
    
    
        $menu->update($validated);

        return response()->json($menu);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $menu = Menu::findOrFail($id);
        $menu->delete();
        return response()->json(['message' => 'Order deleted successfully']);
    }
}
