<?php

use App\Models\Form;
use App\Models\ParticipantList;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id();
            // type of form => questionnaire (Survey, vote, poll, lucky draw), Service Request, Quiz, CRF, etc.
            $table->unsignedTinyInteger('type')->default(1); //->index();
            $table->boolean('open')->default(false);
            $table->foreignIdFor(ParticipantList::class)->nullable()->constrained();
            $table->string('title', 1024)->default('untitled'); // ->fullText()
            $table->jsonb('config')->default('{}');
            $table->jsonb('questions');
            $table->unsignedTinyInteger('status')->default(1); //->index();
            $table->dateTime('start_at')->nullable();
            $table->dateTime('end_at')->nullable();
            $table->foreignId('creator_id')->constrained('users');
            $table->timestamps();
        });

        // create from-user pivot table
        Schema::create('form_user', function (Blueprint $table) {
            $table->foreignIdFor(Form::class)->constrained();
            $table->foreignIdFor(User::class)->constrained();
            $table->primary(['form_id', 'user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('form_user');
        Schema::dropIfExists('forms');
    }
};
