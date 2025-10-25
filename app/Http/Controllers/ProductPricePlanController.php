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

    public function edit($id)
    {
        try {
            $plan = ProductPricePlan::findOrFail($id);
            return response()->json(['data' => $plan], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Product price plan not found', 'error' => $th->getMessage()], 404);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $validated = $request->validate([
                'name' => 'sometimes|required|string|max:255',
                'price' => 'sometimes|required|numeric',
                'period' => 'sometimes|required|string|max:100',
                'product' => 'sometimes|required|string|max:100',
                'popular' => 'sometimes|boolean',
                'features' => 'sometimes|required|array',
            ]);

            $plan = ProductPricePlan::findOrFail($id);
            $plan->update($validated);

            return response()->json(['message' => 'Product price plan updated successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed to update product price plan', 'error' => $th->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $plan = ProductPricePlan::findOrFail($id);
            $plan->delete();

            return response()->json(['message' => 'Product price plan deleted successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed to delete product price plan', 'error' => $th->getMessage()], 500);
        }
    }
}
