<?php

use App\Http\Controllers\ProductPagesController;
use App\Http\Controllers\RequentProductDemoController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});
Route::get('/contact', function () {
    return inertia('contact-us/ContactUs');
});
Route::get('/gym-software', [ProductPagesController::class, 'gymSoftwarePage'])->name('gym-software');
Route::post('/request-product-demo', [RequentProductDemoController::class, 'store'])->name('request-product-demo');
Route::get('/request-demo-list', [RequentProductDemoController::class, 'requestDemoList'])->name('request-demo-list');
Route::get('/pos-software', [ProductPagesController::class, 'posSoftwarePage'])->name('pos-software');
