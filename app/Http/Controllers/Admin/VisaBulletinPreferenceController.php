<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Exports\VisaBulletinPreferencesExport;
use App\Models\Admin\VisaBulletinPreferences;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Excel as ExcelFormat;

class VisaBulletinPreferenceController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->search;

        $preferences = VisaBulletinPreferences::query()
            ->when($search, function ($query) use ($search) {
                $query->where('session', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/VisaBulletins/VisaBulletinPreferences/Index', [
            'preferences' => $preferences,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/VisaBulletins/VisaBulletinPreferences/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'session' => 'required|string|max:50',

            'pref_f1_all' => 'nullable|string|max:50',
            'pref_f1_china' => 'nullable|string|max:50',
            'pref_f1_india' => 'nullable|string|max:50',
            'pref_f1_mexico' => 'nullable|string|max:50',
            'pref_f1_philippines' => 'nullable|string|max:50',

            'pref_f2a_all' => 'nullable|string|max:50',
            'pref_f2a_china' => 'nullable|string|max:50',
            'pref_f2a_india' => 'nullable|string|max:50',
            'pref_f2a_mexico' => 'nullable|string|max:50',
            'pref_f2a_philippines' => 'nullable|string|max:50',

            'pref_f2b_all' => 'nullable|string|max:50',
            'pref_f2b_china' => 'nullable|string|max:50',
            'pref_f2b_india' => 'nullable|string|max:50',
            'pref_f2b_mexico' => 'nullable|string|max:50',
            'pref_f2b_philippines' => 'nullable|string|max:50',

            'pref_f3_all' => 'nullable|string|max:50',
            'pref_f3_china' => 'nullable|string|max:50',
            'pref_f3_india' => 'nullable|string|max:50',
            'pref_f3_mexico' => 'nullable|string|max:50',
            'pref_f3_philippines' => 'nullable|string|max:50',

            'pref_f4_all' => 'nullable|string|max:50',
            'pref_f4_china' => 'nullable|string|max:50',
            'pref_f4_india' => 'nullable|string|max:50',
            'pref_f4_mexico' => 'nullable|string|max:50',
            'pref_f4_philippines' => 'nullable|string|max:50',

            'status' => 'required|boolean',
        ]);

        VisaBulletinPreferences::create($validated);

        return redirect()
            ->route('dashboard.visa-preferences.index')
            ->with('success', 'Preference bulletin created successfully.');
    }

    public function edit(VisaBulletinPreferences $visaPreference)
    {
        return Inertia::render(
            'Admin/VisaBulletins/VisaBulletinPreferences/Edit',
            [
                'preference' => $visaPreference,
            ]
        );
    }

    public function update(Request $request, VisaBulletinPreferences $visaPreference)
    {
        $validated = $request->validate([
            'session' => 'required|string|max:50',

            'pref_f1_all' => 'nullable|string|max:50',
            'pref_f1_china' => 'nullable|string|max:50',
            'pref_f1_india' => 'nullable|string|max:50',
            'pref_f1_mexico' => 'nullable|string|max:50',
            'pref_f1_philippines' => 'nullable|string|max:50',

            'pref_f2a_all' => 'nullable|string|max:50',
            'pref_f2a_china' => 'nullable|string|max:50',
            'pref_f2a_india' => 'nullable|string|max:50',
            'pref_f2a_mexico' => 'nullable|string|max:50',
            'pref_f2a_philippines' => 'nullable|string|max:50',

            'pref_f2b_all' => 'nullable|string|max:50',
            'pref_f2b_china' => 'nullable|string|max:50',
            'pref_f2b_india' => 'nullable|string|max:50',
            'pref_f2b_mexico' => 'nullable|string|max:50',
            'pref_f2b_philippines' => 'nullable|string|max:50',

            'pref_f3_all' => 'nullable|string|max:50',
            'pref_f3_china' => 'nullable|string|max:50',
            'pref_f3_india' => 'nullable|string|max:50',
            'pref_f3_mexico' => 'nullable|string|max:50',
            'pref_f3_philippines' => 'nullable|string|max:50',

            'pref_f4_all' => 'nullable|string|max:50',
            'pref_f4_china' => 'nullable|string|max:50',
            'pref_f4_india' => 'nullable|string|max:50',
            'pref_f4_mexico' => 'nullable|string|max:50',
            'pref_f4_philippines' => 'nullable|string|max:50',

            'status' => 'required|boolean',
        ]);

        $visaPreference->update($validated);

        return redirect()
            ->route('dashboard.visa-preferences.index')
            ->with('success', 'Preference bulletin updated successfully.');
    }

    public function destroy(VisaBulletinPreference $visaPreference)
    {
        $visaPreference->delete();

        return redirect()
            ->back()
            ->with('success', 'Deleted successfully.');
    }

    private function emptyFields(): array
    {
        return [

            'pref_f1_all'=>null,
            'pref_f1_china'=>null,
            'pref_f1_india'=>null,
            'pref_f1_mexico'=>null,
            'pref_f1_philippines'=>null,

            'pref_f2a_all'=>null,
            'pref_f2a_china'=>null,
            'pref_f2a_india'=>null,
            'pref_f2a_mexico'=>null,
            'pref_f2a_philippines'=>null,

            'pref_f2b_all'=>null,
            'pref_f2b_china'=>null,
            'pref_f2b_india'=>null,
            'pref_f2b_mexico'=>null,
            'pref_f2b_philippines'=>null,

            'pref_f3_all'=>null,
            'pref_f3_china'=>null,
            'pref_f3_india'=>null,
            'pref_f3_mexico'=>null,
            'pref_f3_philippines'=>null,

            'pref_f4_all'=>null,
            'pref_f4_china'=>null,
            'pref_f4_india'=>null,
            'pref_f4_mexico'=>null,
            'pref_f4_philippines'=>null,
        ];
    }

    public function exportExcel()
    {
        return Excel::download(
            new VisaBulletinPreferencesExport(),
            'visa_bulletin_preferences.xlsx'
        );
    }

    public function exportCsv()
    {
        return Excel::download(
            new VisaBulletinPreferencesExport(),
            'visa_bulletin_preferences.csv',
            ExcelFormat::CSV
        );
    }

    public function exportPdf()
    {
        $preferences = VisaBulletinPreferences::orderBy('session')->get();

        $pdf = Pdf::loadView(
            'exports.visa_preferences_pdf',
            compact('preferences')
        )->setPaper('a3', 'landscape');

        return $pdf->download('visa_bulletin_preferences.pdf');
    }
    
    public function print()
    {
        $preferences = VisaBulletinPreferences::orderBy('session')->get();

        return view(
            'exports.visa_preferences_print',
            compact('preferences')
        );
    }

}