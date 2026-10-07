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
        Schema::create('services', function (Blueprint $table) {
            $table->id();

            // Service name
            $table->string('title');

            // URL-friendly name
            // Example: family-immigration-green-cards
            $table->string('slug')->unique();

            // Short description for listing/cards
            $table->text('short_description')->nullable();

            // Service image
            // Example: images/services/family-immigration.jpg
            $table->string('image')->nullable();

            // Main service content
            $table->longText('content')->nullable();

            // Sidebar/order position
            $table->unsignedInteger('sort_order')->default(0);

            // Active / inactive
            $table->enum('status', ['active', 'inactive'])
                ->default('active');

            // SEO
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();

            $table->timestamps();

            // Indexes
            $table->index('status');
            $table->index('sort_order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};