<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenuController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\RawMaterialController;
use App\Http\Controllers\PayPalController;

Route::post('/myorders', [OrderController::class, 'store']);
Route::get('/ordersview', [OrderController::class, 'index']);
Route::put('/ordersview/{order}', [OrderController::class, 'update']);
Route::delete('/ordersview/{id}', [OrderController::class, 'destroy']);

Route::post('/mymenu', [MenuController::class, 'store']);
Route::get('/menusview', [MenuController::class, 'index']);
Route::put('/menusview/{menu}', [MenuController::class, 'update']);
Route::delete('/menusview/{id}', [MenuController::class, 'destroy']);

Route::get('/users', [AuthController::class, 'allUsers']);


Route::get('/inventory', [RawMaterialController::class, 'index']);
Route::post('/inventory', [RawMaterialController::class, 'store']);
Route::patch('/inventory/{id}/quantity', [RawMaterialController::class, 'updateQuantity']);
Route::delete('/inventory/{id}', [RawMaterialController::class, 'destroy']);

Route::get('/daily-report', [RawMaterialController::class, 'dailyReport']);



