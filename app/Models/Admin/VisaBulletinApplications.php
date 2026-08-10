<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class VisaBulletinApplications extends Model
{
    protected $table = 'visa_bulletin_applications';

    protected $fillable = [
        'session',

        // F1
        'visa_f1_all',
        'visa_f1_china',
        'visa_f1_india',
        'visa_f1_mexico',
        'visa_f1_philippines',

        // F2A
        'visa_f2a_all',
        'visa_f2a_china',
        'visa_f2a_india',
        'visa_f2a_mexico',
        'visa_f2a_philippines',

        // F2B
        'visa_f2b_all',
        'visa_f2b_china',
        'visa_f2b_india',
        'visa_f2b_mexico',
        'visa_f2b_philippines',

        // F3
        'visa_f3_all',
        'visa_f3_china',
        'visa_f3_india',
        'visa_f3_mexico',
        'visa_f3_philippines',

        // F4
        'visa_f4_all',
        'visa_f4_china',
        'visa_f4_india',
        'visa_f4_mexico',
        'visa_f4_philippines',

        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
        'created_at' => 'datetime',
    ];
}
