<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Exports\VisaBulletinApplicationsExport;
 use App\Models\Admin\VisaBulletinApplications;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response; 

use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Excel as ExcelFormat;

class VisaBulletinApplicationController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->search;

        $preferences = VisaBulletinApplications::query()
            ->when($search, function ($query) use ($search) {
                $query->where('session', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        return Inertia::render('Admin/VisaBulletins/VisaBulletinApplications/Index', [
            'preferences' => $preferences,
            'filters' => [
                'search' => $search,
            ],
        ]);        
    }

    public function create(): Response
    {
        return Inertia::render('Admin/VisaBulletins/VisaBulletinApplications/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'session' => 'required|string|max:50',

            'visa_f1_all' => 'nullable|string|max:50',
            'visa_f1_china' => 'nullable|string|max:50',
            'visa_f1_india' => 'nullable|string|max:50',
            'visa_f1_mexico' => 'nullable|string|max:50',
            'visa_f1_philippines' => 'nullable|string|max:50',

            'visa_f2a_all' => 'nullable|string|max:50',
            'visa_f2a_china' => 'nullable|string|max:50',
            'visa_f2a_india' => 'nullable|string|max:50',
            'visa_f2a_mexico' => 'nullable|string|max:50',
            'visa_f2a_philippines' => 'nullable|string|max:50',

            'visa_f2b_all' => 'nullable|string|max:50',
            'visa_f2b_china' => 'nullable|string|max:50',
            'visa_f2b_india' => 'nullable|string|max:50',
            'visa_f2b_mexico' => 'nullable|string|max:50',
            'visa_f2b_philippines' => 'nullable|string|max:50',

            'visa_f3_all' => 'nullable|string|max:50',
            'visa_f3_china' => 'nullable|string|max:50',
            'visa_f3_india' => 'nullable|string|max:50',
            'visa_f3_mexico' => 'nullable|string|max:50',
            'visa_f3_philippines' => 'nullable|string|max:50',

            'visa_f4_all' => 'nullable|string|max:50',
            'visa_f4_china' => 'nullable|string|max:50',
            'visa_f4_india' => 'nullable|string|max:50',
            'visa_f4_mexico' => 'nullable|string|max:50',
            'visa_f4_philippines' => 'nullable|string|max:50',

            'status' => 'required|boolean',
        ]);

        VisaBulletinApplications::create($validated);

        return redirect()
            ->route('dashboard.visa-applications.index')
            ->with('success', 'Preference bulletin created successfully.');
    }

    public function edit(VisaBulletinApplications $visaApplication)
    {
        return Inertia::render(
            'Admin/VisaBulletins/VisaBulletinApplications/Edit',
            [
                'preference' => $visaApplication,
            ]
        );
    }

    public function update(Request $request, VisaBulletinApplications $visaApplication)
    {
        $validated = $request->validate([
            'session' => 'required|string|max:50',

            'visa_f1_all' => 'nullable|string|max:50',
            'visa_f1_china' => 'nullable|string|max:50',
            'visa_f1_india' => 'nullable|string|max:50',
            'visa_f1_mexico' => 'nullable|string|max:50',
            'visa_f1_philippines' => 'nullable|string|max:50',

            'visa_f2a_all' => 'nullable|string|max:50',
            'visa_f2a_china' => 'nullable|string|max:50',
            'visa_f2a_india' => 'nullable|string|max:50',
            'visa_f2a_mexico' => 'nullable|string|max:50',
            'visa_f2a_philippines' => 'nullable|string|max:50',

            'visa_f2b_all' => 'nullable|string|max:50',
            'visa_f2b_china' => 'nullable|string|max:50',
            'visa_f2b_india' => 'nullable|string|max:50',
            'visa_f2b_mexico' => 'nullable|string|max:50',
            'visa_f2b_philippines' => 'nullable|string|max:50',

            'visa_f3_all' => 'nullable|string|max:50',
            'visa_f3_china' => 'nullable|string|max:50',
            'visa_f3_india' => 'nullable|string|max:50',
            'visa_f3_mexico' => 'nullable|string|max:50',
            'visa_f3_philippines' => 'nullable|string|max:50',

            'visa_f4_all' => 'nullable|string|max:50',
            'visa_f4_china' => 'nullable|string|max:50',
            'visa_f4_india' => 'nullable|string|max:50',
            'visa_f4_mexico' => 'nullable|string|max:50',
            'visa_f4_philippines' => 'nullable|string|max:50',

            'status' => 'required|boolean',
        ]);

        $visaApplication->update($validated);

        return redirect()
            ->route('dashboard.visa-applications.index')
            ->with('success', 'Preference bulletin updated successfully.');
    }

    public function destroy(VisaBulletinApplications $visaApplication)
    {
        $visaApplication->delete();

        return redirect()
            ->back()
            ->with('success', 'Deleted successfully.');
    }

    private function emptyFields(): array
    {
        return [

            'visa_f1_all'=>null,
            'visa_f1_china'=>null,
            'visa_f1_india'=>null,
            'visa_f1_mexico'=>null,
            'visa_f1_philippines'=>null,

            'visa_f2a_all'=>null,
            'visa_f2a_china'=>null,
            'visa_f2a_india'=>null,
            'visa_f2a_mexico'=>null,
            'visa_f2a_philippines'=>null,

            'visa_f2b_all'=>null,
            'visa_f2b_china'=>null,
            'visa_f2b_india'=>null,
            'visa_f2b_mexico'=>null,
            'visa_f2b_philippines'=>null,

            'visa_f3_all'=>null,
            'visa_f3_china'=>null,
            'visa_f3_india'=>null,
            'visa_f3_mexico'=>null,
            'visa_f3_philippines'=>null,

            'visa_f4_all'=>null,
            'visa_f4_china'=>null,
            'visa_f4_india'=>null,
            'visa_f4_mexico'=>null,
            'visa_f4_philippines'=>null,
        ];
    }

    public function exportExcel()
    {
        return Excel::download(
            new VisaBulletinApplicationsExport(),
            'visa_bulletin_applications.xlsx'
        );
    }

    public function exportCsv()
    {
        return Excel::download(
            new VisaBulletinApplicationsExport(),
            'visa_bulletin_applications.csv',
            ExcelFormat::CSV
        );
    }

    public function exportPdf()
    {
        $preferences = VisaBulletinApplications::orderBy('session')->get();

        $pdf = Pdf::loadView(
            'exports.visa_applications_pdf',
            compact('preferences')
        )->setPaper('a3', 'landscape');

        return $pdf->download('visa_bulletin_applications.pdf');
    }
    
    public function print()
    {
        $preferences = VisaBulletinApplications::orderBy('session')->get();

        return view(
            'exports.visa_applications_print',
            compact('preferences')
        );
    }

}