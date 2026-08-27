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
use App\Http\Controllers\Admin\ApiSocialController;


use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\VisaBulletin;

use Illuminate\Support\Facades\Route;

//Route::inertia('/', 'welcome')->name('home');

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/visa-bulletin', [VisaBulletin::class, 'index'])->name('VisaBulletin');

Route::get('/visa-bulletin-detail/{session}', [VisaBulletin::class, 'VisaBulletinDetail'])->name('VisaBulletinDetail');

Route::get('/recent-approval', [VisaBulletin::class, 'RecentApprovals'])->name('RecentApprovals');

Route::get('/contact', [VisaBulletin::class, 'contactus'])->name('contactus');

Route::post('/contact-us', [VisaBulletin::class, 'contactStore'])->name('contactStore');

Route::post('/contact-us/send-otp', [VisaBulletin::class, 'sendOtp'])->name('send-otp');

Route::post('/contact-us/verify-otp', [VisaBulletin::class, 'verifyOtp'])->name('verify-otp');

Route::post('/contact-us/send-otp-slider', [VisaBulletin::class, 'sendOtpSlider'])->name('send-otp-slider');

Route::post('/contact-us/verify-otp-slider', [VisaBulletin::class, 'verifyOtpSlider'])->name('verify-otp-slider');

Route::get('/cspa-age-calculator', [VisaBulletin::class, 'cspaAgeCalculator'])->name('cspaAgeCalculator');

Route::get('/about', [VisaBulletin::class, 'about'])->name('about');

Route::get('/blog', [VisaBulletin::class, 'blog'])->name('blog');



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

        Route::get('social/check_uscis_status', [ApiSocialController::class, 'check_uscis_status'])->name('check_uscis_status');

        
        

    });

    Route::get('social/check_youtube_video', [ApiSocialController::class, 'check_youtube_video'])->name('check_youtube_video');
        Route::get('social/check_facebook_video', [ApiSocialController::class, 'check_facebook_video'])->name('check_facebook_video');
        Route::get('social/check_instagram_video', [ApiSocialController::class, 'check_instagram_video'])->name('check_instagram_video');

    Route::prefix('dashboard/recent-approvals')->name('dashboard.recent-approvals.')->group(function () {
        Route::get('/export/excel', [RecentApprovalController::class, 'exportExcel'])->name('excel');
        Route::get('/export/csv', [RecentApprovalController::class, 'exportCsv'])->name('csv');
        Route::get('/export/pdf', [RecentApprovalController::class, 'exportPdf'])->name('pdf');
        Route::get('/print', [RecentApprovalController::class, 'print'])->name('print');
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
