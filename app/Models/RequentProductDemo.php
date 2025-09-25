<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequentProductDemo extends Model
{
    protected $fillable = [
        'package_name',
        'product_name',
        'product_price',
        'name',
        'email',
        'phone',
        'message',
        'status',
    ];
}
