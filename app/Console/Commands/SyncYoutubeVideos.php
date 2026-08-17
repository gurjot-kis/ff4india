<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\YoutubeService;

class SyncYoutubeVideos extends Command
{
    protected $signature = 'youtube:sync';

    protected $description = 'Sync latest YouTube channel videos';

    public function handle(YoutubeService $youtubeService): int
    {
        try {
            $count = $youtubeService->syncVideos();

            $this->info("Successfully synced {$count} YouTube videos.");

            return Command::SUCCESS;
        } catch (\Throwable $e) {
            $this->error('YouTube sync failed: ' . $e->getMessage());

            return Command::FAILURE;
        }
    }
}