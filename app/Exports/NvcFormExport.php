<?php

namespace App\Exports;

use App\Models\Inquiry;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class NvcFormExport implements FromCollection, WithHeadings, WithEvents
{
    protected string $search;

    public function __construct(?string $search = '')
    {
        $this->search = trim((string) $search);
    }

    /**
     * Export NVC inquiry data.
     */
    public function collection()
    {
        return Inquiry::with('attachments')
            ->orderBy('id', 'desc')
            ->get()
            ->values()
            ->map(function ($item, $index) {
                return [
                    'id' => $index + 1,
                    'email' => $item->email ?: '',
                    'filing_status' => $this->formatFilingStatus($item->filing_status),
                    'case_number' => $item->case_number ?: '',
                    'principal_name' => $item->principal_name ?: '',
                    'dob' => $item->dob ? $item->dob->format('F j, Y') : '',
                    'petitioner_name' => $item->petitioner_name ?: '',
                    'inquirer' => $item->inquirer ?: '',
                    'visa_category' => is_array($item->visa_category)
                        ? implode(', ', $item->visa_category)
                        : '',
                    'comments' => $item->comments ?: '',
                    'attachments' => $item->attachments
                        ->map(fn($file) => asset('storage/' . $file->file_path))
                        ->implode("\n"),
                    'created_at' => $item->created_at
                        ? $item->created_at->format('Y-m-d H:i:s')
                        : '',
                ];
            });
    }

    /**
     * Excel headings.
     */
    public function headings(): array
    {
        return [
            [
                '#',
                'Email',
                'Filing Status',
                'Case Number',
                'Principal Name',
                'DOB',
                'Petitioner Name',
                'Who Are You?',
                'Visa Category',
                'Comments',
                'Attachments',
                'Created At',
            ],
        ];
    }

    /**
     * Excel formatting.
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet;

                $sheet->getStyle('A1:L1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);

                // Auto-size columns A to L (12 columns)
                foreach (range('A', 'L') as $column) {
                    $sheet->getColumnDimension($column)->setAutoSize(true);
                }


                // Wrap long text columns: Comments (J) and Attachments (K)
                $sheet->getStyle('J:K')->getAlignment()->setWrapText(true);
                $sheet->getColumnDimension('J')->setAutoSize(false)->setWidth(40);
                $sheet->getColumnDimension('K')->setAutoSize(false)->setWidth(50);
            },
        ];
    }

    protected function formatFilingStatus(?string $status): string
    {
        if (! $status) {
            return '';
        }

        return ucwords(str_replace('_', ' ', $status));
    }
}
