<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('google_reviews', function (Blueprint $table) {
            $table->id();

            $table->string('author_name');
            $table->text('author_url')->nullable();
            $table->text('profile_photo_url')->nullable();

            $table->unsignedTinyInteger('rating');

            $table->text('review_text');

            $table->string('language')->nullable();
            $table->string('original_language')->nullable();

            $table->string('relative_time_description')->nullable();

            $table->unsignedBigInteger('review_time');

            $table->boolean('translated')->default(false);

            $table->timestamps();

            $table->unique(
                ['author_name', 'review_time'],
                'google_reviews_author_time_unique'
            );

            $table->index('review_time');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('google_reviews');
    }
};