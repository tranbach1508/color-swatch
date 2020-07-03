<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use App\Shops;
class AdminController extends Controller
{
    public function index(Request $request){
        $shop = Shops::getCurrentShop();
        $shopify = $shop->getShopifyApi();
        $products = $shopify->Product->get();
        $option_values = [];
        foreach ($products as $product) {
            foreach ($product["options"] as $option) {
                foreach($option['values'] as $key => $value){
                    $option_values[$option['id']+$key] = [
                        "value" => $value,
                        "option" => $option["name"]
                    ];
                }
            }
        }
        return view('settings');
    }

}
