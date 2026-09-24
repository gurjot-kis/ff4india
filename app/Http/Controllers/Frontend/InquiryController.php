<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Mail\NvcInquiryMail;

use App\Models\Inquiry;


use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class InquiryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'category' => ['nullable', 'string', 'max:255'],

            'filingStatus' => ['nullable', 'string', 'max:255'],
            'caseNumber' => ['nullable', 'string', 'max:255'],
            'principalName' => ['nullable', 'string', 'max:255'],

            'dob' => ['nullable', 'date'],
            'petitionerName' => ['nullable', 'string', 'max:255'],

            'inquirer' => ['nullable', 'string', 'max:255'],

            'visaCategory' => ['nullable', 'array'],
            'visaCategory.*' => ['string', 'max:100'],

            'aorName' => ['nullable', 'string', 'max:255'],
            'aorLawOffice' => ['nullable', 'string', 'max:255'],
            'inquirerName' => ['nullable', 'string', 'max:255'],

            'comments' => ['nullable', 'string'],

            'files' => ['nullable', 'array', 'max:10'],
            'files.*' => [
                'file',
                'max:10240', // 10 MB per file
                'mimes:jpg,jpeg,png,pdf,doc,docx',
            ],
        ]);

        DB::beginTransaction();

        try {
            $inquiry = Inquiry::create([
                'email' => $validated['email'],

                'category' => $validated['category'] ?? null,

                'filing_status' => $validated['filingStatus'] ?? null,
                'case_number' => $validated['caseNumber'] ?? null,
                'principal_name' => $validated['principalName'] ?? null,

                'dob' => $validated['dob'] ?? null,
                'petitioner_name' => $validated['petitionerName'] ?? null,

                'inquirer' => $validated['inquirer'] ?? null,

                'visa_category' => $validated['visaCategory'] ?? [],

                'aor_name' => $validated['aorName'] ?? null,
                'aor_law_office' => $validated['aorLawOffice'] ?? null,
                'inquirer_name' => $validated['inquirerName'] ?? null,

                'comments' => $validated['comments'] ?? null,
            ]);

            /*
             * Save multiple files
             */
            if ($request->hasFile('files')) {
                foreach ($request->file('files') as $file) {

                    $path = $file->store(
                        'inquiries/' . $inquiry->id,
                        'public'
                    );

                    $inquiry->attachments()->create([
                        'original_name' => $file->getClientOriginalName(),
                        'file_name' => basename($path),
                        'file_path' => $path,
                        'mime_type' => $file->getClientMimeType(),
                        'file_size' => $file->getSize(),
                    ]);
                }
            }

            DB::commit();

           
            Mail::to($inquiry->email)->send(
                new NvcInquiryMail($inquiry)
            );

            return back()->with('success', 'Inquiry submitted successfully.');
        } catch (\Throwable $e) {

            DB::rollBack();

            return back()->with('error', 'Something went wrong while submitting the inquiry.');
        }
    }
}
