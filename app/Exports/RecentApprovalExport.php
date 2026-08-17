<?php

namespace App\Exports;

use App\Models\Admin\RecentApproval;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class RecentApprovalExport implements FromCollection, WithHeadings, WithEvents
{
    /**
     * Export Recent Approval data.
     */
    public function collection()
    {
        return RecentApproval::select(
            'id',
            'name',
            'image',
            'approval_date',
            'visa_category',
            'status',
            'created_at'
        )
        ->orderBy('approval_date', 'desc')
        ->get()
        ->values()
        ->map(function ($item, $index) {
            return [
                'id' => $index + 1,
                'name' => $item->name,

                // Full image URL
                'image' => $item->image
                    ? Storage::disk('public')->url($item->image)
                    : '',

                'approval_date' => $item->approval_date
                    ? $item->approval_date->format('Y-m-d')
                    : '',

                'visa_category' => $item->visa_category,

                'status' => $item->status
                    ? 'Active'
                    : 'Inactive',

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
                'Image',
                'Approval Date',
                'Visa Category',
                'Status',
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