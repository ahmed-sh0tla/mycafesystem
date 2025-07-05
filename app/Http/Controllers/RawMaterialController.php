<?php

namespace App\Http\Controllers;

use App\Models\RawMaterial;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RawMaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return  RawMaterial::all();
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
         $request->validate([
            'name' => 'required|string',
            'quantity' => 'required|integer|min:0',
            'unit' => 'required|string',
        ]);

        $material = RawMaterial::create($request->all());

        return response()->json($material, 201);
    }

    
    public function updateQuantity(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'required|integer|min:0',
        ]);

        $material = RawMaterial::findOrFail($id);
        $material->quantity = $request->quantity;
        $material->save();

        return response()->json($material);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $material = RawMaterial::findOrFail($id);
        $material->delete();
}

 public function dailyReport()
    {
        $today = Carbon::today();
        $materials = RawMaterial::whereDate('created_at', $today)->get();

        return response()->json([
            'date' => $today->toDateString(),
            'total_count' => $materials->count(),
            'total_quantity' => $materials->sum('quantity'),
            'materials' => $materials,
        ]);
    }

}