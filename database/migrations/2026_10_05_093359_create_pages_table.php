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
        Schema::create('pages', function (Blueprint $table) {
            $table->id();

            // Page information
            $table->string('title');
            $table->string('slug')->unique();

            // Short description
            $table->text('excerpt')->nullable();

            // Page image
            // Example: images/about-3.png
            $table->string('image')->nullable();

            // About page experience badge
            // Example: 18
            $table->unsignedInteger('experience_years')->nullable();

            // Main page content
            $table->longText('overview_content')->nullable();
            $table->longText('main_content')->nullable();

            // SEO
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();

            // Status
            $table->enum('status', ['active', 'inactive'])
                ->default('active');

            $table->timestamps();

            // Indexes
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};