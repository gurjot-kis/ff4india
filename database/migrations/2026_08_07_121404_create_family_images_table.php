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
        Schema::create('family_images', function (Blueprint $table) {
            $table->id();

            $table->string('image')->nullable();

            $table->text('name');

            $table->date('priority_date')->nullable();

            $table->text('description');

            $table->boolean('status')->default(1);

            $table->boolean('set_homepage')->default(0);

            $table->text('review');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('family_images');
    }
};
