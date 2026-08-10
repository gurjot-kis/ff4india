<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class EmergencyBroadcast extends Model
{
    protected $fillable = [
        'description',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];
}
