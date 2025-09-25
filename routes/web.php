<?php

use App\Http\Controllers\ProductPagesController;
use App\Http\Controllers\RequentProductDemoController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/gym-software', [ProductPagesController::class, 'gymSoftwarePage'])->name('gym-software');
Route::post('/request-product-demo', [RequentProductDemoController::class, 'store'])->name('request-product-demo');
