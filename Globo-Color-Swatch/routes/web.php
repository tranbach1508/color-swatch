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
Route::any('authorize', 'AuthController@index');
Route::prefix('admin')->group(function () {
    Route::any('/{path?}', 'AdminController@index');
});
Route::prefix('api')->group(function(){
    Route::get('/options','ApiController@getOptions');
});
