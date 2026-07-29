<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Admin\Notice;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NoticeController extends Controller
{
    /**
     * Notice List
     */
    public function index(Request $request): Response
    {
        $search = $request->input('search');

        $notices = Notice::query()
            ->when($search, function ($query, $search) {
                $query->where('description', 'like', "%{$search}%");
            })
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Notices/Index', [
            'notices' => $notices,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Show Add Notice Page
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Notices/Create');
    }

    /**
     * Store Notice
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => [
                'required',
                'string',
                'max:1000',
            ],
            'status' => [
                'required',
                'boolean',
            ],
        ]);

        Notice::create($validated);

        return redirect()
            ->route('dashboard.notices.index')
            ->with('success', 'Notice created successfully.');
    }

    /**
     * Show Edit Notice Page
     */
    public function edit(Notice $notice): Response
    {
        return Inertia::render('Admin/Notices/Edit', [
            'notice' => $notice,
        ]);
    }

    /**
     * Update Notice
     */
    public function update(Request $request, Notice $notice)
    {
        $validated = $request->validate([
            'description' => [
                'required',
                'string',
                'max:1000',
            ],
            'status' => [
                'required',
                'boolean',
            ],
        ]);

        $notice->update($validated);

        return redirect()
            ->route('dashboard.notices.index')
            ->with('success', 'Notice updated successfully.');
    }

    /**
     * Delete Notice
     */
    public function destroy(Notice $notice)
    {
        $notice->delete();

        return redirect()
            ->route('dashboard.notices.index')
            ->with('success', 'Notice deleted successfully.');
    }
}
