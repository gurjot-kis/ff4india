<?php

namespace App\Exports;

use App\Models\Admin\VisaBulletinApplications;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;

class VisaBulletinApplicationsExport implements FromCollection, WithHeadings, WithEvents
{
    public function collection()
    {
        return VisaBulletinApplications::select(
            'id',
            'session',

            'visa_f1_all',
            'visa_f1_china',
            'visa_f1_india',
            'visa_f1_mexico',
            'visa_f1_philippines',

            'visa_f2a_all',
            'visa_f2a_china',
            'visa_f2a_india',
            'visa_f2a_mexico',
            'visa_f2a_philippines',

            'visa_f2b_all',
            'visa_f2b_china',
            'visa_f2b_india',
            'visa_f2b_mexico',
            'visa_f2b_philippines',

            'visa_f3_all',
            'visa_f3_china',
            'visa_f3_india',
            'visa_f3_mexico',
            'visa_f3_philippines',

            'visa_f4_all',
            'visa_f4_china',
            'visa_f4_india',
            'visa_f4_mexico',
            'visa_f4_philippines'
        )->get();
    }

    public function headings(): array
    {
        return [
            [
                'ID',
                'Session',
                'F1', '', '', '', '',
                'F2A', '', '', '', '',
                'F2B', '', '', '', '',
                'F3', '', '', '', '',
                'F4', '', '', '', '',
            ],
            [
                '',
                '',
                'All', 'China', 'India', 'Mexico', 'Philippines',
                'All', 'China', 'India', 'Mexico', 'Philippines',
                'All', 'China', 'India', 'Mexico', 'Philippines',
                'All', 'China', 'India', 'Mexico', 'Philippines',
                'All', 'China', 'India', 'Mexico', 'Philippines',
            ]
        ];
    }


    public function registerEvents(): array
{
    return [
        AfterSheet::class => function (AfterSheet $event) {

            $sheet = $event->sheet->getDelegate();

            // Rowspan
            $sheet->mergeCells('A1:A2');

            // F1
            $sheet->mergeCells('B1:F1');

            // F2A
            $sheet->mergeCells('G1:K1');

            // F2B
            $sheet->mergeCells('L1:P1');

            // F3
            $sheet->mergeCells('Q1:U1');

            // F4
            $sheet->mergeCells('V1:Z1');

            // Center alignment
            $sheet->getStyle('A1:Z2')
                ->getAlignment()
                ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER)
                ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);

            // Bold header
            $sheet->getStyle('A1:Z2')->getFont()->setBold(true);
        },
    ];
}
}