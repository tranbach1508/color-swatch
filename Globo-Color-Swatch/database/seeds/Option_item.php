<?php

use Illuminate\Database\Seeder;

class Option_item extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('option_items')->insert([
            [
                'id'=>1,
                'option_id'=>1,
                'value'=>'L',
                'select_type'=>1,
                'custom'=>'{ "color_1":"#fff", "color_2":"#000", "file_upload":"image.png" , "image_url":"http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" }'
            ],
            [
                'id'=>2,
                'option_id'=>1,
                'value'=>'XL',
                'select_type'=>2,
                'custom'=>'{ "color_1":"#fff", "color_2":"#000", "file_upload":"image.png" , "image_url":"http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" }'
            ],
            [
                'id'=>3,
                'option_id'=>2,
                'value'=>'Red',
                'select_type'=>3,
                'custom'=>'{ "color_1":"#fff", "color_2":"#000", "file_upload":"image.png" , "image_url":"http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" }'
            ],
            [
                'id'=>4,
                'option_id'=>2,
                'value'=>'Blue',
                'select_type'=>4,
                'custom'=>'{ "color_1":"#fff", "color_2":"#000", "file_upload":"image.png" , "image_url":"http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" }'
            ],
        ]);
        
    }
}
