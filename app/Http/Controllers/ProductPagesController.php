<?php

namespace App\Http\Controllers;

use App\Models\ProductPricePlan;
use Illuminate\Http\Request;

class ProductPagesController extends Controller
{
    public function gymSoftwarePage()
    {
        $plans = ProductPricePlan::where('product', 'gym-software')->get();
        return inertia('products/GymSoftwarePage', compact('plans'));
    }

    public function posSoftwarePage()
    {
        return inertia('products/PosSoftwarePage');
    }
}
