<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{
    protected $table = 'contact_forms';

    protected $fillable = [
        'name',
        'email',
        'email_otp',
        'phone',
        'message',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
    

}
