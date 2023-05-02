<?php

namespace App\Models;

use App\Traits\PKHashable;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Form extends Model
{
    use HasFactory, PKHashable;

    protected $casts = [
        'config' => AsArrayObject::class,
        'questions' => AsCollection::class,
    ];

    public function responses(): HasMany
    {
        return $this->hasMany(FormResponse::class);
    }

    public function invitedParticipants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'form_user', 'form_id', 'user_id');
    }

    public function transformedQuestions(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->questions->map(function ($q) {
                    $props = match ($q['type']) {
                        'FormSelect', 'FormRadioGroupCard', 'FormAutocomplete' => [
                            'name' => $q['title'],
                            'label' => $q['title'],
                            'options' => $q['choices'],
                        ],
                    };
                    return [
                        'type' => $q['type'],
                        'title' => $q['title'],
                        'props' => $props,
                    ];
                });
            }
        );
    }
}
