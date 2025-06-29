<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Order::all();
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
            'table_number' => 'nullable|string|max:255',
            'customer_name' => 'nullable|string|max:255',
            'type' => 'required|string',
            'status' => 'required|string',
        ]);

        $order = Order::create($validated);

        return response()->json($order, 201);

        
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
        return $order;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
        $validated = $request->validate([
            'table_number' => 'nullable|string|max:255',
            'customer_name' => 'nullable|string|max:255',
            'type' => 'sometimes|required|string',
            'status' => 'sometimes|required|string',
        ]);

        $order->update($validated);

        return response()->json($order);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
        $order->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
