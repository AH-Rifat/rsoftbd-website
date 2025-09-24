<?php

use App\Http\Controllers\ProductPagesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/gym-software', [ProductPagesController::class, 'gymSoftwarePage'])->name('gym-software');
