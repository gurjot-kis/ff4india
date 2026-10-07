<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'image',
        'content',
        'sort_order',
        'status',
        'meta_title',
        'meta_description',
    ];

    protected $casts = [
        'sort_order' => 'integer',
    ];
}