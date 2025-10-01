<?php

namespace App\Http\Controllers;

use App\Models\RequentProductDemo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\RequestDemoMail;

class RequentProductDemoController extends Controller
{
    public function store(Request $request, RequentProductDemo $requentProductDemo)
    {
        $validated = $request->validate([
            'package_name' => 'required',
            'product_name' => 'required',
            'product_price' => 'required|integer',
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|min:11',
            'message' => 'nullable',
        ]);

        $isRequestCount = $requentProductDemo->where('email', $validated['email'])
            ->where('package_name', $validated['package_name'])
            ->where('product_name', $validated['product_name'])->count();

        if ($isRequestCount > 0) {
            return redirect()->back()->with('error', 'Product demo request allready submitted');
        }

        Mail::to($validated['email'])->send(new RequestDemoMail($validated));
        $requentProductDemo->create($validated);

        return redirect()->back()->with('success', 'Product demo request submitted successfully.');
    }

    public function requestDemoList()
    {
        return response()->json(RequentProductDemo::latest()->get());
    }
}
