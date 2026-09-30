<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoogleReview extends Model
{
    protected $fillable = [
        'author_name',
        'author_url',
        'profile_photo_url',
        'rating',
        'review_text',
        'language',
        'original_language',
        'relative_time_description',
        'review_time',
        'translated',
    ];

    protected $casts = [
        'rating' => 'integer',
        'review_time' => 'integer',
        'translated' => 'boolean',
    ];
}