<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function (Illuminate\Http\Request $request) {
    $forms = App\Models\Form::query()
        ->where('creator_id', $request->user()->id)
        ->get()
        ->transform(fn ($f) => [
            'title' => $f->title,
            'hashedKey' => $f->hashed_key,
            'routes' => [
                'edit' => route('forms.edit', $f->hashed_key),
                'show' => route('forms.show', $f->hashed_key),
                'duplicate' => route('forms.duplicate', $f->hashed_key),
                'participants_export' => route('participants.export', $f->hashed_key),
                'responses_export' => route('responses.export', $f->hashed_key),
            ],
        ]);

    session()->flash('page-title', 'ฟอร์ม');

    $invitations = App\Models\Form::query()
        ->select(['id', 'title', 'config'])
        ->get()
        ->filter(fn ($f) => collect($f->config['invitees'])->contains($request->user()->org_id))
        ->values()
        ->transform(fn ($f) => [
            'title' => $f->title,
            'hashedKey' => $f->hashed_key,
            'routes' => [
                'show' => route('forms.show', $f->hashed_key),
            ],
        ]);

    return \Inertia\Inertia::render('User/DashboardPage', [
        'routes' => [
            'forms_create' => route('forms.create'),
            'fix_form' => route('forms.show', env('FIX_FORM_HASHED_KEY', 'ab')),
        ],
        'can' => [
            'create_form' => $request->user()->id === 1,
        ],
        'forms' => $forms,
        'invitations' => $invitations,
    ]);
})->middleware(['auth'])->name('home');

Route::get('/f/{form}/uninvited', function (App\Models\Form $form) {
    return \Inertia\Inertia::render('UnauthorizedPage', [
        'title' => $form->title,
        'message' => 'ท่านไม่ได้รับเชิญเข้าร่วมแบบสอบถามนี้',
    ]);
})->name('forms.uninvited');

Route::get('/f/{form}/anonymous-no-edit-allowed', function (App\Models\Form $form) {
    return \Inertia\Inertia::render('UnauthorizedPage', [
        'title' => $form->title,
        'message' => 'ท่านไม่สามารถทำซ้ำหรือแก้ไขแบบสอบถามนี้ได้เนื่องจากเป็นแบบสอบถามแบบไม่ระบุตัวตนและท่านได้ตอบแล้ว',
    ]);
})->name('forms.anonymous-no-edit-allowed');

// Route::get('forms', function () {
//     return \Inertia\Inertia::render('User/DashboardPage');
// })->middleware(['auth'])->name('forms');

Route::get('/landing-page', function () {
    return \Inertia\Inertia::render('LandingPage', [
        'formData' => [
            'name' => 'koramit',
            'gender' => 'male',
            'division' => 'Nephro',
            'is_gay' => false,
            'comment' => 'ไปไหนมา\\nสามวา\\nสองศอก',
        ],
        'formConfigs' => [
            [
                'component' => 'FormInput',
                'props' => [
                    'name' => 'name',
                ],
            ],
            [
                'component' => 'FormRadio',
                'props' => [
                    'name' => 'gender',
                    'options' => ['female', 'male'],
                ],
            ],
            [
                'component' => 'FormSelect',
                'props' => [
                    'name' => 'division',
                    'options' => ['GI', 'ID', 'Cardio', 'Nephro'],
                ],
            ],
            [
                'component' => 'FormCheckbox',
                'props' => [
                    'name' => 'is_gay',
                    'label' => 'is gay',
                ],
            ],
            [
                'component' => 'FormTextarea',
                'props' => [
                    'name' => 'comment',
                    'label' => 'is gay',
                ],
            ],
        ],
    ]);
});

// Auth
Route::middleware(['guest'])->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store'])
        ->name('login.store');
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');
    Route::post('register', [RegisteredUserController::class, 'store'])
        ->name('register.store');
//    Route::get('line-login/{provider}', [LINELoginController::class, 'create'])
//        ->name('line-login.create');
//    Route::get('line-login/{provider}/callback', [LINELoginController::class, 'store'])
//        ->name('line-login.store');
});
Route::middleware('auth')->group(function () {
    Route::delete('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
//    Route::get('line-link/{provider}', [LINELinkController::class, 'create'])
//        ->name('line-link.create');
//    Route::get('line-link/{provider}/callback', [LINELinkController::class, 'store'])
//        ->name('line-link.store');
});

Route::get('/forms/create', function (Illuminate\Http\Request $request) {
    // if user id !== 1 then abort 403
    if ($request->user()->id !== 1) {
        abort(403);
    }

    return \Inertia\Inertia::render('Form/CreateForm', [
        'routes' => [
            'store' => route('forms.store'),
        ],
    ]);
})->middleware(['auth'])->name('forms.create');

Route::get('/f/{form}', function (App\Models\Form $form, Illuminate\Http\Request $request) {
    if (collect($form->config['invitees'])->doesntContain($request->user()->org_id) && $request->user()->id !== $form->creator_id) {
        return redirect()->route('forms.uninvited', $form->hashed_key);
    }

    if ($userResponse = App\Models\UserResponse::query()
        ->where('form_id', $form->id)
        ->where('user_id', $request->user()->id)
        ->first()
    ) {
        return redirect()->route('forms.anonymous-no-edit-allowed', $form->hashed_key);
    }
    $request->session()->flash('page-title', $form->title);

    return \Inertia\Inertia::render('Form/ShowForm', [
        'questions' => $form->transformed_questions,
        'transformed_questions' => $form->transformed_questions,
        'division' => $request->user()->division->name,
        'routes' => [
            'store' => route('responses.store', $form->hashed_key),
        ],
    ]);
})->middleware(['auth'])->name('forms.show');

Route::patch('/forms/{form}', function (App\Models\Form $form, Illuminate\Http\Request $request) {
    if ($form->creator_id !== $request->user()->id) {
        abort(403);
    }

    // $request->validate([
    //     'apple' => 'required',
    //     'banana' => 'required',
    // ]);

    $data = $request->all();
    $form->title = $data['title'] ?? 'untitled';
    $form->config = [
        'invitees' => $data['invitees'],
    ];
    $form->questions = $data['questions'];
    // $form->creator_id = $request->user()->id;
    $form->save();
    /*$data['invitees'] = explode("\n", $data['invitees']);
    foreach ($data['questions'] as &$question) {
        $question['choices'] = explode("\n", $question['choices']);
    }
    $form->title = $data['title'] ?? 'ยังไม่มีชื่อ';
    $form->config = [
        'invitees' => $data['invitees'],
    ];
    $form->questions = $data['questions'];
    $form->save();*/

    return redirect()->route('home');
})->middleware(['auth'])->name('forms.update');

Route::get('/forms/{form}/edit', function (App\Models\Form $form, Illuminate\Http\Request $request) {
    if ($form->creator_id !== $request->user()->id) {
        abort(403);
    }

    $formData['title'] = $form->title;
    $formData['invitees'] = $form->config['invitees']; // implode("\n", $form->config['invitees']);
    $formData['questions'] = $form->questions;
    // $formData['invitees'] = implode("\n", $form->config['invitees']);
    /*$questions = [];
    foreach ($form->questions as $question) {
        $questions[] = [
            'title' => $question['title'],
            'choices' => implode("\n", $question['choices']),
            // 'choices' => $question['type'] === 'FormSelect'
            //     ? implode("\n", $question['choices'])
            //     : $question['choices'],
        ];
    }

    $formData['questions'] = $questions;*/

    return \Inertia\Inertia::render('Form/EditForm', [
        'formData' => $formData,
        'routes' => [
            'update' => route('forms.update', $form->hashed_key),
            'show' => route('forms.show', $form->hashed_key),
        ],
    ]);
})->middleware(['auth'])->name('forms.edit');

Route::post('/forms', function (Illuminate\Http\Request $request) {
    $data = $request->all();
    $form = new App\Models\Form;
    $form->title = $data['title'] ?? 'untitled';
    $form->config = [
        'invitees' => $data['invitees'],
    ];
    $form->questions = $data['questions'];
    $form->creator_id = $request->user()->id;
    $form->save();

    return redirect()->route('home');
    // return \Inertia\Inertia::render('Form/CreateForm');
})->middleware(['auth'])->name('forms.store');

Route::post('/forms/{form}/duplicate', function (Illuminate\Http\Request $request, App\Models\Form $form) {
    if ($form->creator_id !== $request->user()->id) {
        abort(403);
    }

    $newForm = $form->replicate();
    $newForm->save();

    return redirect()->route('forms.edit', $newForm->hashed_key);
})->middleware(['auth'])->name('forms.duplicate');

Route::post('/responses/{form}', function (App\Models\Form $form, Illuminate\Http\Request $request) {
    if (collect($form->config['invitees'])->doesntContain($request->user()->org_id)) {
        abort(403);
    }

    if ($userResponse = App\Models\UserResponse::query()
            ->where('form_id', $form->id)
            ->where('user_id', $request->user()->id)
            ->first()
    ) {
        abort(403);
    }

    $response = new App\Models\FormResponse;
    $response->form_id = $form->id;
    $answers = [];
    $answers['หน่วยงาน'] = $request->input('division');

    $data = $request->all();
    foreach ($form->questions as $q) {
        $answers[$q['title']] = $data[$q['title']];
    }
    $response->answers = $answers;

    $response->save();

    $userResponse = new \App\Models\UserResponse();
    $userResponse->user_id = $request->user()->id;
    $userResponse->form_id = $form->id;
    $userResponse->save();

    return redirect()->route('responses.thanks', $form->hashed_key);
})->middleware(['auth'])->name('responses.store');

Route::get('/responses/{form}/thanks', function (App\Models\Form $form) {
    return \Inertia\Inertia::render('ResponseSubmitted', ['title' => $form->title]);
})->middleware(['auth'])->name('responses.thanks');

Route::get('/participants/{form}/export', function (App\Models\Form $form, Illuminate\Http\Request $request) {
    if ($form->creator_id !== $request->user()->id) {
        abort(403);
    }

    $data = [];
    $users = \App\Models\UserResponse::query()
        ->where('form_id', $form->id)
        ->get();

    $participants = [];
    foreach ($users as $user) {
        $userData = \App\Models\User::query()->find($user->user_id);
        $row['id'] = $userData->org_id;
        $row['ชื่อ'] = $userData->name;
        $row['หน่วยงาน'] = $userData->division;
        $row['ตอบแล้ว'] = 'YES';
        $data[] = $row;
        $participants[] = $userData->org_id;
    }

    foreach ($form->config['invitees'] as $sapId) {
        if (in_array($sapId, $participants)) {
            continue;
        }

        $data[] = [
            'id' => $sapId,
            // 'ชื่อ' => null,
            'หน่วยงาน' => null,
            'ตอบแล้ว' => 'NO',
        ];
    }

    $shuffledData = collect($data)->shuffle()->toArray();

    return (new \Rap2hpoutre\FastExcel\FastExcel($shuffledData))->download('ผู้ตอบแบบสอบถาม.xlsx');
})->middleware(['auth'])->name('participants.export');

Route::get('/responses/{form}/export', function (App\Models\Form $form, Illuminate\Http\Request $request) {
    if ($form->creator_id !== $request->user()->id) {
        abort(403);
    }

    $data = [];
    $responses = \App\Models\FormResponse::query()
        ->where('form_id', $form->id)
        ->get();

    foreach ($responses as $response) {
        $row = [];
        foreach ($response->answers as $key => $value) {
            $row[$key] = $value;
        }
        $data[] = $row;
    }

    $shuffledData = collect($data)->shuffle()->toArray();

    return (new \Rap2hpoutre\FastExcel\FastExcel($shuffledData))->download('คำตอบแบบสอบถาม.xlsx');
})->middleware(['auth'])->name('responses.export');

Route::get('/คนดี-66-รอบ-1', function () {
    session()->flash('page-title', 'คนดีฯ รอบ 1');
    $forms = App\Models\Form::query()
        ->withCount('responses')
        ->where('title', 'like', '%คนดี%66%รอบ%1')
        ->where('title', 'not like', '%template%')
        ->get()
        ->transform(fn ($f) => [
            'title' => $f->title,
            'url' => route('forms.show', $f->hashed_key),
            'responses' => $f->responses_count,
        ]);

    return Inertia\Inertia::render('AllForms', [
        'forms' => $forms,
    ]);
});
