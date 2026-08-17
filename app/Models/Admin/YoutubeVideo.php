<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class YoutubeVideo extends Model
{
    protected $fillable = [
        'video_id',
        'title',
        'description',
        'thumbnail',
        'video_url',
        'published_at',
    ];

    protected $casts = [
        'status' => 'boolean',
        'created_at' => 'datetime',
        'published_at' => 'datetime',
    ];
}
