<?php

namespace App\Exports;

use App\Models\Admin\ContactForm;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;


class ContactFormExport implements FromCollection, WithHeadings, WithEvents
{
    /**
     * Export Contact Form data.
     */
    public function collection()
    {
        return ContactForm::select(
            'id',
            'name',
            'email',
            'phone',
            'message',
            'created_at'
        )
        ->orderBy('id', 'desc')
        ->get()
        ->values()
        ->map(function ($item, $index) {
            return [
                'id' => $index + 1,
                'name' => $item->name,

               'email' => $item->email
                    ? $item->email
                    : '',

                'phone' => $item->phone
                    ? $item->phone
                    : '',

                'message' => $item->message,

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
                'ID',
                'Name',
                'Email',
                'Phone',
                'Message',
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

                $event->sheet
                    ->getStyle('A1:G1')
                    ->applyFromArray([
                        'font' => [
                            'bold' => true,
                        ],
                    ]);

                // Auto-size columns
                foreach (range('A', 'G') as $column) {
                    $event->sheet
                        ->getColumnDimension($column)
                        ->setAutoSize(true);
                }
            },
        ];
    }
}