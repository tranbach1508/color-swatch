import React, { Component } from 'react';
import { Page, Card, FormLayout, Checkbox, Heading, TextField, Layout, Label } from '@shopify/polaris';
import { useCallback, useRef, useState } from 'react';
import ColorPickers from './ColorPickers';

export default function CustomProductPage() {
    const [displayColorPicker, setDisplayColorPicker] = useState({
        swatch_border_color_nomal: false,
        swatch_border_color_hover: false,
        swatch_border_color_selected: false,
        button_border_color_nomal: false,
        button_border_color_hover: false,
        button_border_color_selected: false,
        text_color_nomal: false,
        text_color_hover: false,
        text_color_selected: false,
        background_color_nomal: false,
        background_color_hover: false,
        background_color_selected: false,
    });
    const [checkboxValue, setCheckboxValue] = useState({
        swatch_shape: 'square',
        swatch_size: 'medium',
        swatch_border_style: 'double',
        swatch_background_effect: 'add shadow',
        swatch_zoom_image: 'no zoom',
        swatch_size_change: 'no change',
        button_corner: 'sharp',
        button_size: 'medium',
        text_style: 'default',
        button_background_effect: 'add shadow',
    });
    const [colorPickerValue, setColorPickerValue] = useState({
        swatch_border_color_nomal: {
            hex: "#000",
        },
        swatch_border_color_hover: {
            hex: "#000",
        },
        swatch_border_color_selected: {
            hex: "#000",
        },
        button_border_color_nomal: {
            hex: "#000",
        },
        button_border_color_hover: {
            hex: "#000",
        },
        button_border_color_selected: {
            hex: "#000",
        },
        text_color_nomal: {
            hex: "#000",
        },
        text_color_hover: {
            hex: "#000",
        },
        text_color_selected: {
            hex: "#000",
        },
        background_color_nomal: {
            hex: "#fff",
        },
        background_color_hover: {
            hex: "#000",
        },
        background_color_selected: {
            hex: "#000",
        },
    })
    const [optionColorHover, setOptionColorHover] = useState(0);
    const [optionSizeHover, setOptionSizeHover] = useState(0);
    const [optionColorSelected, setOptionColorSelected] = useState(0);
    const [optionSizeSelected, setOptionSizeSelected] = useState(0);
    const changeCheckboxValue = useCallback((field, value) => setCheckboxValue({
        ...checkboxValue,
        [field]: value
    }))

    const openColorPicker = useCallback((field) => {
        console.log("open");
        setDisplayColorPicker({
            ...displayColorPicker,
            [field]: !displayColorPicker[field]
        })
    })

    const closeColorPicker = useCallback((field) => {
        console.log("close");
        setDisplayColorPicker({
            ...displayColorPicker,
            [field]: !displayColorPicker[field]
        })
    })

    const changeColorPickerValue = (field, value) => {
        setColorPickerValue({
            ...colorPickerValue,
            [field]: value
        })
    }

    const setBorderOptionColorPreview = (image, ele) => {
        if (checkboxValue.swatch_border_style == "single") {
            if (optionColorHover != image && optionColorSelected != image && ele != "image") {
                return ({
                    borderColor: colorPickerValue.swatch_border_color_nomal.hex
                })
            } else if (optionColorHover == image && ele != "image") {
                return ({
                    borderColor: colorPickerValue.swatch_border_color_hover.hex
                })
            } else if (optionColorSelected == image && ele != "image") {
                return ({
                    borderColor: colorPickerValue.swatch_border_color_selected.hex
                })
            }
            if (ele == "image") {
                return ({
                    backgroundImage: 'url(http://localhost:88/Globo-Color-Swatch/public/images/variant' + image + '.jpg)',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                })
            }
        } else if (checkboxValue.swatch_border_style == "double") {
            if (ele != "image") {
                if (optionColorHover != image && optionColorSelected != image) {
                    return ({
                        borderColor: colorPickerValue.swatch_border_color_nomal.hex
                    })
                } else if (optionColorHover == image) {
                    return ({
                        borderColor: colorPickerValue.swatch_border_color_hover.hex
                    })
                } else if (optionColorSelected == image) {
                    return ({
                        borderColor: colorPickerValue.swatch_border_color_selected.hex
                    })
                }
            } else {
                return ({
                    borderColor: '#d2c7ba',
                    backgroundImage: 'url(http://localhost:88/Globo-Color-Swatch/public/images/variant' + image + '.jpg)',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                })
            }
        } else {
            if (ele == "image") {
                return ({
                    backgroundImage: 'url(http://localhost:88/Globo-Color-Swatch/public/images/variant' + image + '.jpg)',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                })
            }
        }
    }
    const setBorderOptionSizePreview = (button, ele) => {
        if (button == optionSizeHover) {
            if (button != optionSizeSelected) {
                if (ele == "button") {
                    return ({
                        borderColor: colorPickerValue.button_border_color_hover.hex,
                        textTransform: checkboxValue.text_style,
                        backgroundColor: colorPickerValue.background_color_hover.hex
                    })
                } else {
                    return ({
                        color: colorPickerValue.text_color_hover.hex,
                    })
                }
            } else {
                if (ele == "button") {
                    return ({
                        borderColor: colorPickerValue.button_border_color_selected.hex,
                        textTransform: checkboxValue.text_style,
                        backgroundColor: colorPickerValue.background_color_selected.hex
                    })
                } else {
                    return ({
                        color: colorPickerValue.text_color_selected.hex,
                    })
                }
            }
        } else if (button == optionSizeSelected) {
            if (ele == "button") {
                return ({
                    borderColor: colorPickerValue.button_border_color_selected.hex,
                    textTransform: checkboxValue.text_style,
                    backgroundColor: colorPickerValue.background_color_selected.hex
                })
            } else {
                return ({
                    color: colorPickerValue.text_color_selected.hex,
                })
            }
        } else {
            if (ele == "button") {
                return ({
                    borderColor: colorPickerValue.button_border_color_nomal.hex,
                    textTransform: checkboxValue.text_style,
                    backgroundColor: colorPickerValue.background_color_nomal.hex
                })
            } else {
                return ({
                    color: colorPickerValue.text_color_nomal.hex,
                })
            }
        }

    }
    if (checkboxValue.swatch_background_effect == "add glow") {
        var swatch_background_effect = "add_glow";
    } else if (checkboxValue.swatch_background_effect == "add shadow") {
        var swatch_background_effect = "add_shadow";
    } else {
        var swatch_background_effect = "";
    }
    if (checkboxValue.swatch_zoom_image == "zoom") {
        var swatch_zoom_image = "zoom";
    } else {
        var swatch_zoom_image = "";
    }
    if (checkboxValue.swatch_size_change == "reduce size") {
        var swatch_size_change = "reduce_size";
    } else if (checkboxValue.swatch_size_change == "increase size") {
        var swatch_size_change = "increase_size";
    } else {
        var swatch_size_change = "";
    }
    if (checkboxValue.button_background_effect == "add glow") {
        var button_background_effect = "add_glow";
    } else if (checkboxValue.button_background_effect == "add shadow") {
        var button_background_effect = "add_shadow";
    } else {
        var button_background_effect = "";
    }
    const classSwatch = checkboxValue.swatch_border_style + " " + swatch_zoom_image + " " + " image_variant_preview";
    const classButton = "button_" + checkboxValue.button_size + " " + checkboxValue.text_style + " " + button_background_effect + " " + checkboxValue.button_corner;
    return (
        <div className="flex product_page">
            <div className="width-25 swatch_custom height-100 scroll-y">
                <Card>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch shape</Heading>
                            <div className="flex_wrap swatch_shape">
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Circle"
                                            checked={checkboxValue.swatch_shape == 'circle' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_shape', 'circle')}
                                        />
                                    </div>

                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Square"
                                            checked={checkboxValue.swatch_shape == 'square' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_shape', 'square')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch size</Heading>
                            <div className="flex_wrap swatch_size">
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Small"
                                            checked={checkboxValue.swatch_size == 'small' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_size', 'small')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Medium"
                                            checked={checkboxValue.swatch_size == 'medium' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_size', 'medium')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Large"
                                            checked={checkboxValue.swatch_size == 'large' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_size', 'large')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch border style</Heading>
                            <div className="flex_wrap border_style">
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="None"
                                            checked={checkboxValue.swatch_border_style == 'none' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_border_style', 'none')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Single"
                                            checked={checkboxValue.swatch_border_style == 'single' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_border_style', 'single')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Double"
                                            checked={checkboxValue.swatch_border_style == 'double' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_border_style', 'double')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch border color</Heading>
                            <div className="flex_wrap pickcolor relative">
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("swatch_border_color_nomal")} style={{ backgroundColor: colorPickerValue.swatch_border_color_nomal.hex }}></div>
                                    {displayColorPicker.swatch_border_color_nomal ? <ColorPickers closeColorPicker={() => closeColorPicker("swatch_border_color_nomal")} field={"swatch_border_color_nomal"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.swatch_border_color_nomal} value={colorPickerValue.swatch_border_color_nomal.hex}></ColorPickers> : ''}
                                </div>
                                <div className="width-30">
                                    <label>Hover</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("swatch_border_color_hover")} style={{ backgroundColor: colorPickerValue.swatch_border_color_hover.hex }}></div>
                                    {displayColorPicker.swatch_border_color_hover ? <ColorPickers closeColorPicker={() => closeColorPicker("swatch_border_color_hover")} field={"swatch_border_color_hover"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.swatch_border_color_hover} value={colorPickerValue.swatch_border_color_hover.hex}></ColorPickers> : ''}
                                </div>
                                <div className="width-30">
                                    <label>Selected</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("swatch_border_color_selected")} style={{ backgroundColor: colorPickerValue.swatch_border_color_selected.hex }}></div>
                                    {displayColorPicker.swatch_border_color_selected ? <ColorPickers closeColorPicker={() => closeColorPicker("swatch_border_color_selected")} field={"swatch_border_color_selected"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.swatch_border_color_selected} value={colorPickerValue.swatch_border_color_selected.hex}></ColorPickers> : ''}
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch hover effects</Heading>
                            <div className="background_effect flex_wrap">
                                <p className="mb-10 width-100">Background effect on hover</p>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="No effect"
                                            checked={checkboxValue.swatch_background_effect == 'no effect' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_background_effect', 'no effect')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Add glow"
                                            checked={checkboxValue.swatch_background_effect == 'add glow' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_background_effect', 'add glow')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Add shadow"
                                            checked={checkboxValue.swatch_background_effect == 'add shadow' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_background_effect', 'add shadow')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="zoom_image flex_wrap">
                                <p className="mb-10 width-100">Zoom image on hover</p>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="No zoom"
                                            checked={checkboxValue.swatch_zoom_image == 'no zoom' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_zoom_image', 'no zoom')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Zoom"
                                            checked={checkboxValue.swatch_zoom_image == 'zoom' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_zoom_image', 'zoom')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="size_change flex_wrap">
                                <p className="mb-10 width-100">Size change on hover (not applicable for swatches in slider):</p>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="No change"
                                            checked={checkboxValue.swatch_size_change == 'no change' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_size_change', 'no change')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Reduce zise"
                                            checked={checkboxValue.swatch_size_change == 'reduce size' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_size_change', 'reduce size')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Increase size"
                                            checked={checkboxValue.swatch_size_change == 'increase size' ? true : false}
                                            onChange={() => changeCheckboxValue('swatch_size_change', 'increase size')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                </Card>
                <Card>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button corner</Heading>
                            <div className="flex_wrap swatch_size">
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Sharp"
                                            checked={checkboxValue.button_corner == 'sharp' ? true : false}
                                            onChange={() => changeCheckboxValue('button_corner', 'sharp')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Rounded"
                                            checked={checkboxValue.button_corner == 'rounded' ? true : false}
                                            onChange={() => changeCheckboxValue('button_corner', 'rounded')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button size</Heading>
                            <div className="flex_wrap swatch_size">
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Small"
                                            checked={checkboxValue.button_size == 'small' ? true : false}
                                            onChange={() => changeCheckboxValue('button_size', 'small')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Medium"
                                            checked={checkboxValue.button_size == 'medium' ? true : false}
                                            onChange={() => changeCheckboxValue('button_size', 'medium')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Large"
                                            checked={checkboxValue.button_size == 'large' ? true : false}
                                            onChange={() => changeCheckboxValue('button_size', 'large')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button border color</Heading>
                            <div className="flex_wrap pickcolor relative">
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("button_border_color_nomal")} style={{ backgroundColor: colorPickerValue.button_border_color_nomal.hex }}></div>
                                    {displayColorPicker.button_border_color_nomal ? <ColorPickers closeColorPicker={() => closeColorPicker("button_border_color_nomal")} field={"button_border_color_nomal"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.button_border_color_nomal} value={colorPickerValue.button_border_color_nomal.hex}></ColorPickers> : ''}
                                </div>
                                <div className="width-30">
                                    <label>Hover</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("button_border_color_hover")} style={{ backgroundColor: colorPickerValue.button_border_color_hover.hex }}></div>
                                    {displayColorPicker.button_border_color_hover ? <ColorPickers closeColorPicker={() => closeColorPicker("button_border_color_hover")} field={"button_border_color_hover"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.button_border_color_hover} value={colorPickerValue.button_border_color_hover.hex}></ColorPickers> : ''}
                                </div>
                                <div className="width-30">
                                    <label>Selected</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("button_border_color_selected")} style={{ backgroundColor: colorPickerValue.button_border_color_selected.hex }}></div>
                                    {displayColorPicker.button_border_color_selected ? <ColorPickers closeColorPicker={() => closeColorPicker("button_border_color_selected")} field={"button_border_color_selected"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.button_border_color_selected} value={colorPickerValue.button_border_color_selected.hex}></ColorPickers> : ''}
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Text style</Heading>
                            <div className="flex_wrap border_style">
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Default"
                                            checked={checkboxValue.text_style == 'default' ? true : false}
                                            onChange={() => changeCheckboxValue('text_style', 'default')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Lowercase"
                                            checked={checkboxValue.text_style == 'lowercase' ? true : false}
                                            onChange={() => changeCheckboxValue('text_style', 'lowercase')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Uppercase"
                                            checked={checkboxValue.text_style == 'uppercase' ? true : false}
                                            onChange={() => changeCheckboxValue('text_style', 'uppercase')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Text color</Heading>
                            <div className="flex_wrap pickcolor relative">
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("text_color_nomal")} style={{ backgroundColor: colorPickerValue.text_color_nomal.hex }}></div>
                                    {displayColorPicker.text_color_nomal ? <ColorPickers closeColorPicker={() => closeColorPicker("text_color_nomal")} field={"text_color_nomal"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.text_color_nomal} value={colorPickerValue.text_color_nomal.hex}></ColorPickers> : ''}
                                </div>
                                <div className="width-30">
                                    <label>Hover</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("text_color_hover")} style={{ backgroundColor: colorPickerValue.text_color_hover.hex }}></div>
                                    {displayColorPicker.text_color_hover ? <ColorPickers closeColorPicker={() => closeColorPicker("text_color_hover")} field={"text_color_hover"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.text_color_hover} value={colorPickerValue.text_color_hover.hex}></ColorPickers> : ''}
                                </div>
                                <div className="width-30">
                                    <label>Selected</label>
                                    <div className="open_picker mt-5" onClick={() => openColorPicker("text_color_selected")} style={{ backgroundColor: colorPickerValue.text_color_selected.hex }}></div>
                                    {displayColorPicker.text_color_selected ? <ColorPickers closeColorPicker={() => closeColorPicker("text_color_selected")} field={"text_color_selected"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.text_color_selected} value={colorPickerValue.text_color_selected.hex}></ColorPickers> : ''}
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button background color</Heading>
                            <div className="flex_wrap pickcolor relative">
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div className="open_picker" onClick={() => openColorPicker("background_color_nomal")} style={{ backgroundColor: colorPickerValue.background_color_nomal.hex }}></div>
                                    {displayColorPicker.background_color_nomal ? <ColorPickers closeColorPicker={() => closeColorPicker("background_color_nomal")} field={"background_color_nomal"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.background_color_nomal} value={colorPickerValue.background_color_nomal.hex}></ColorPickers> : ''}
                                </div>
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div className="open_picker" onClick={() => openColorPicker("background_color_hover")} style={{ backgroundColor: colorPickerValue.background_color_hover.hex }}></div>
                                    {displayColorPicker.background_color_hover ? <ColorPickers closeColorPicker={() => closeColorPicker("background_color_hover")} field={"background_color_hover"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.background_color_hover} value={colorPickerValue.background_color_hover.hex}></ColorPickers> : ''}
                                </div>
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div className="open_picker" onClick={() => openColorPicker("background_color_selected")} style={{ backgroundColor: colorPickerValue.background_color_selected.hex }}></div>
                                    {displayColorPicker.background_color_selected ? <ColorPickers closeColorPicker={() => closeColorPicker("background_color_selected")} field={"background_color_selected"} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={displayColorPicker.background_color_selected} value={colorPickerValue.background_color_selected.hex}></ColorPickers> : ''}
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button hover effects</Heading>
                            <div className="background_effect flex_wrap">
                                <p className="mb-10 width-100">Background effect on hover</p>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="No effect"
                                            checked={checkboxValue.button_background_effect == 'no effect' ? true : false}
                                            onChange={() => changeCheckboxValue('button_background_effect', 'no effect')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Add glow"
                                            checked={checkboxValue.button_background_effect == 'add glow' ? true : false}
                                            onChange={() => changeCheckboxValue('button_background_effect', 'add glow')}
                                        />
                                    </div>
                                </div>
                                <div className="mr-25">
                                    <div>
                                        <Checkbox
                                            label="Add shadow"
                                            checked={checkboxValue.button_background_effect == 'add shadow' ? true : false}
                                            onChange={() => changeCheckboxValue('button_background_effect', 'add shadow')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                </Card>
            </div>
            <div className="width-75 swatch_preview">
                <Card title="Preview product page" sectioned>
                    <Layout>
                        <Layout.Section>
                            <Card>
                                <Card.Section>
                                    <p className="product_name mb-10">Shirt Woman Summer</p>
                                    <p className="product_price mb-10">€50,00</p>
                                    <div className="option_color">
                                        <Heading>Color</Heading>
                                        <ul className="flex pl-0 mt-10">
                                            <li className="mr-25">
                                                <div
                                                    className={checkboxValue.swatch_shape + " " + checkboxValue.swatch_border_style + " " + swatch_background_effect + " " + checkboxValue.swatch_size + " " + swatch_size_change}
                                                    style={setBorderOptionColorPreview(1, "div")}
                                                >
                                                    <div
                                                        className={classSwatch}
                                                        src="http://localhost:88/Globo-Color-Swatch/public/images/variant1.jpg"
                                                        style={setBorderOptionColorPreview(1, "image")}
                                                        onMouseEnter={() => { setOptionColorHover(1) }}
                                                        onMouseLeave={() => { setOptionColorHover(0) }}
                                                        onClick={() => setOptionColorSelected(1)}
                                                    ></div>
                                                </div>
                                            </li>
                                            <li className="mr-25">
                                                <div
                                                    className={checkboxValue.swatch_shape + " " + checkboxValue.swatch_border_style + " " + swatch_background_effect + " " + checkboxValue.swatch_size + " " + swatch_size_change}
                                                    style={setBorderOptionColorPreview(2, "div")}
                                                >
                                                    <div
                                                        className={classSwatch}
                                                        src="http://localhost:88/Globo-Color-Swatch/public/images/variant2.jpg"
                                                        style={setBorderOptionColorPreview(2, "image")}
                                                        onMouseEnter={() => { setOptionColorHover(2) }}
                                                        onMouseLeave={() => { setOptionColorHover(0) }}
                                                        onClick={() => setOptionColorSelected(2)}
                                                    ></div>
                                                </div>
                                            </li>
                                            <li className="mr-25">
                                                <div
                                                    className={checkboxValue.swatch_shape + " " + checkboxValue.swatch_border_style + " " + swatch_background_effect + " " + checkboxValue.swatch_size + " " + swatch_size_change}
                                                    style={setBorderOptionColorPreview(3, "div")}
                                                    onMouseEnter={() => { setOptionColorHover(3) }}
                                                    onMouseLeave={() => { setOptionColorHover(0) }}
                                                    onClick={() => setOptionColorSelected(3)}
                                                >
                                                    <div
                                                        className={classSwatch}
                                                        style={setBorderOptionColorPreview(3, "image")}
                                                    ></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="option_size">
                                        <Heading>Size</Heading>
                                        <ul className="flex pl-0 mt-10">
                                            <li className="mr-25">
                                                <button
                                                    className={classButton}
                                                    onMouseEnter={() => { setOptionSizeHover(1) }}
                                                    onMouseLeave={() => { setOptionSizeHover(0) }}
                                                    onClick={() => setOptionSizeSelected(1)}
                                                    style={setBorderOptionSizePreview(1, "button")}
                                                >
                                                    <span
                                                        style={setBorderOptionSizePreview(1, "span")}
                                                    >M</span>
                                                </button>
                                            </li>
                                            <li className="mr-25">
                                                <button
                                                    className={classButton}
                                                    onMouseEnter={() => { setOptionSizeHover(2) }}
                                                    onMouseLeave={() => { setOptionSizeHover(0) }}
                                                    onClick={() => setOptionSizeSelected(2)}
                                                    style={setBorderOptionSizePreview(2, "button")}
                                                >
                                                    <span
                                                        style={setBorderOptionSizePreview(2, "span")}
                                                    >Xl</span>
                                                </button>
                                            </li>
                                            <li className="mr-25">
                                                <button
                                                    className={classButton}
                                                    onMouseEnter={() => { setOptionSizeHover(3) }}
                                                    onMouseLeave={() => { setOptionSizeHover(0) }}
                                                    onClick={() => setOptionSizeSelected(3)}
                                                    style={setBorderOptionSizePreview(3, "button")}
                                                >
                                                    <span
                                                        style={setBorderOptionSizePreview(3, "span")}
                                                    >Xxl</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </Card.Section>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </Card>
            </div>
        </div>
    );
}