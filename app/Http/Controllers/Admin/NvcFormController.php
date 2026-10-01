<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Admin\ContactForm;
use App\Models\Inquiry;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Exports\NvcFormExport;

use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Excel as ExcelFormat;
use Illuminate\Support\Facades\Storage;

class NvcFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        $search = $request->input('search', '');

        $inquiries = Inquiry::with('attachments')
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('email', 'like', "%{$search}%")
                        ->orWhere('case_number', 'like', "%{$search}%")
                        ->orWhere('principal_name', 'like', "%{$search}%")
                        ->orWhere('petitioner_name', 'like', "%{$search}%")
                        ->orWhere('inquirer_name', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/NvcForms/Index', [
            'inquiries' => $inquiries,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inquiry $inquiry)
    {
        // Delete attachment files from the public disk
        foreach ($inquiry->attachments as $attachment) {
            if ($attachment->file_path && Storage::disk('public')->exists($attachment->file_path)) {
                Storage::disk('public')->delete($attachment->file_path);
            }
        }

        // Delete attachment rows, then the inquiry itself
        $inquiry->attachments()->delete();
        $inquiry->delete();

        return redirect()
            ->back()
            ->with('success', 'NVC inquiry deleted successfully.');
    }


    public function exportExcel()
    {
        return Excel::download(
            new NvcFormExport(),
            'nvc_forms.xlsx'
        );
    }

    public function exportCsv()
    {
        return Excel::download(
            new NvcFormExport(),
            'nvc_forms.csv',
            ExcelFormat::CSV
        );
    }

    public function exportPdf(Request $request)
    {
        $inquiries = Inquiry::with('attachments')
            ->orderBy('id', 'desc')
            ->get();

        $pdf = Pdf::loadView(
            'exports.nvc_form_pdf',
            compact('inquiries')
        )->setPaper('a3', 'landscape');

        return $pdf->download('nvc_forms.pdf');
    }

    public function print(Request $request)
    {
        $inquiries = Inquiry::with('attachments')
            ->orderBy('id', 'desc')
            ->get();

        return view(
            'exports.nvc_form_print',
            compact('inquiries')
        );
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }
}
