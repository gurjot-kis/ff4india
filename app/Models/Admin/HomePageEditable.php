<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class HomePageEditable extends Model
{
    protected $table = 'home_page_editables';

    protected $fillable = [
        'left_heading',
        'left_description',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
