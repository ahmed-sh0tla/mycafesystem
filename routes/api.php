<?php

use App\Models\Order;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;

Route::post('/myorders', [OrderController::class, 'store']);
