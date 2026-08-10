<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class FamilyImage extends Model
{
    protected $table = 'family_images';

    protected $fillable = [
        'image',
        'name',
        'priority_date',
        'description',
        'status',
        'set_homepage',
        'review',
    ];

    protected $casts = [
        'priority_date' => 'date',
        'status' => 'boolean',
        'set_homepage' => 'boolean',
        'created_at' => 'datetime',
    ];
}