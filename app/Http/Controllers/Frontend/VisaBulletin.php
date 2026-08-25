<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\VisaBulletinApplications;
use App\Models\Admin\VisaBulletinPreferences;
use App\Models\Admin\RecentApproval;

use Carbon\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class VisaBulletin extends Controller
{
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

}
