<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Phd extends Model
{
    use HasFactory;

    public function resercher(): BelongsTo
    {
        return $this->belongsTo(Resercher::class,'reserech_id');
    }


    protected $fillable = [
        'UnivercityName',
        'EtablisementName',
        'Filere',
        'reserech_id',
    ];
}
