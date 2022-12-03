<?php

use App\Models\Division;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('divisions', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->string('name', 128)->unique();
            $table->string('department', 128)->index();
            $table->boolean('active')->default(true);
            $table->timestamps();
        });

        Division::query()->create([
            'name' => 'องค์กร',
            'department' => 'องค์กร',
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('divisions');
    }
};
