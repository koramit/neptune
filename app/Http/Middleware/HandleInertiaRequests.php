<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'sessionLifetimeInSeconds' => fn () => config('session.lifetime') * 60000,
            'appRoutes' => [
                'logout' => fn () => route('logout'),
                'checkTimeout' => url('/check-timeout'), // route('check-timeout'),
            ],
            'flash' => [
                'title' => fn () => $request->session()->pull('page-title', 'MISSING'),
                'navMenu' => fn () => $request->session()->pull('nav-menu', []),
            ],
            'user' => $request->user()
                ? [
                    'name' => fn () => $request->user()->name,
                    // 'job_title' => fn () => $request->user()->employee?->jobTitle->name,
                    // 'avatar' => fn () => $request->user()->socialProfiles()->where('active', true)->first()?->profile['avatar'] ?? null,
                ] : [],
        ]);
    }
}
