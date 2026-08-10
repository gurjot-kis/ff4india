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
        Schema::create('visa_bulletin_applications', function (Blueprint $table) {
            $table->id();


            $table->string('session');

            // F1
            $table->string('visa_f1_all')->nullable();
            $table->string('visa_f1_china')->nullable();
            $table->string('visa_f1_india')->nullable();
            $table->string('visa_f1_mexico')->nullable();
            $table->string('visa_f1_philippines')->nullable();

            // F2A
            $table->string('visa_f2a_all')->nullable();
            $table->string('visa_f2a_china')->nullable();
            $table->string('visa_f2a_india')->nullable();
            $table->string('visa_f2a_mexico')->nullable();
            $table->string('visa_f2a_philippines')->nullable();

            // F2B
            $table->string('visa_f2b_all')->nullable();
            $table->string('visa_f2b_china')->nullable();
            $table->string('visa_f2b_india')->nullable();
            $table->string('visa_f2b_mexico')->nullable();
            $table->string('visa_f2b_philippines')->nullable();

            // F3
            $table->string('visa_f3_all')->nullable();
            $table->string('visa_f3_china')->nullable();
            $table->string('visa_f3_india')->nullable();
            $table->string('visa_f3_mexico')->nullable();
            $table->string('visa_f3_philippines')->nullable();

            // F4
            $table->string('visa_f4_all')->nullable();
            $table->string('visa_f4_china')->nullable();
            $table->string('visa_f4_india')->nullable();
            $table->string('visa_f4_mexico')->nullable();
            $table->string('visa_f4_philippines')->nullable();

            $table->boolean('status')->default(1);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visa_bulletin_applications');
    }
};
