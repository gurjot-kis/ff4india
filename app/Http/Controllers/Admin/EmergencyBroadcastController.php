<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\EmergencyBroadcast;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmergencyBroadcastController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->search;

        $emergencyBroadcasts = EmergencyBroadcast::query()
            ->when($search, function ($query) use ($search) {
                $query->where('description', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/EmergencyBroadcasts/Index', [
            'emergencyBroadcasts' => $emergencyBroadcasts,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/EmergencyBroadcasts/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required|string',
            'status' => 'required|boolean',
        ]);

        EmergencyBroadcast::create($validated);

        return redirect()
            ->route('dashboard.emergency-broadcasts.index')
            ->with('success', 'Emergency Broadcast created successfully.');
    }

    public function edit(EmergencyBroadcast $emergencyBroadcast): Response
    {
        return Inertia::render('Admin/EmergencyBroadcasts/Edit', [
            'emergencyBroadcast' => $emergencyBroadcast,
        ]);
    }

    public function update(Request $request, EmergencyBroadcast $emergencyBroadcast)
    {
        $validated = $request->validate([
            'description' => 'required|string',
            'status' => 'required|boolean',
        ]);

        $emergencyBroadcast->update($validated);

        return redirect()
            ->route('dashboard.emergency-broadcasts.index')
            ->with('success', 'Emergency Broadcast updated successfully.');
    }

    public function destroy(EmergencyBroadcast $emergencyBroadcast)
    {
        $emergencyBroadcast->delete();

        return redirect()
            ->back()
            ->with('success', 'Emergency Broadcast deleted successfully.');
    }
}