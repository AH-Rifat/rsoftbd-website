<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductPagesController extends Controller
{
    public function gymSoftwarePage()
    {
        return inertia('products/GymSoftwarePage');
    }
}
