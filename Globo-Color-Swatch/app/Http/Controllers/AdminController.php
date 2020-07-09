<?php

namespace App\Http\Controllers;

use App\Shop;
use App\Option;
use App\OptionItem;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $shop = Shop::getCurrentShop();
        $shopify = $shop->getShopifyApi();
        $products = $shopify->Product->get();
        $option_values = [];
        foreach ($products as $product) {
            foreach ($product["options"] as $option) {
                foreach ($option['values'] as $key => $value) {
                    $option_values[$option['id'] + $key] = [
                        "value" => $value,
                        "option" => $option['name'],
                        "product_id" => $product['id'],
                    ];
                }
            }
        }
        $order = 1;
        foreach ($option_values as $key => $value) {
            $option_exist = Option::whereName($value['option'])->whereShop_id($shop->id)->first();
            if ($option_exist != null) {
                $option_item_exist = OptionItem::whereOption_id($option_exist->id)->whereValue($value['value'])->whereProduct_id($value['product_id'])->first();
                if ($option_item_exist == null) {
                    $option_item = OptionItem::create([
                        'option_id' => $option_exist->id,
                        'value' => $value['value'],
                        'select_type' => 1,
                        'product_id' => $value['product_id'],
                    ]);
                }
            } else {
                if($order ==1){
                    $option = Option::create([
                        'shop_id' => $shop->id,
                        'name' => $value['option'],
                        'display_style' => 1,
                        'settings' => json_encode(config('constants.SETTINGS_OPTION')),
                        'order' => $order
                    ]);
                }else{
                    $order_max = Option::max('order');
                    $option = Option::create([
                        'shop_id' => $shop->id,
                        'name' => $value['option'],
                        'display_style' => 1,
                        'settings' => json_encode(config('constants.SETTINGS_OPTION')),
                        'order' => $order_max +1
                    ]);
                }
                $option_item = OptionItem::create([
                    'option_id' => $option->id,
                    'value' => $value['value'],
                    'select_type' => 1,
                    'product_id' => $value['product_id'],
                ]);
                $order += 1;
            }
        }
        return view('settings');
    }

}
