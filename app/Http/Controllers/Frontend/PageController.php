<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    /**
     * Display About page.
     */
    public function about(): Response
    {
        $page = Page::query()
            ->where('slug', 'about')
            ->where('status', 'active')
            ->firstOrFail();

        return Inertia::render('Frontend/about', [
            'page' => [
                'id' => $page->id,
                'title' => $page->title,
                'slug' => $page->slug,
                'excerpt' => $page->excerpt,
                'image' => $page->image,
                'experience_years' => $page->experience_years,
                'overview_content' => $page->overview_content,
                'main_content' => $page->main_content,
                'meta_title' => $page->meta_title,
                'meta_description' => $page->meta_description,
            ],
        ]);
    }
}