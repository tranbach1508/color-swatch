<?php

namespace App\Http\Controllers;

use App;
use App\Shop;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function index(Request $request)
    {
        $shop_url = (string) $request->input('shop');
        $config = array(
            'ShopUrl' => $shop_url,
            'ApiKey' => config('constants.SHOPIFY_API_KEY'),
            'SharedSecret' => config('constants.SHOPIFY_SECRET'),
        );
        $shopify = \PHPShopify\ShopifySDK::config($config);

        if ($request->has('superadmin')) {
            $shop = Shop::where('url', $shop_url)->first();
            $request->session()->put(config('constants.SESSION_PREFIX') . '_shop', $shop_url);
            $request->session()->put(config('constants.SESSION_PREFIX') . '_token', $shop_token);
            return redirect('admin/index');
        }

        if ($request->has('code')) {
            $shop_url = (string) $request->get('shop');
            $shop_token = \PHPShopify\AuthHelper::getAccessToken();

            if (Shop::where('url', $shop_url)->count()) {
                $shop = Shop::where('url', $shop_url)->first();
                $shop->update(['token' => $shop_token]);
            } else {
                $shop = Shop::create([
                    'url' => $shop_url,
                    'token' => $shop_token,
                    'settings' => json_encode(config('constants.SETTINGS')),
                ]);
            }

            $request->session()->put(config('constants.SESSION_PREFIX') . '_shop', $shop_url);
            $request->session()->put(config('constants.SESSION_PREFIX') . '_token', $shop_token);

            return redirect('admin/index');

        } elseif ($request->has('shop')) {
            preg_match('/^[a-zA-Z0-9\-]+.myshopify.com$/', $shop_url) or die('Invalid myshopify.com store URL.');
            $installURL = \PHPShopify\AuthHelper::createAuthRequest(config('constants.SHOPIFY_SCOPE'), url('authorize'), null, null, true);
            die("<script>top.location.href='$installURL'</script>");
            exit;
        } else {
            return view('admin.login');
        }
    }
}

