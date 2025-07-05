<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Middleware\UserAuth;
use Illuminate\Support\Facades\Route;


Route::get('/{any}', function () {
    return view('home');
})->where('any', '.*');


Route::post('/loginn', [AuthController::class, 'login_handel']);
Route::post('/signupp', [AuthController::class, 'signup_handel']);
Route::post('/logout', [AuthController::class, 'logout']);


