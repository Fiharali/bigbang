<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Resercher extends Model
{
    use HasFactory;

    public function baccs(): HasMany
    {
        return $this->hasMany(Bacc::class, 'reserech_id');
    }
    public function masters(): HasMany
    {
        return $this->hasMany(Master::class, 'reserech_id');
    }

    public function licenses(): HasMany
    {
        return $this->hasMany(License::class, 'reserech_id');
    }

    public function phds(): HasMany
    {
        return $this->hasMany(Phd::class, 'reserech_id');
    }

    public function phdsProjects(): HasMany
    {
        return $this->hasMany(Phdproject::class, 'reserech_id');
    }

    public function proffeseurs(): HasMany
    {
        return $this->hasMany(Proffeseur::class, 'reserech_id');
    }

    public function proffissionnels(): HasMany
    {
        return $this->hasMany(Proffessionnel::class, 'reserech_id');
    }



    protected $fillable = [
        'UserName',
        'Email',
        'Number',
        'Password',

    ];
}
