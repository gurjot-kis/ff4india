<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('visa_bulletins', function (Blueprint $table) {
            $table->id();
            $table->string('month');

            $table->string('family_filing_f1')->nullable();
            $table->string('family_filing_f2a')->nullable();
            $table->string('family_filing_f2b')->nullable();
            $table->string('family_filing_f3')->nullable();
            $table->string('family_filing_f4')->nullable();

            $table->string('family_final_f1')->nullable();
            $table->string('family_final_f2a')->nullable();
            $table->string('family_final_f2b')->nullable();
            $table->string('family_final_f3')->nullable();
            $table->string('family_final_f4')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visa_bulletins');
    }
};
