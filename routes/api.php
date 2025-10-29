<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\ProductPricePlanController;
use App\Http\Controllers\RequentProductDemoController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::get('/request-demo-list', [RequentProductDemoController::class, 'requestDemoList'])->name('request-demo-list');

// Product Price Plan Routes
Route::get('/product-price-plans', [ProductPricePlanController::class, 'index'])->name('product-price-plans.index');
Route::post('/product-price-plans', [ProductPricePlanController::class, 'store'])->name('product-price-plans.store');
Route::get('/product-price-plans/{id}/edit', [ProductPricePlanController::class, 'edit'])->name('product-price-plans.edit');
Route::put('/product-price-plans/{id}', [ProductPricePlanController::class, 'update'])->name('product-price-plans.update');
Route::delete('/product-price-plans/{id}', [ProductPricePlanController::class, 'destroy'])->name('product-price-plans.destroy');

// Contact Messages Routes
Route::controller(ContactUsController::class)->group(function () {
    Route::get('/contact-messages', 'contactMessages')->name('contact-messages');
    Route::delete('/contact-messages/{id}', 'destroy')->name('contact-messages.destroy');
});
