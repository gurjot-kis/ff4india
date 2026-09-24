<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Inquiry extends Model
{
    protected $fillable = [
        'email',
        'category',
        'filing_status',
        'case_number',
        'principal_name',
        'dob',
        'petitioner_name',
        'inquirer',
        'visa_category',
        'aor_name',
        'aor_law_office',
        'inquirer_name',
        'comments',
    ];

    protected $casts = [
        'visa_category' => 'array',
        'dob' => 'date',
    ];

    public function attachments(): HasMany
    {
        return $this->hasMany(InquiryAttachment::class);
    }
}