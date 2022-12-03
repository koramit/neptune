<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('participant_lists', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('unnamed');
            $table->jsonb('participants')->default('[]');
            $table->foreignId('creator_id')->constrained('users');
            $table->boolean('shared')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('participant_lists');
    }
};
