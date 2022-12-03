<?php

namespace App\Providers;

use Hashids\Hashids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {


        Sanctum::ignoreMigrations();

        $this->app->singleton(Hashids::class, fn () => new Hashids(salt: config('app.key')));
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Model::unguard();

        Model::preventAccessingMissingAttributes(!$this->app->isProduction());

        Model::preventLazyLoading(!$this->app->isProduction());

    }
}
