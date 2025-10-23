<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductPricePlan extends Model
{
    protected $fillable = [
        'name',
        'price',
        'period',
        'product',
        'popular',
        'features',
    ];

    protected $casts = [
        'features' => 'array',
    ];
}
