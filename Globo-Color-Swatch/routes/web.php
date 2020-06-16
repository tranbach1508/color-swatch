<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('settings');
});
Route::get('/integrate', function () {
    return view('settings');
});
Route::get('/custom', function () {
    return view('settings');
});
// Route::prefix('api')->group(function () {
//     Route::get('rules',    'GetApiController@getCondition');
//     Route::get('getform',    'GetApiController@getForm');
//     Route::post('submitform',    'GetApiController@submitQuoteApi');
// });
