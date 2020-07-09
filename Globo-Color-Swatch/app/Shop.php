<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Session;

class Shop extends Model
{
    protected $table = 'shops';
    protected $fillable = [
        'id',
        'url',
        'token',
        'admin_email',
        'theme_selected',
        'settings',
    ];

    public static function getCurrentShop()
    {
        return Shop::whereUrl(Session::get(config('constants.SESSION_PREFIX') . '_shop'))->whereToken(Session::get(config('constants.SESSION_PREFIX') . '_token'))->first();
    }

    public function getShopifyApi()
    {
        return \PHPShopify\ShopifySDK::config(['ShopUrl' => $this->url, 'AccessToken' => $this->token]);
    }

    public function settings()
    {
        $settings = $this->settings;
        return reponse()->json(json_decode($settings));
    }

    public function options()
    {
        return $this->hasMany('App\Option');
    }
}
