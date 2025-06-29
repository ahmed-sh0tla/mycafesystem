<?php

use App\Models\Order;
use Illuminate\Support\Facades\Route;


Route::get('/{any}', function () {
    return view('home');
})->where('any', '.*');


Route::post('/myorders', function() {
    return response()->json(['message' => 'Test route works']);
});