<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Bacc;
use App\Models\Master;
use App\Models\License;
use App\Models\Phd;
use App\Models\Phdproject;
use App\Models\Proffeseur;
use App\Models\Proffessionnel;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Laravel\Socialite\Facades\Socialite;

use Exception;

use Inertia\Inertia;
use Inertia\Response;





class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */

    protected $redirectTo = '/';

    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */




    public function store(Request $request): RedirectResponse
    {

      $request->validate([
        'UserName' => 'required|string',
        'SocietName' => 'required|string',
        'PhoneNumber' => 'required|string|digits_between:10,16',
        'email' => 'required|email|unique:reserchers,email',
        'password' => 'required|min:8',
    ]);


        $user = User::create([
            'UserName' => $request->UserName,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'PhoneNumber' => $request->PhoneNumber,
        ]);

        if ($request->category === "bac+2") {
            $user->baccs = Bacc::create([
                'UnivercityName' => $request->university,
                'EtablisementName' => $request->etablessement,
                'Filere' => $request->filere,
                'reserech_id' => $user->id,
            ]);
        } elseif ($request->category === "License") {
            $user->licenses = License::create([
                'UnivercityName' => $request->university,
                'EtablisementName' => $request->etablessement,
                'Filere' => $request->filere,
                'reserech_id' => $user->id,
            ]);
        } elseif ($request->category === "master") {
            $user->masters = Master::create([
                'UnivercityName' => $request->university,
                'EtablisementName' => $request->etablessement,
                'Filere' => $request->filere,
                'reserech_id' => $user->id,
            ]);
        } elseif ($request->category === "phd") {
            $user->phds = Phd::create([
                'UnivercityName' => $request->university,
                'EtablisementName' => $request->etablessement,
                'Filere' => $request->filere,
                'reserech_id' => $user->id,
            ]);
        } elseif ($request->category === "phd_project") {
            $user->phdprojects = Phdproject::create([
                'UnivercityName' => $request->university,
                'EtablisementName' => $request->etablessement,
                'Filere' => $request->filere,
                'reserech_id' => $user->id,
            ]);
        } elseif ($request->category === "proffeseur") {
            $user->proffeseurs = Proffeseur::create([
                'UnivercityName' => $request->university,
                'EtablisementName' => $request->etablessement,
                'Filere' => $request->filere,
                'reserech_id' => $user->id,
            ]);
        } elseif ($request->category === "proffessionnel") {

            $user->proffissionnels = Proffessionnel::create([
                'SocietName' => $request->SocietName,
                'reserech_id' => $user->id,
            ]);
        }


        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);


        // return Inertia::render('Comps/Home');
    }

    public function RedirectGoogle()
    {
         return Socialite::driver('google')->redirect();





    }


    public function GoogleCallBack()
    {

        try {
            $googleUser = Socialite::driver('google')->user();
            $user = User::where('google_id', $googleUser->getId())->first();
            if (!$user) {

                $newUser = user::create([
                    'UserName' => $googleUser->getName(),
                    'email' => $googleUser->getEmail(),
                    'google_id' => $googleUser->getId(),

                ]);

                Auth::login($newUser);
                return redirect()->intended('dashboard');

            } else {
                Auth::login($user);
                return redirect()->intended('dashboard');
            }


        } catch (Exception $e) {
          dd($e->getMessage());
        }


     }

}
