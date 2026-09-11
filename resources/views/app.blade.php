<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Best Immigration Consultants in India | F4 India') }}</title>

    <meta name="description" content="F4 India is one of the best immigration consultants in India, providing expert services for U.S. immigration petitions, green cards, permanent residency, immigration appeals, citizenship, CSPA, waivers, and humanitarian reinstatement." />

    <meta name="keywords" content="best immigration consultants in India, top immigration consultants in India, best immigration consultants in Chandigarh, US immigration consultants in India" />
    

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <link rel="icon" href="{{ config('app.image_url') }}images/F4-Logo-Blue.png" sizes="any">
    <link rel="icon" href="{{ config('app.image_url') }}images/F4-Logo-Blue.png" type="image/svg+xml">
    <link rel="apple-touch-icon" href="{{ config('app.image_url') }}images/F4-Logo-Blue.png">


    @fonts

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    <x-inertia::head>
        <title>{{ config('app.name', 'Best Immigration Consultants in India | F4 India') }}</title>

        <meta name="description" content="F4 India is one of the best immigration consultants in India, providing expert services for U.S. immigration petitions, green cards, permanent residency, immigration appeals, citizenship, CSPA, waivers, and humanitarian reinstatement." />

        <meta name="keywords" content="best immigration consultants in India, top immigration consultants in India, best immigration consultants in Chandigarh, US immigration consultants in India" />



    </x-inertia::head>
</head>

<body class="font-sans antialiased">
    <x-inertia::app />
</body>

</html>