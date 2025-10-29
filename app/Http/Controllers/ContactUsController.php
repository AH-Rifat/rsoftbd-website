<?php

namespace App\Http\Controllers;

use App\Models\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactUsController extends Controller
{
    public function index()
    {
        return inertia('contact-us/ContactUs');
    }

    public function sendMessage(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'message' => 'required|string',
        ]);

        ContactUs::create($validatedData);

        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }

    public function contactMessages()
    {
        try {
            $messages = ContactUs::latest()->get();

            return response()->json([
                'success' => true,
                'data' => $messages,
                'message' => 'Contact messages retrieved successfully',
                'count' => $messages->count()
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to fetch contact messages: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve contact messages',
                'data' => []
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $contactMessage = ContactUs::find($id);

            if (!$contactMessage) {
                return response()->json([
                    'success' => false,
                    'message' => 'Message not found'
                ], 404);
            }

            $contactMessage->delete();

            return response()->json([
                'success' => true,
                'message' => 'Message deleted successfully'
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to delete contact message: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to delete message'
            ], 500);
        }
    }
}
