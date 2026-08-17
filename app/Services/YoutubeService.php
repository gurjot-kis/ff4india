<?php

namespace App\Services;

use App\Models\Admin\YoutubeVideo;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Carbon\Carbon;

class YoutubeService
{
    public function syncVideos(): int
    {
        $response = Http::timeout(30)->get(
            config('services.youtube.api_url'),
            [
                'key' => config('services.youtube.api_key'),
                'channelId' => config('services.youtube.channel_id'),
                'part' => 'snippet',
                'order' => 'date',
                'type' => 'video',
                'maxResults' => 6,
            ]
        );

        if ($response->failed()) {
            throw new \Exception(
                'YouTube API Error: ' . $response->body()
            );
        }

        $data = $response->json();

        $count = 0;

        foreach ($data['items'] ?? [] as $item) {

            $videoId = $item['id']['videoId'] ?? null;

            if (!$videoId) {
                continue;
            }

            $snippet = $item['snippet'] ?? [];

            $title = $snippet['title'] ?? '';

            $description = $snippet['description'] ?? '';

            // Remove HTML and limit to 100 characters
            $description = strip_tags($description);

            $description = Str::limit(
                trim($description),
                100,
                '...'
            );

            $thumbnail = $snippet['thumbnails']['high']['url']
                ?? $snippet['thumbnails']['medium']['url']
                ?? $snippet['thumbnails']['default']['url']
                ?? null;

            $publishedAt = $snippet['publishTime']
                ?? $snippet['publishedAt']
                ?? null;

            YoutubeVideo::updateOrCreate(
                [
                    'video_id' => $videoId,
                ],
                [
                    'title' => $title,
                    'description' => $description,
                    'thumbnail' => $thumbnail,
                    'video_url' => 'https://www.youtube.com/watch?v=' . $videoId,
                    'published_at' => $publishedAt
                        ? Carbon::parse($publishedAt)
                        : null,
                ]
            );

            $count++;
        }

        /*
        |--------------------------------------------------------------------------
        | Remove old videos
        |--------------------------------------------------------------------------
        */

        if (!empty($videoIds)) {
            YoutubeVideo::whereNotIn('video_id', $videoIds)->delete();
        }

        return $count;
    }
}