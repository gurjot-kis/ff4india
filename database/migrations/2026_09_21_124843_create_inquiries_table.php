<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inquiries', function (Blueprint $table) {
            $table->id();

            $table->string('email');
            $table->string('category')->nullable();

            $table->string('filing_status')->nullable();
            $table->string('case_number')->nullable();
            $table->string('principal_name')->nullable();
            $table->date('dob')->nullable();
            $table->string('petitioner_name')->nullable();

            $table->string('inquirer')->nullable();
            $table->json('visa_category')->nullable();

            $table->string('aor_name')->nullable();
            $table->string('aor_law_office')->nullable();
            $table->string('inquirer_name')->nullable();

            $table->text('comments')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};