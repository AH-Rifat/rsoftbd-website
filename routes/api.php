<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ProductPricePlanController;
use App\Http\Controllers\RequentProductDemoController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/request-demo-list', [RequentProductDemoController::class, 'requestDemoList'])->name('request-demo-list');
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::get('/product-price-plans', [ProductPricePlanController::class, 'index'])->name('product-price-plans.index');
Route::post('/product-price-plans', [ProductPricePlanController::class, 'store'])->name('product-price-plans.store');
