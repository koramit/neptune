<?php

namespace App\Models;

use App\Traits\PKHashable;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory, PKHashable;

    protected $casts = [
        'config' => AsArrayObject::class,
        'questions' => AsArrayObject::class,
    ];

    // form has many responses
    public function responses()
    {
        return $this->hasMany(Response::class);
    }
}
