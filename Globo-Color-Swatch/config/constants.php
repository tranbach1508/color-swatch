<?php 
return [
    'SHOPIFY_API_KEY' => '1658d4f64861547011c0885b4af56c2a',
    'SHOPIFY_SECRET' => '4f7b53441bcd3266a5527b152e59d844',
    'SESSION_PREFIX' => 'globo_swatchs',
    'SHOPIFY_SCOPE' => 'read_themes,write_themes,read_products,write_products,read_script_tags,write_script_tags',
    'SETTINGS' => '
        {
            enable:true,
            enable_collection_page:true,
            product_page:
            {
                customize_swatch:
                {
                    swatch_shape: "crcle",   
                    swatch_size:"small", 
                    border_style:"none", 
                    border_color:
                    {
                        normal: "#000",
                        hover:"#000",
                        selected:"#fff"
                    },
                    swatch_border_style:"double",
                    hover_effects:
                    {
                        background:"not effect",  
                        zoom_image:"no zoom",  
                        size_change:"no change", 
                    }
                },
                customize_button:
                {
                    button_corner: "sharp", 
                    button_size:"small", 
                    border_color:
                    {
                        normal: "#000",
                        hover:"#000",
                        selected:"#fff"
                    },
                    text_style: "default",
                    text_color:
                    {
                        normal: "#000",
                        hover:"#000",
                        selected:"#fff"
                    },
                    backgound_color:
                    {
                        normal: "#000",
                        hover:"#000",
                        selected:"#fff"
                    },
                    hover_effects:
                    {
                        background:"not effect", 
                    }
                },
            },
            collection_page:
            {
                customize_swatch:
                {
                    customize_swatch:
                {
                    swatch_shape: "crcle",   
                    swatch_size:"small", 
                    border_style:"none", 
                    border_color:
                    {
                        normal: "#000",
                        hover:"#000",
                        selected:"#fff"
                    },
                    swatch_border_style:"double",
                    hover_effects:
                    {
                        background:"not effect",  
                        zoom_image:"no zoom",  
                        size_change:"no change", 
                    }
                },
                },
                customize_button:{
                    button_corner: "sharp", 
                    button_size:"small", 
                    border_color:
                    {
                        normal: "#000",
                        hover:"#000",
                        selected:"#fff"
                    },
                    text_style: "default",
                    text_color:
                    {
                        normal: "#000",
                        hover:"#000",
                        selected:"#fff"
                    },
                    backgound_color:
                    {
                        normal: "#000",
                        hover:"#000",
                        selected:"#fff"
                    },
                    hover_effects:
                    {
                        background:"not effect", 
                    }
                },
            }
            out_of_stock : "1"
        }
        '
]
?>
