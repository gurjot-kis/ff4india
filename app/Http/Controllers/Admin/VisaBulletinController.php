<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\VisaBulletin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VisaBulletinController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->search;

        $visaBulletins = VisaBulletin::query()
            ->when($search, function ($query) use ($search) {
                $query->where('month', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/VisaBulletins/Index', [
            'visaBulletins' => $visaBulletins,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/VisaBulletins/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([

            'month' => 'required|string|max:100',

            'family_filing_f1' => 'nullable|string|max:50',
            'family_filing_f2a' => 'nullable|string|max:50',
            'family_filing_f2b' => 'nullable|string|max:50',
            'family_filing_f3' => 'nullable|string|max:50',
            'family_filing_f4' => 'nullable|string|max:50',

            'family_final_f1' => 'nullable|string|max:50',
            'family_final_f2a' => 'nullable|string|max:50',
            'family_final_f2b' => 'nullable|string|max:50',
            'family_final_f3' => 'nullable|string|max:50',
            'family_final_f4' => 'nullable|string|max:50',

        ]);

        VisaBulletin::create($validated);

        return redirect()
            ->route('dashboard.visa-bulletins.index')
            ->with('success', 'Visa Bulletin created successfully.');
    }

    public function edit(VisaBulletin $visaBulletin): Response
    {
        return Inertia::render('Admin/VisaBulletins/Edit', [
            'visaBulletin' => $visaBulletin,
        ]);
    }

    public function update(Request $request, VisaBulletin $visaBulletin)
    {
        $validated = $request->validate([

            'month' => 'required|string|max:100',

            'family_filing_f1' => 'nullable|string|max:50',
            'family_filing_f2a' => 'nullable|string|max:50',
            'family_filing_f2b' => 'nullable|string|max:50',
            'family_filing_f3' => 'nullable|string|max:50',
            'family_filing_f4' => 'nullable|string|max:50',

            'family_final_f1' => 'nullable|string|max:50',
            'family_final_f2a' => 'nullable|string|max:50',
            'family_final_f2b' => 'nullable|string|max:50',
            'family_final_f3' => 'nullable|string|max:50',
            'family_final_f4' => 'nullable|string|max:50',

        ]);

        $visaBulletin->update($validated);

        return redirect()
            ->route('dashboard.visa-bulletins.index')
            ->with('success', 'Visa Bulletin updated successfully.');
    }

    public function destroy(VisaBulletin $visaBulletin)
    {
        $visaBulletin->delete();

        return redirect()
            ->back()
            ->with('success', 'Visa Bulletin deleted successfully.');
    }
}