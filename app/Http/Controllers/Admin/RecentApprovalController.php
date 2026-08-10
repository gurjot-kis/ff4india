<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\RecentApproval;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RecentApprovalController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->search;

        $recentApprovals = RecentApproval::query()
            ->when($search, function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('visa_category', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render(
            'Admin/RecentApprovals/Index',
            [
                'recentApprovals' => $recentApprovals,
                'filters' => [
                    'search' => $search,
                ],
            ]
        );
    }

    public function create(): Response
    {
        return Inertia::render('Admin/RecentApprovals/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'approval_date' => 'required|date',
            'visa_category' => 'required|string|max:50',
            'status' => 'required|boolean',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {

            $validated['image'] = $request
                ->file('image')
                ->store('recent-approvals', 'public');
        }

        RecentApproval::create($validated);

        return redirect()
            ->route('dashboard.recent-approvals.index')
            ->with('success', 'Recent Approval created successfully.');
    }

    public function edit(RecentApproval $recentApproval): Response
    {
        return Inertia::render(
            'Admin/RecentApprovals/Edit',
            [
                'recentApproval' => $recentApproval,
            ]
        );
    }

    public function update(Request $request, RecentApproval $recentApproval)
    {
         if ($request->hasFile('image')) {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'approval_date' => 'required|date',
                'visa_category' => 'required|string|max:50',
                'status' => 'required|boolean',
                'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            ]);

            $validated['image'] = $request
                ->file('image')
                ->store('recent-approvals', 'public');
         }
         else {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'approval_date' => 'required|date',
                'visa_category' => 'required|string|max:50',
                'status' => 'required|boolean' 
            ]);
         }
       
        $recentApproval->update($validated);

        return redirect()
            ->route('dashboard.recent-approvals.index')
            ->with('success', 'Recent Approval updated successfully.');
    }

    public function destroy(RecentApproval $recentApproval)
    {
        if ($recentApproval->image) {

            \Storage::disk('public')->delete(
                $recentApproval->image
            );
        }

        $recentApproval->delete();

        return redirect()
            ->back()
            ->with('success', 'Recent Approval deleted successfully.');
    }
}