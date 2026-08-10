<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\FamilyImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class FamilyImageController extends Controller
{
    /**
     * Display a listing of family images.
     */
    public function index(Request $request): Response
    {
        $search = $request->search;

        $familyImages = FamilyImage::query()
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('description', 'like', "%{$search}%")
                        ->orWhere('review', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render(
            'Admin/FamilyImages/Index',
            [
                'familyImages' => $familyImages,
                'filters' => [
                    'search' => $search,
                ],
            ]
        );
    }

    /**
     * Show the form for creating a new family image.
     */
    public function create(): Response
    {
        return Inertia::render(
            'Admin/FamilyImages/Create'
        );
    }

    /**
     * Store a newly created family image.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

            'name' => 'required|string',

            'priority_date' => 'nullable|date',

            'description' => 'required|string',

            'status' => 'required|boolean',

            'set_homepage' => 'required|boolean',

            'review' => 'required|string',
        ]);

        /*
         * Upload image
         */
        if ($request->hasFile('image')) {
            $validated['image'] = $request
                ->file('image')
                ->store('family-images', 'public');
        }

        /*
         * If this record is selected for homepage,
         * remove homepage selection from other records.
         */
        if ($validated['set_homepage']) {
            FamilyImage::where('set_homepage', true)
                ->update([
                    'set_homepage' => false,
                ]);
        }

        FamilyImage::create($validated);

        return redirect()
            ->route('dashboard.family-images.index')
            ->with(
                'success',
                'Family Image created successfully.'
            );
    }

    /**
     * Show the form for editing the specified family image.
     */
    public function edit(FamilyImage $familyImage): Response
    {
        return Inertia::render(
            'Admin/FamilyImages/Edit',
            [
                'familyImage' => $familyImage,
            ]
        );
    }

    /**
     * Update the specified family image.
     */
    public function update(
        Request $request,
        FamilyImage $familyImage
    ) {
        $validated = $request->validate([
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

            'name' => 'required|string',

            'priority_date' => 'nullable|date',

            'description' => 'required|string',

            'status' => 'required|boolean',

            'set_homepage' => 'required|boolean',

            'review' => 'required|string',
        ]);

        /*
         * Replace image only if a new image is uploaded.
         */
        if ($request->hasFile('image')) {

            /*
             * Delete old image
             */
            if ($familyImage->image) {
                Storage::disk('public')->delete(
                    $familyImage->image
                );
            }

            /*
             * Store new image
             */
            $validated['image'] = $request
                ->file('image')
                ->store('family-images', 'public');
        } else {

            /*
             * Keep existing image
             */
            unset($validated['image']);
        }

        /*
         * If this record is selected for homepage,
         * remove homepage selection from other records.
         */
        if ($validated['set_homepage']) {
            FamilyImage::where('id', '!=', $familyImage->id)
                ->where('set_homepage', true)
                ->update([
                    'set_homepage' => false,
                ]);
        }

        $familyImage->update($validated);

        return redirect()
            ->route('dashboard.family-images.index')
            ->with(
                'success',
                'Family Image updated successfully.'
            );
    }

    /**
     * Remove the specified family image.
     */
    public function destroy(FamilyImage $familyImage)
    {
        /*
         * Delete image from storage
         */
        if ($familyImage->image) {
            Storage::disk('public')->delete(
                $familyImage->image
            );
        }

        /*
         * Delete database record
         */
        $familyImage->delete();

        return redirect()
            ->route('dashboard.family-images.index')
            ->with(
                'success',
                'Family Image deleted successfully.'
            );
    }
}