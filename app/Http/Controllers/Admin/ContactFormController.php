<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ContactForm;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
 use App\Exports\ContactFormExport;


use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Excel as ExcelFormat;

class ContactFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {

    $search = $request->search;

        $contactForms = ContactForm::query()
            ->when($search, function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")->orWhere('email', 'like', "%{$search}%")->orWhere('phone', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/ContactForms/Index', [
            'contactForms' => $contactForms,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactForm $contactForm)
    {
        $contactForm->delete();

        return redirect()
            ->back()
            ->with('success', 'Contact Form deleted successfully.');
    }


    public function exportExcel()
    {
        return Excel::download(
            new ContactFormExport(),
            'contact_forms.xlsx'
        );
    }

    public function exportCsv()
    {
        return Excel::download(
            new ContactFormExport(),
            'contact_forms.csv',
            ExcelFormat::CSV
        );
    }

    public function exportPdf()
    {
        $preferences = ContactForm::orderBy('id', 'desc')->get();

        $pdf = Pdf::loadView(
            'exports.contact_form_pdf',
            compact('preferences')
        )->setPaper('a3', 'landscape');

        return $pdf->download('contact_forms.pdf');
    }
    
    public function print()
    {
        $preferences = ContactForm::orderBy('id', 'desc')->get();

        return view(
            'exports.contact_form_print',
            compact('preferences')
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
