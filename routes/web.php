<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BaccController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use Laravel\Socialite\Facades\Socialite;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


// Route::get('/create-bacc', [BaccController::class , 'store'])->name('create-bacc');
// Route::get('/home', function () {
//     return Inertia::render('Comps/Home');
// });



Route::get('/hhhh', function () {
    return Inertia::render('Auth/LoginSignUp');
});


Route::get('auth/google',[RegisteredUserController::class , 'RedirectGoogle'])->name('auth.google');
Route::get('auth/google/callback',[RegisteredUserController::class , 'GoogleCallBack'])->name('callback.google');







