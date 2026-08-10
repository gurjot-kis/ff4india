<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Blog;
use App\Models\Admin\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Display Blogs
     */
    public function index(Request $request): Response
    {
        $search = $request->search;

        $blogs = Blog::with('category')
            ->when($search, function ($query) use ($search) {
                $query->where('title', 'like', "%{$search}%")
                    ->orWhere('slug', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Create Page
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Blogs/Create', [
            'categories' => Category::where('status', 1)
                ->orderBy('name')
                ->get(['id', 'name']),
        ]);
    }

    /**
     * Store Blog
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id'      => 'required|exists:categories,id',
            'title'            => 'required|string|max:255',
            'featured_image'   => 'nullable|image|mimes:jpg,jpeg,png,webp|max:4096',
            'description'      => 'required',
            'meta_title'       => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'meta_keywords'    => 'nullable|string',
            'status'           => 'required|boolean',
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = $request
                ->file('featured_image')
                ->store('blogs', 'public');
        }

        Blog::create($validated);

        return redirect()
            ->route('dashboard.blogs.index')
            ->with('success', 'Blog created successfully.');
    }

    /**
     * Edit Page
     */
    public function edit(Blog $blog): Response
    {
        return Inertia::render('Admin/Blogs/Edit', [
            'blog' => $blog,
            'categories' => Category::where('status', 1)
                ->orderBy('name')
                ->get(['id', 'name']),
        ]);
    }

    /**
     * Update Blog
     */
    public function update(Request $request, Blog $blog)
    {
        if ($request->hasFile('featured_image')) {

            $validated = $request->validate([
                'category_id'      => 'required|exists:categories,id',
                'title'            => 'required|string|max:255',
                'featured_image'   => 'nullable|image|mimes:jpg,jpeg,png,webp|max:4096',
                'description'      => 'required',
                'meta_title'       => 'nullable|string|max:255',
                'meta_description' => 'nullable|string',
                'meta_keywords'    => 'nullable|string',
                'status'           => 'required|boolean',
            ]);

            $validated['slug'] = Str::slug($validated['title']);

            if ($blog->featured_image) {
                Storage::disk('public')->delete($blog->featured_image);
            }

            $validated['featured_image'] = $request
                ->file('featured_image')
                ->store('blogs', 'public');


            $blog->update($validated);    
        }
        else{

            $validated = $request->validate([
                'category_id'      => 'required|exists:categories,id',
                'title'            => 'required|string|max:255',
                'description'      => 'required',
                'meta_title'       => 'nullable|string|max:255',
                'meta_description' => 'nullable|string',
                'meta_keywords'    => 'nullable|string',
                'status'           => 'required|boolean',
            ]);

            $validated['slug'] = Str::slug($validated['title']);


            $blog->update($validated);
        }

        return redirect()
            ->route('dashboard.blogs.index')
            ->with('success', 'Blog updated successfully.');
    }

    /**
     * Delete Blog
     */
    public function destroy(Blog $blog)
    {
        if ($blog->featured_image) {
            Storage::disk('public')->delete($blog->featured_image);
        }

        $blog->delete();

        return redirect()
            ->back()
            ->with('success', 'Blog deleted successfully.');
    }
}