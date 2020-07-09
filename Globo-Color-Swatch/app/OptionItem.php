<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Option;

class OptionItem extends Model
{
    protected $table = 'option_items';
    protected $fillable = [
        'id',
        'option_id',
        'value',
        'product_id',
        'select_type',
        'custom',
        'created_at',
        'updated_at',
    ];

    public function option()
    {
        return $this->belongsTo('App\Option');
    }
}
