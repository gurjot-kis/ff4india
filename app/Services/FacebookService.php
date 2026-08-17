<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FacebookService
{
    public function getPosts(): array
    {
        $pageId = config('services.facebook.page_id');
        $accessToken = config('services.facebook.page_access_token');

        $response = Http::get(
            "https://graph.facebook.com/v20.0/{$pageId}/posts",
            [
                'access_token' => $accessToken,
                'fields' => 'id,message,created_time,full_picture,attachments{media_type,media,url,type,subattachments}',
                'limit' => 10,
            ]
        );

        if ($response->failed()) {
            throw new \Exception(
                'Facebook API Error: ' . $response->body()
            );
        }

        return $response->json();
    }
}