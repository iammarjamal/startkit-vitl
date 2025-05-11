<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::prefix(LaravelLocalization::setLocale())->middleware(['localeSessionRedirect', 'localizationRedirect', 'localeViewPath'])->group(
    function () {

        Route::get('/', function () {
            return Inertia::render('home/pages/index');
        })->name('home.index');

    }
);

Route::get('/{any}', function () {
    return Inertia::render('error/pages/index', [
        'status' => 404,
    ]);
})->where('any', '.*');

URL::forceHttps();
