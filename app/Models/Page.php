<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'image',
        'experience_years',
        'overview_content',
        'main_content',
        'meta_title',
        'meta_description',
        'status',
    ];

    protected $casts = [
        'status' => 'string',
    ];
}