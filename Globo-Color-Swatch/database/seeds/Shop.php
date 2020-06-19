<?php

use Illuminate\Database\Seeder;

class Shop extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shops')->insert([
            [
                'id'=>1,
                'url'=>'globoliquid.myshopify.com',
                'admin_email'=>'contact@globosoftware.net',
                'token'=>'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',
                'theme_selected'=>'81486217319',
                'settings' =>'{ "enable":true, "enable_collection_page":true, "product_page": { "customize_swatch": { "swatch_shape": "crcle", "swatch_size":"small", "border_style":"none", "border_color": { "normal": "#000", "hover":"#000", "selected":"#fff" }, "hover_effects": { "background":"not effect", "zoom_image":"no zoom", "size_change":"no change", } }, "customize_button": { "button_shape": "crcle", "button_size":"small" , "border_color": { "normal": "#000", "hover":"#000", "selected":"#fff" }, "text_style": "Default", "text_color": { "normal": "#000", "hover":"#000", "selected":"#fff" }, "backgound_color": { "normal": "#000", "hover":"#000", "selected":"#fff" }, "hover_effects": { "background":"not effect", } }, }, "collection_page": { "options": ["Color", "Size"], "customize_swatch": { "swatch_shape":"crcle", "swatch_size":"small", "border_color": { "normal": "#000", "hover":"#000", "selected":"#fff" }, "border_style": "none" , "hover_effects": { "background":"not effect", "zoom_image":"no zoom", "size_change": "no change" } }, "customize_button": { "button_shape": "crcle", "button_size":"small", "border_color": { "normal": "#000", "hover":"#000", "selected":"#fff" }, "text_style": "Default", "text_color": { "normal": "#000", "hover":"#000", "selected":"#fff" }, "backgound_color": { "normal": "#000", "hover":"#000", "selected":"#fff" }, "hover_effects": { "background":"not effect" } } }, "out_of_stock" : { "hide": false, "opacity": 0.5, "cross-out": true, "grey-out": true } }'
            ],
            
            ]);
            

            // {
            //         enable:true,
            //         enable_collection_page:true,
            //         product_page:
            //         {
            //             customize_swatch:
            //             {
            //                 swatch_shape: "crcle",   
            //                 swatch_size:"small", 
            //                 border_style:"none", 
            //                 border_color:
            //                 {
            //                     normal: "#000",
            //                     hover:"#000",
            //                     selected:"#fff"
            //                 },
            //                 hover_effects:
            //                 {
            //                     background:"not effect",  
            //                     zoom_image:"no zoom",  
            //                     size_change:"no change", 
            //                 }
            //             },
            //             customize_button:
            //             {
            //                 button_shape: "crcle", 
            //                 button_size:"small" , 
            //                 border_color:
            //                 {
            //                     normal: "#000",
            //                     hover:"#000",
            //                     selected:"#fff"
            //                 },
            //                 text_style: "Default",
            //                 text_color:
            //                 {
            //                     normal: "#000",
            //                     hover:"#000",
            //                     selected:"#fff"
            //                 },
            //                 backgound_color:
            //                 {
            //                     normal: "#000",
            //                     hover:"#000",
            //                     selected:"#fff"
            //                 },
            //                 hover_effects:
            //                 {
            //                     background:"not effect", 
            //                 }
            //             },
            //         },
            //         collection_page:
            //         {
            //             options: ["Color", "Size"],
            //             customize_swatch:
            //             {
            //                 swatch_shape:"crcle", 
            //                 swatch_size:"small", 
            //                 border_color:
            //                 {
            //                     normal: #000
            //                     hover:"#000"
            //                     selected:"#fff"
            //                 },
            //                 border_style: "none" ,
            //                 hover_effects:
            //                 {
            //                     background:"not effect", 
            //                     zoom_image:"no zoom",
            //                     size_change: "no change", 
            //                 }
            //             },
            //             customize_button:{
            //                 button_shape: "crcle",
            //                 button_size:"small", 
            //                 border_color:
            //                 {
            //                     normal: "#000",
            //                     hover:"#000",
            //                     selected:"#fff"
            //                 },
            //                 text_style: "Default",
            //                 text_color:
            //                 {
            //                     normal: "#000",
            //                     hover:"#000",
            //                     selected:"#fff"
            //                 },
            //                 backgound_color:
            //                 {
            //                     normal: "#000",
            //                     hover:"#000",
            //                     selected:"#fff"
            //                 },
            //                 hover_effects:
            //                 {
            //                     background:"not effect", 
            //                 }
            //             },
            //         }
            //         out_of_stock :{
            //             hide: false,
            //             opacity: 0.5,
            //             cross-out: true | false,
            //             grey-out: true | false,
            //         }
            //     }

            

    }
}
