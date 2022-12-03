<?php

use App\Models\Form;
use App\Models\FormResponse;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_responses', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Form::class)->constrained();
            $table->foreignIdFor(User::class)->constrained();
            $table->foreignIdFor(FormResponse::class)->nullable()->constrained();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_responses');
    }
};
