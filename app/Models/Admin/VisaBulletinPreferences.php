<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class VisaBulletinPreferences extends Model
{
    
    protected $table = 'visa_bulletin_preferences';

    protected $fillable = [
        'session',

        // F1
        'pref_f1_all',
        'pref_f1_china',
        'pref_f1_india',
        'pref_f1_mexico',
        'pref_f1_philippines',

        // F2A
        'pref_f2a_all',
        'pref_f2a_china',
        'pref_f2a_india',
        'pref_f2a_mexico',
        'pref_f2a_philippines',

        // F2B
        'pref_f2b_all',
        'pref_f2b_china',
        'pref_f2b_india',
        'pref_f2b_mexico',
        'pref_f2b_philippines',

        // F3
        'pref_f3_all',
        'pref_f3_china',
        'pref_f3_india',
        'pref_f3_mexico',
        'pref_f3_philippines',

        // F4
        'pref_f4_all',
        'pref_f4_china',
        'pref_f4_india',
        'pref_f4_mexico',
        'pref_f4_philippines',

        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
        'created_at' => 'datetime',
    ];

}
