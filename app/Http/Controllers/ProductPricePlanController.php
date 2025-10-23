<?php

namespace App\Http\Controllers;

use App\Models\ProductPricePlan;
use Illuminate\Http\Request;

class ProductPricePlanController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:sanctum');
    // }

    public function index()
    {
        return response()->json(['data' => ProductPricePlan::orderBy('id', 'desc')->get()], 200);
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric',
                'period' => 'required|string|max:100',
                'product' => 'required|string|max:100',
                'popular' => 'boolean',
                'features' => 'required|array',
            ]);

            ProductPricePlan::create($validated);

            return response()->json(['message' => 'Product price plan created successfully'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed to create product price plan', 'error' => $th->getMessage()], 500);
        }
    }
}
