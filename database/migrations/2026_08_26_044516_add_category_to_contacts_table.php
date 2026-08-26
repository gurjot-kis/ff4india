<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('contact_forms', function (Blueprint $table) {
            $table->string('category')->nullable()->after('message');
            $table->string('phone')->nullable()->change();
            $table->text('message')->nullable()->change();

            $table->string('otp');
            $table->timestamp('otp_expires_at');
            $table->timestamp('verified_at')->nullable();

            $table->unsignedTinyInteger('attempts')->default(0);


        });
    }

    public function down(): void
    {
        Schema::table('contact_forms', function (Blueprint $table) {
            $table->dropColumn('category');
            $table->string('phone')->nullable(false)->change();
            $table->text('message')->nullable(false)->change();
        });
    }
};