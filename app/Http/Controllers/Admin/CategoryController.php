<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    /**
     * Display listing
     */
    public function index(Request $request): Response
    {
        $search = $request->search;

        $categories = Category::query()
            ->when($search, function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('slug', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render(
            'Admin/Categories/Index',
            [
                'categories' => $categories,
                'filters' => [
                    'search' => $search,
                ],
            ]
        );
    }

    /**
     * Create Page
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Categories/Create');
    }

    /**
     * Store
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
            'status' => 'required|boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        Category::create($validated);

        return redirect()
            ->route('dashboard.categories.index')
            ->with('success', 'Category created successfully.');
    }

    /**
     * Edit Page
     */
    public function edit(Category $category): Response
    {
        return Inertia::render(
            'Admin/Categories/Edit',
            [
                'category' => $category,
            ]
        );
    }

    /**
     * Update
     */
    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name,' . $category->id,
            'status' => 'required|boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        $category->update($validated);

        return redirect()
            ->route('dashboard.categories.index')
            ->with('success', 'Category updated successfully.');
    }

    /**
     * Delete
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()
            ->back()
            ->with('success', 'Category deleted successfully.');
    }
}