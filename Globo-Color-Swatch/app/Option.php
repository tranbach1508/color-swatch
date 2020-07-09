<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\OptionItem;
use App\Shop;
class Option extends Model
{
    protected $table = 'options';
    protected $fillable = [
        'id',
        'shop_id',
        'name',
        'display_style',
        'settings',
        'order',
        'created_at',
        'updated_at',
    ];

    public function shop()
    {
        return $this->belongsTo('App\Shop');
    }

    public function option_items()
    {
    	return $this->hasMany('App\OptionItem');
    }

    public function index()
    {
        $option_items = OptionItem::groupBy('option_id')->selectRaw('count(*) as products,option_id')->whereOption_id($this->id)->first();
        $items = OptionItem::select('product_id')->whereOption_id($this->id)->get();
        $products = [];
        foreach($items as $key => $item){
            $products[$key] = $item->product_id;
        }
        $option = [
            'id' => $this->id,
            'name' => $this->name,
            'shop_id' => $this->shop_id,
            'option_items' => $this->option_items,
            'display_style' => $this->display_style,
            'settings' => json_decode($this->settings),
            'products' => $products,
            'products_count' => $option_items->products,
        ];
        return $option;
    }
}
