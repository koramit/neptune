<?php

namespace App\Http\Controllers\Auth;

use App\APIs\AuthUserAPI;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    public function create()
    {
        session()->flash('page-title', 'เข้าสู่ระบบ');

        return Inertia::render('Auth/LoginForm', [
            'routes' => [
                'login' => route('login.store'),
                'reset_password' => config('app.USER_RESET_PASSWORD_URL'),
                // 'lineLogin' => $lineProvider
                //     ? route('line-login.create', $lineProvider->hashed_key)
                //     : null,
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'login' => ['required', 'string', 'max:30'],
            'password' => ['required', 'string', 'max:60'],
        ]);

        $user = (new AuthUserAPI())->authenticate($validated['login'], $validated['password']);
        if (! $user['ok'] || ! ($user['found'] ?? false)) {
            return back()->withErrors(['login' => $user['message'] ?? $user['body']]);
        }

        if (! $auth = User::query()->where('org_id', $user['org_id'])->first()) {
            /*session()->put('employee-register', $employee);
            session()->put('login-register', $validated['login']);

            return redirect()->route('register');*/

            // auto register for now
            $auth = new User();
            $auth->login = $user['login'];
            $auth->name = $user['full_name'];
            $auth->org_id = $user['org_id'];
            $auth->division = $user['office_name'];
            $auth->password = Hash::make(Str::random());
            $auth->save();
        }

        Auth::login($auth);

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function destroy()
    {
        Auth::guard('web')->logout();
        session()->invalidate();
        session()->regenerateToken();

        return redirect()->route('login');
    }
}
