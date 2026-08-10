<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class VisaBulletin extends Model
{
    protected $table = 'visa_bulletins';

    protected $fillable = [

        'month',

        'family_filing_f1',
        'family_filing_f2a',
        'family_filing_f2b',
        'family_filing_f3',
        'family_filing_f4',

        'family_final_f1',
        'family_final_f2a',
        'family_final_f2b',
        'family_final_f3',
        'family_final_f4',

    ];
}
