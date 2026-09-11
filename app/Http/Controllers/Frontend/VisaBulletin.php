<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Admin\VisaBulletinApplications;
use App\Models\Admin\VisaBulletinPreferences;
use App\Models\Admin\RecentApproval;
use App\Models\Admin\ContactForm;

use App\Models\Admin\Blog;

use App\Mail\ContactOtpMail;
use App\Mail\ContactDetailsMail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Models\Admin\YoutubeVideo;

use Carbon\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class VisaBulletin extends Controller
{

    public function servicesDetail()
    {
        return Inertia::render(
            'Frontend/servicesDetail',
            []
        );
    }

    public function services()
    {
        return Inertia::render(
            'Frontend/services',
            []
        );
    }


    public function blogDetail($slug)
    {
        $blogs = Blog::where('slug', '!=', $slug)->orderBy('id', 'desc')->paginate(10)->withQueryString();
        $youtubeList = YoutubeVideo::orderBy('id', 'desc')->paginate(6);
        if (!$slug) {
        } else {

            $blog = Blog::where(['slug' => $slug])->first();

            //echo "<pre>"; print_r($blog); echo "</pre>"; die;

            return Inertia::render(
                'Frontend/blogDetail',
                [
                    "slug" => $slug,
                    "blog" => $blog,
                    "blogs" => $blogs,
                    "videos" => $youtubeList,
                ]
            );
        }
    }



    public function blog(Request $request): Response
    {
        $blogs = Blog::latest('id')->paginate(10)->withQueryString();



        return Inertia::render(
            'Frontend/blog',
            [
                "blogs" => $blogs
            ]
        );
    }

    public function about()
    {
        return Inertia::render(
            'Frontend/about',
            []
        );
    }

    public function cspaAgeCalculator()
    {
        return Inertia::render(
            'Frontend/cspaAgeCalculator',
            []
        );
    }


    public function sendOtp(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:30'],
            'countryCode' => ['required', 'string', 'max:30'],
            'category' => ['required', 'string', 'max:100'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        $otp = (string) random_int(100000, 999999);
        
        $codephone = "";

        if($validated['phone'])
        {    
            $codephone = $validated['countryCode'].$validated['phone'];
        }

        $contact = ContactForm::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $codephone ?? null,
            'category' => $validated['category'],
            'message' => $validated['message'],

            'otp' => $otp,
            'otp_expires_at' => now()->addMinutes(10),
            'verified_at' => null,
            'attempts' => 0,
        ]);

        Mail::to($contact->email)->send(
            new ContactOtpMail($otp)
        );

        return back()->with([
            'otp_sent' => true,
            'otp_email' => $contact->email,
        ]);
    }


    public function verifyOtp(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => ['required', 'email'],
            'otp' => ['required', 'digits:6'],
        ]);

        $contact = ContactForm::where('email', $request->email)
            ->whereNull('verified_at')
            ->latest()
            ->first();

        if (!$contact) {
            return back()->withErrors([
                'otp' => 'Verification request not found.',
            ]);
        }

        if (now()->greaterThan($contact->otp_expires_at)) {
            return back()->withErrors([
                'otp' => 'OTP has expired. Please request a new OTP.',
            ]);
        }

        if ($request->otp != $contact->otp) {

            $contact->increment('attempts');

            return back()->withErrors([
                'otp' => 'Wrong OTP. Please enter the correct OTP.',
            ]);
        }

        // OTP is correct
        $contact->update([
            'verified_at' => now(),
        ]);

        Mail::to($contact->email)->send(
            new ContactDetailsMail($contact)
        );

        return back()->with('success', 'Your message has been sent successfully.');
    }


    public function sendOtpSlider(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'countryCode' => ['required', 'string', 'max:30'],
            'phone' => ['nullable', 'string', 'max:30'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        $otp = (string) random_int(100000, 999999);

        $codephone = "";

        if($validated['phone'])
        {    
            $codephone = $validated['countryCode'].$validated['phone'];
        }

        $contact = ContactForm::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $codephone ?? null,
            'message' => $validated['message'],

            'otp' => $otp,
            'otp_expires_at' => now()->addMinutes(10),
            'verified_at' => null,
            'attempts' => 0,
        ]);

        Mail::to($contact->email)->send(
            new ContactOtpMail($otp)
        );

        return back()->with([
            'otp_sent' => true,
            'otp_email' => $contact->email,
        ]);
    }

    public function verifyOtpSlider(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => ['required', 'email'],
            'otp' => ['required', 'digits:6'],
        ]);

        $contact = ContactForm::where('email', $request->email)
            ->whereNull('verified_at')
            ->latest()
            ->first();

        if (!$contact) {
            return back()->withErrors([
                'otp' => 'Verification request not found.',
            ]);
        }

        if (now()->greaterThan($contact->otp_expires_at)) {
            return back()->withErrors([
                'otp' => 'OTP has expired. Please request a new OTP.',
            ]);
        }

        if ($request->otp != $contact->otp) {

            $contact->increment('attempts');

            return back()->withErrors([
                'otp' => 'Wrong OTP. Please enter the correct OTP.',
            ]);
        }

        // OTP is correct
        $contact->update([
            'verified_at' => now(),
        ]);

        Mail::to($contact->email)->send(
            new ContactDetailsMail($contact)
        );

        return back()->with('success', 'Your message has been sent successfully.');
    }

    public function index()
    {
        $visaBulletinApplication = VisaBulletinApplications::orderBy('id', 'desc')->take(12)->get();

        $currentSession = VisaBulletinApplications::where('status', '1')->orderBy('id', 'desc')->value('session');
        $nextSession = null;
        if ($currentSession) {
            $nextSession = Carbon::createFromFormat('F Y', $currentSession)->addMonth()->format('F Y');
        }

        return Inertia::render('Frontend/VisaBulletin', [
            'visaBulletinApplication' => $visaBulletinApplication,
            'currentSession' => $currentSession,
            'nextSession' => $nextSession,
        ]);
    }

    public function VisaBulletinDetail($session)
    {
        if ($session) {
            $visaBulletinApplication = VisaBulletinApplications::where(['session' => $session])->orderBy('id', 'desc')->first();
            $visaBulletinPreference = VisaBulletinPreferences::where(['session' => $session])->orderBy('id', 'desc')->first();
        } else {

            $visaBulletinApplication = VisaBulletinApplications::where('status', '1')->orderBy('id', 'desc')->first();
            $visaBulletinPreference = VisaBulletinPreferences::where('status', '1')->orderBy('id', 'desc')->first();
        }

        $currentSession = VisaBulletinApplications::where('status', '1')->orderBy('id', 'desc')->value('session');
        $nextSession = null;
        if ($currentSession) {
            $nextSession = Carbon::createFromFormat('F Y', $currentSession)->addMonth()->format('F Y');
        }

        return Inertia::render('Frontend/VisaBulletinDetail', [
            "visaBulletinApplication" => $visaBulletinApplication,
            "visaBulletinPreference" => $visaBulletinPreference,
            'nextSession' => $nextSession,
        ]);
    }


    public function RecentApprovals(Request $request): Response
    {
        $year = $request->year;

        $recentApprovals = RecentApproval::query()
            ->when($year, function ($query) use ($year) {
                $query->whereYear('approval_date', $year);
            })
            ->latest()
            ->paginate(9)
            ->withQueryString();

        return Inertia::render(
            'Frontend/RecentApproval',
            [
                'recentApprovals' => $recentApprovals,
                'filters' => [
                    'year' => $year,
                ],
            ]
        );
    }


    public function contactus()
    {
        return Inertia::render(
            'Frontend/ContactUs',
            []
        );
    }

    public function contactStore(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:30'],
            'category' => ['required', 'string', 'max:100'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

     
       
        $contact = ContactForm::create($validated);


        return back()->with('success', 'Your message has been sent successfully.');
    }


    
}
