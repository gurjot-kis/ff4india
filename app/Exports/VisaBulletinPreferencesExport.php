<?php

namespace App\Exports;

use App\Models\Admin\VisaBulletinPreferences;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;

class VisaBulletinPreferencesExport implements FromCollection, WithHeadings, WithEvents
{
    public function collection()
    {
        return VisaBulletinPreferences::select(
            'id',
            'session',

            'pref_f1_all',
            'pref_f1_china',
            'pref_f1_india',
            'pref_f1_mexico',
            'pref_f1_philippines',

            'pref_f2a_all',
            'pref_f2a_china',
            'pref_f2a_india',
            'pref_f2a_mexico',
            'pref_f2a_philippines',

            'pref_f2b_all',
            'pref_f2b_china',
            'pref_f2b_india',
            'pref_f2b_mexico',
            'pref_f2b_philippines',

            'pref_f3_all',
            'pref_f3_china',
            'pref_f3_india',
            'pref_f3_mexico',
            'pref_f3_philippines',

            'pref_f4_all',
            'pref_f4_china',
            'pref_f4_india',
            'pref_f4_mexico',
            'pref_f4_philippines'
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