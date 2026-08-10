<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\HomePageEditable;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomePageEditableController extends Controller
{
    public function edit(
        HomePageEditable $homePageEditable
    ): Response {

        //echo "<pre>"; print_r($homePageEditable); echo "</pre>"; exit;
        return Inertia::render(
            'Admin/HomePageEditables/Edit',
            [
                'homePageEditable' => $homePageEditable,
            ]
        );
    }

    public function update(Request $request, HomePageEditable $homePageEditable) 
    {
        $validated = $request->validate([
            'left_heading' => 'required|string|max:255',
            'left_description' => 'required|string',
        ]);

        $homePageEditable->update($validated);

        return redirect()
            ->route('dashboard.home-page.edit', $homePageEditable->id)
            ->with(
                'success',
                'Homepage editable content updated successfully.'
            );
    }
    
    /**
     * Display a listing of homepage editable content.
     */
    public function index(Request $request): Response
    {
        //
    }

    /**
     * Show the form for creating a new homepage editable.
     */
    public function create(): Response
    {
        //
    }

    /**
     * Store a newly created homepage editable.
     */
    public function store(Request $request)
    {
        // 
    }

    /**
     * Remove the specified homepage editable.
     */
    public function destroy(
        HomePageEditable $homePageEditable
    ) {
        // 
    }
}