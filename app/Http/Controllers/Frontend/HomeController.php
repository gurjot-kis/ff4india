<?php
namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Admin\Notice;
use App\Models\Admin\RecentApproval;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Admin\YoutubeVideo;
use App\Models\Admin\FamilyImage;
use App\Models\Admin\HomePageEditable;

use App\Services\FacebookService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    public function index()
    {
        $youtubeList = YoutubeVideo::orderBy('id', 'desc')->paginate(6);
        $recentApprovals = RecentApproval::orderBy('id', 'desc')->paginate(6);
        $familyimage = FamilyImage::where(['status' => '1', 'set_homepage' => '1'])->orderBy('id', 'desc')->first();
        $homeEdit = HomePageEditable::orderBy('id', 'desc')->first();

        $instagramResponse = $this->get_instagram_video();
        $instagramData = $instagramResponse->getData(true);

        //echo "<pre>"; print_r($homeEdit); echo "</pre>"; die;

        return Inertia::render('Frontend/Home', [
            'videos' => $youtubeList,
            'recentApprovals' => $recentApprovals,
            'instagramVideos' => $instagramData,
            'familyimage' => $familyimage,
            'homeEdit' => $homeEdit,
        ]);
    }


    public function get_instagram_video(): JsonResponse
    {
        $userId = env('INSTAGRAM_USER_ID');
        $accessToken = env('INSTAGRAM_ACCESS_TOKEN');

        if (!$userId || !$accessToken) {
            return response()->json([
                'success' => false,
                'message' => 'Instagram credentials are not configured.',
            ], 500);
        }

        $response = Http::get(
            "https://graph.instagram.com/{$userId}/media",
            [
                'fields' => implode(',', [
                    'id',
                    'caption',
                    'media_type',
                    'media_product_type',
                    'media_url',
                    'thumbnail_url',
                    'permalink',
                    'timestamp',
                    'username',
                ]),
                'access_token' => $accessToken,
                'limit' => 25,
            ]
        );

        if ($response->failed()) {
            return response()->json([
                'success' => false,
                'message' => 'Instagram API request failed.',
                'error' => $response->json(),
            ], $response->status());
        }

        $data = $response->json();

        // Only return Reels
        $reels = collect($data['data'] ?? [])
            ->filter(function ($item) {
                return ($item['media_product_type'] ?? null) === 'REELS';
            })
            ->values();

        return response()->json([
            'success' => true,
            'count' => $reels->count(),
            'data' => $reels,
        ]);
    
    
    }
}
