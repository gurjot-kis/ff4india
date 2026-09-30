<?php

namespace App\Console\Commands;

use App\Models\GoogleReview;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class SyncGoogleReviews extends Command
{
    protected $signature = 'google:sync-reviews';

    protected $description = 'Sync Google reviews into the database';

    public function handle(): int
    {
        $apiKey = config('services.google.maps_api_key');
        $placeId = config('services.google.place_id');

        if (!$apiKey || !$placeId) {
            $this->error('Google Maps API key or Place ID is missing.');

            return self::FAILURE;
        }

        $response = Http::timeout(20)->get(
            'https://maps.googleapis.com/maps/api/place/details/json',
            [
                'place_id' => $placeId,
                'fields' => 'name,rating,reviews',
                'reviews_sort' => 'newest',
                'key' => $apiKey,
            ]
        );

        if (!$response->successful()) {
            Log::error('Google Reviews API HTTP error', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            $this->error('Google API request failed.');

            return self::FAILURE;
        }

        $data = $response->json();

        if (($data['status'] ?? null) !== 'OK') {
            Log::error('Google Reviews API error', [
                'response' => $data,
            ]);

            $this->error(
                'Google API error: ' . ($data['status'] ?? 'Unknown')
            );

            return self::FAILURE;
        }

        $reviews = $data['result']['reviews'] ?? [];

        foreach ($reviews as $review) {
            GoogleReview::updateOrCreate(
                [
                    'author_name' => $review['author_name'],
                    'review_time' => $review['time'],
                ],
                [
                    'author_url' => $review['author_url'] ?? null,
                    'profile_photo_url' => $review['profile_photo_url'] ?? null,
                    'rating' => $review['rating'] ?? 0,
                    'review_text' => $review['text'] ?? '',
                    'language' => $review['language'] ?? null,
                    'original_language' => $review['original_language'] ?? null,
                    'relative_time_description' =>
                        $review['relative_time_description'] ?? null,
                    'translated' => $review['translated'] ?? false,
                ]
            );
        }

        $this->info(
            count($reviews) . ' Google reviews synced successfully.'
        );

        return self::SUCCESS;
    }
}