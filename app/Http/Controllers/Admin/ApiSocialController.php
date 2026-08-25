<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\YoutubeVideo;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use App\Services\FacebookService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;


class ApiSocialController extends Controller
{

    public function check_uscis_status()
    {
 
        header('Content-Type: application/json');

        $clientId = getenv('USCIS_CLIENT_ID');
        $clientSecret = getenv('USCIS_CLIENT_SECRET');
        
        $receiptNumber = $_GET['appReceiptNum'] ?? '';

        
        //$receiptNumber = $_POST['appReceiptNum'] ?? '';
        //$receiptNumber = "WAC1190136735";

        if (empty($receiptNumber)) {
            echo json_encode([
                'success' => false,
                'message' => 'Receipt number is required.'
            ]);
            exit;
        }


        /*
        |--------------------------------------------------------------------------
        | STEP 1: Get Access Token
        |--------------------------------------------------------------------------
        */

        $tokenUrl = 'https://api-int.uscis.gov/oauth/accesstoken';

        $ch = curl_init();

        curl_setopt_array($ch, [
            CURLOPT_URL => $tokenUrl,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => http_build_query([
                'grant_type' => 'client_credentials',
                'client_id' => $clientId,
                'client_secret' => $clientSecret,
            ]),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/x-www-form-urlencoded',
                'Accept: application/json',
            ],
            CURLOPT_TIMEOUT => 30,
        ]);

        $tokenResponse = curl_exec($ch);

        if ($tokenResponse === false) {
            echo json_encode([
                'success' => false,
                'message' => curl_error($ch),
            ]);
            curl_close($ch);
            exit;
        }

        $tokenHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        curl_close($ch);

        $tokenData = json_decode($tokenResponse, true);

        if ($tokenHttpCode < 200 || $tokenHttpCode >= 300) {
            echo json_encode([
                'success' => false,
                'message' => 'Unable to obtain USCIS access token.',
                'http_code' => $tokenHttpCode,
                'response' => $tokenData ?: $tokenResponse,
            ]);
            exit;
        }

        $accessToken = $tokenData['access_token'] ?? null;

        if (!$accessToken) {
            echo json_encode([
                'success' => false,
                'message' => 'Access token was not returned by USCIS.',
                'response' => $tokenData,
            ]);
            exit;
        }


        /*
        |--------------------------------------------------------------------------
        | STEP 2: Get Case Status
        |--------------------------------------------------------------------------
        */

        $caseUrl = 'https://api-int.uscis.gov/case-status/' .
                urlencode($receiptNumber);

        $ch = curl_init();

        curl_setopt_array($ch, [
            CURLOPT_URL => $caseUrl,
            CURLOPT_HTTPGET => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . $accessToken,
                'Accept: application/json',
            ],
            CURLOPT_TIMEOUT => 30,
        ]);

        $caseResponse = curl_exec($ch);

        if ($caseResponse === false) {
            echo json_encode([
                'success' => false,
                'message' => curl_error($ch),
            ]);
            curl_close($ch);
            exit;
        }

        $caseHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        curl_close($ch);

        $caseData = json_decode($caseResponse, true);


        /*
        |--------------------------------------------------------------------------
        | STEP 3: Return Result 
        |--------------------------------------------------------------------------
        */

        echo json_encode([
            'success' => ($caseHttpCode >= 200 && $caseHttpCode < 300),
            'http_code' => $caseHttpCode,
            'data' => $caseData,
            'current_case_status_text_en' =>
                $caseData['case_status']['current_case_status_text_en'] ?? null,
            'current_case_status_desc_en' =>
                $caseData['case_status']['current_case_status_desc_en'] ?? null,
        ], JSON_PRETTY_PRINT);

    }

    public function check_youtube_video()
    {
        $youtubeList = YoutubeVideo::orderBy('id', 'desc')->paginate(6);

        echo "<pre>"; print_r($youtubeList); echo "</pre>"; die;
    }

    public function check_facebook_video(FacebookService $facebookService)
    {
        try {
            $posts = $facebookService->getPosts();

            return response()->json([
                'success' => true,
                'data' => $posts,
            ]);

        } catch (\Throwable $e) {

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function check_instagram_video(): JsonResponse
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

    

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
