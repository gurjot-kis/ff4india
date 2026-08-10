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
        Schema::create('recent_approvals', function (Blueprint $table) {
            $table->id();
            
            $table->text('name');

            $table->string('image')->nullable();

            $table->date('approval_date');

            $table->string('visa_category', 50);

            $table->boolean('status')->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recent_approvals');
    }
};
