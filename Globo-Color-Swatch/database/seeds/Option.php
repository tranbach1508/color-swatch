<?php

use Illuminate\Database\Seeder;

class Option extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('options')->insert([
            [
                'id'=>1,
                'shop_id'=>1,
                'name'=>'size',
                'display_style'=>1,
                'settings'=>'{"status" : true,"type":"button","swatch_shape":"crcle","swatch_size":"small","border_color":{"normal": "#000","hover":"#000","selected":"#fff"},"border_style":"none","hover_effects":{"background":"not effect","zoom_image":"no zoom","size_change":"no change"}},{"button_shape":"crcle","button_size":"small","border_color":{"normal": "#000","hover":"#000","selected":"#fff"},"text_style":"Default","text_color":{"normal": "#000","hover":"#000","selected":"#fff"},"backgound_color":{"normal": "#000","hover":"#000","selected":"#fff"},"hover_effects":{"background":"not effect",}}'
            ],
            [
                'id'=>2,
                'shop_id'=>1,
                'name'=>'color',
                'display_style'=>1,
                'settings'=>'{ "status" : false,"type":"swatch","button_shape":"crcle", "button_size":"small", "border_color":{ "normal": "#000", "hover":"#000", "selected":"#fff" }, "text_style":"Default", "text_color":{ "normal": "#000", "hover":"#000", "selected":"#fff" }, "backgound_color":{ "normal": "#000", "hover":"#000", "selected":"#fff" }, "hover_effects":{ "background":"not effect", } }'
            ],

            // {
			//  "status" : true,
			//  "type": "swatch",
			// 	"swatch_shape":"crcle",
			// 	"swatch_size":"small",
			// 	"border_color":{
			// 		"normal": "#000",
			// 		"hover":"#000",
			// 		"selected":"#fff"
			// 	},
			// 	"border_style":"none",
			// 	"hover_effects":{
			// 		"background":"not effect",
			// 		"zoom_image":"no zoom",
			// 		"size_change":"no change"
			// 	}
            // },
            // {
			// 	"button_shape":"crcle",
			// 	"button_size":"small",
			// 	"border_color":{
			// 		"normal": "#000",
			// 		"hover":"#000",
			// 		"selected":"#fff"
			// 	},
			// 	"text_style":"Default",
			// 	"text_color":{
			// 		"normal": "#000",
			// 		"hover":"#000",
			// 		"selected":"#fff"
			// 	},
			// 	"backgound_color":{
			// 		"normal": "#000",
			// 		"hover":"#000",
			// 		"selected":"#fff"
			// 	},
			// 	"hover_effects":{
			// 		"background":"not effect",
			// 	}
			// }
        ]);
    }
}
