<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class RecentApproval extends Model
{
    protected $table = 'recent_approvals';

    protected $fillable = [
        'name',
        'image',
        'approval_date',
        'visa_category',
        'status',
    ];

    protected $casts = [
        'approval_date' => 'date',
        'status' => 'boolean',
    ];
}
