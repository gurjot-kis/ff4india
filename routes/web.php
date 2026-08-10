<?php

use App\Http\Controllers\Admin\NoticeController;
use App\Http\Controllers\Admin\VisaBulletinController;
use App\Http\Controllers\Admin\EmergencyBroadcastController;
use App\Http\Controllers\Admin\VisaBulletinPreferenceController;
use App\Http\Controllers\Admin\VisaBulletinApplicationController;
use App\Http\Controllers\Admin\RecentApprovalController;
use App\Http\Controllers\Admin\ContactFormController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\FamilyImageController;
use App\Http\Controllers\Admin\HomePageEditableController;

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        Route::resource('notices', NoticeController::class)->except(['show']);
        Route::resource('visa-bulletins', VisaBulletinController::class)->except(['show']);
        Route::resource('emergency-broadcasts', EmergencyBroadcastController::class)->except('show'); 

        Route::resource('visa-preferences', VisaBulletinPreferenceController::class)->except('show'); 
        Route::resource('visa-applications', VisaBulletinApplicationController::class)->except('show'); 
        
        Route::resource('recent-approvals', RecentApprovalController::class)->except('show');   
          
        Route::resource('contact-forms', ContactFormController::class)->except('show');  
        
        Route::resource('categories', CategoryController::class)->except('show');  

        Route::resource('blogs', BlogController::class)->except('show');
        
        Route::resource('family-images', FamilyImageController::class)->except('show');

        Route::resource('home-page', HomePageEditableController::class)->except('show')->parameters(['home-page' => 'homePageEditable',]);

    });

    Route::prefix('dashboard/visa-preferences')->name('dashboard.visa-preferences.')->group(function () {
        Route::get('/export/excel', [VisaBulletinPreferenceController::class, 'exportExcel'])->name('excel');
        Route::get('/export/csv', [VisaBulletinPreferenceController::class, 'exportCsv'])->name('csv');
        Route::get('/export/pdf', [VisaBulletinPreferenceController::class, 'exportPdf'])->name('pdf');
        Route::get('/print', [VisaBulletinPreferenceController::class, 'print'])->name('print');
    });

    Route::prefix('dashboard/visa-applications')->name('dashboard.visa-applications.')->group(function () {
        Route::get('/export/excel', [VisaBulletinApplicationController::class, 'exportExcel'])->name('excel');
        Route::get('/export/csv', [VisaBulletinApplicationController::class, 'exportCsv'])->name('csv');
        Route::get('/export/pdf', [VisaBulletinApplicationController::class, 'exportPdf'])->name('pdf');
        Route::get('/print', [VisaBulletinApplicationController::class, 'print'])->name('print');
    });
    
});

require __DIR__.'/settings.php';
