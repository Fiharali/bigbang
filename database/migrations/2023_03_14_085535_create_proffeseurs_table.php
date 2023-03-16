<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proffeseurs', function (Blueprint $table) {
            $table->id();
            $table->string('UnivercityName');
            $table->string('EtablisementName');
            $table->string('Laboratoire');
            $table->foreignId('reserech_id')->constrained('reserchers')->onDelete('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proffeseurs');
    }
};
