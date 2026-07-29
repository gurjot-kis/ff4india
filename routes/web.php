<?php

use App\Http\Controllers\Admin\NoticeController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        Route::resource('notices', NoticeController::class)
            ->except(['show']);
    });
    
});

require __DIR__.'/settings.php';
