<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use App\Models\Page;
use Inertia\Inertia;
use Inertia\Response;


class PageController extends Controller
{
    public function search(Request $request): Response
    {
        $q = trim((string) $request->query('q', ''));
        $results = [];

        if (mb_strlen($q) >= 2) {
            // escape LIKE wildcards typed by the user
            $like = '%' . addcslashes($q, '%_\\') . '%';

            // ---- ABOUT (pages table) ----
            $pages = DB::table('pages')
                ->where('slug', 'about')
                ->where(function ($w) use ($like) {
                    $w->where('title', 'like', $like)
                        ->orWhere('excerpt', 'like', $like)
                        ->orWhere('overview_content', 'like', $like)
                        ->orWhere('main_content', 'like', $like);
                })
                ->get(['title', 'slug', 'excerpt']);

            foreach ($pages as $p) {
                $results[] = [
                    'type'        => 'About',
                    'title'       => $p->title,
                    'description' => $this->clean($p->excerpt),
                    'url'         => '/about',
                ];
            }

            // ---- SERVICES ----
            $services = DB::table('services')
                ->where(function ($w) use ($like) {
                    $w->where('title', 'like', $like)
                        ->orWhere('short_description', 'like', $like);
                })
                ->get(['title', 'slug', 'short_description']);

            foreach ($services as $s) {
                $results[] = [
                    'type'        => 'Service',
                    'title'       => $s->title,
                    'description' => $this->clean($s->short_description),
                    'url'         => '/services-detail#' . $s->slug,
                ];
            }

            // ---- BLOGS ----
            $blogs = DB::table('blogs')
                ->where(function ($w) use ($like) {
                    $w->where('title', 'like', $like)
                        ->orWhere('description', 'like', $like);
                })
                ->get(['title', 'slug', 'description']);

            foreach ($blogs as $b) {
                $results[] = [
                    'type'        => 'Blog',
                    'title'       => $b->title,
                    'description' => $this->clean($b->description),
                    'url'         => '/blog/' . $b->slug,
                ];
            }
        }

        return Inertia::render('Frontend/Search', [
            'q'       => $q,
            'results' => $results,
        ]);
    }

    /** Remove HTML tags and shorten for the result list. */
    private function clean(?string $html, int $limit = 200): string
    {
        $text = html_entity_decode(strip_tags((string) $html));
        $text = preg_replace('/\s+/', ' ', $text);

        return Str::limit(trim($text), $limit);
    }


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
