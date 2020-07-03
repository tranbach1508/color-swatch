<?php

namespace App\Http\Controllers;
use App;
use App\Shops;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function index(Request $request)
  {
      $shop_url = (string)$request->input('shop');
      $config = array(
        'ShopUrl' => $shop_url,
        'ApiKey' => config('constants.SHOPIFY_API_KEY'),
        'SharedSecret' => config('constants.SHOPIFY_SECRET'),
    );
    $shopify = \PHPShopify\ShopifySDK::config($config);

      if ($request->has('superadmin')) {
        $shop = Shops::where('url', $shop_url)->first();
        $request->session()->put(config('constants.SESSION_PREFIX').'_shop',  $shop_url);
        $request->session()->put(config('constants.SESSION_PREFIX').'_token', $shop_token);
        return redirect('admin/index');
      }

      if ($request->has('code')){
        $shop_url = (string)$request->get('shop');

        $shop_token = \PHPShopify\AuthHelper::getAccessToken();

        if ( Shops::where('url', $shop_url)->count() ) {
            $shop = Shops::where('url', $shop_url)->first();
            $shop->update(['token' => $shop_token]);
        }else {
            $shop = Shops::create([
                'url'                       => $shop_url,
                'token'                     => $shop_token,
                'settings'                  => json_encode(config('constants.SETTINGS')),
            ]);
            $products = $shopify->Product->get();
            $option_values = [];
            foreach ($products as $product) {
                foreach ($product["options"] as $option) {
                    foreach($option['values'] as $key => $value){
                        $option_values[$option['id']+$key] = [
                            "value" => $value,
                            "option" => $option['name'],
                            "product_id" => $product['id']
                        ];
                    }
                }
            }
            foreach($option_values as $value){

            }
        }

        $request->session()->put(config('constants.SESSION_PREFIX').'_shop',  $shop_url);
        $request->session()->put(config('constants.SESSION_PREFIX').'_token', $shop_token);

        return redirect('admin/index');
          
      }elseif($request->has('shop')){
          preg_match('/^[a-zA-Z0-9\-]+.myshopify.com$/', $shop_url) or die('Invalid myshopify.com store URL.');
          $installURL = \PHPShopify\AuthHelper::createAuthRequest(config('constants.SHOPIFY_SCOPE'), url('authorize'), null, null, true);
          die("<script>top.location.href='$installURL'</script>");
          exit;
      }else{
          return view('admin.login');
      }
  }
}