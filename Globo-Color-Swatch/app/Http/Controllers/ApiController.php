<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shop;
use App\Option;
use App\OptionItem;

class ApiController extends Controller
{
    public function getOptions(){
        $shop = Shop::getCurrentShop();
        $options = $shop->options;
        $list_options = [];
        foreach($options as $key => $option){
            $list_options[$key] = $option->index();
        }
        return response()->json(['option' => $list_options]);
    }
}
