import React, { Component } from 'react';
import { Card, FormLayout, ChoiceList, Heading, Button, Layout } from '@shopify/polaris';
import { useCallback, useRef, useState } from 'react';
import ColorPickers from './ColorPickers';

export default function CustomProductPage() {
    const [change, setChange] = useState(false);
    const [displayColorPicker, setDisplayColorPicker] = useState("");
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
    const [positionColorPicker, setPositionColorPicker] = useState({
        top: 0,
        left: 0
    })
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
    const changeCheckboxValue = useCallback((field, value) => {
        setCheckboxValue({
            ...checkboxValue,
            [field]: value[0]
        });
        setChange(true)
    }
    )

    const refs = {
        swatch_border_color_nomal: useRef(),
        swatch_border_color_hover: useRef(),
        swatch_border_color_selected: useRef(),
        button_border_color_nomal: useRef(),
        button_border_color_hover: useRef(),
        button_border_color_selected: useRef(),
        button_text_color_nomal: useRef(),
        button_text_color_hover: useRef(),
        button_text_color_selected: useRef(),
        button_background_color_nomal: useRef(),
        button_background_color_hover: useRef(),
        button_background_color_seleted: useRef(),
    }

    const openColorPicker = useCallback((field) => {
        setDisplayColorPicker(field);
        if (refs[field]) {
            setPositionColorPicker({
                top: refs[field].current.getBoundingClientRect().top,
                left: refs[field].current.getBoundingClientRect().left,
            })
        }
    })

    const closeColorPicker = useCallback((field) => {
        setDisplayColorPicker("");
        setPositionColorPicker({
            top: 0,
            left: 0
        })
    })

    const changeColorPickerValue = (field, value) => {
        setColorPickerValue({
            ...colorPickerValue,
            [field]: value
        });
        setChange(true)
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
                                <ChoiceList
                                    choices={[
                                        { label: 'Circle', value: 'circle' },
                                        { label: 'Square', value: 'square' },
                                    ]}
                                    selected={[checkboxValue.swatch_shape]}
                                    onChange={(value) => changeCheckboxValue('swatch_shape', value)}
                                />
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch size</Heading>
                            <div className="flex_wrap swatch_size">
                                <ChoiceList
                                    choices={[
                                        { label: 'Small', value: 'small' },
                                        { label: 'Medium', value: 'medium' },
                                        { label: 'Large', value: 'large' },
                                    ]}
                                    selected={[checkboxValue.swatch_size]}
                                    onChange={(value) => changeCheckboxValue('swatch_size', value)}
                                />
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch border style</Heading>
                            <div className="flex_wrap border_style">
                                <ChoiceList
                                    choices={[
                                        { label: 'None', value: 'none' },
                                        { label: 'Single', value: 'single' },
                                        { label: 'Double', value: 'double' },
                                    ]}
                                    selected={[checkboxValue.swatch_border_style]}
                                    onChange={(value) => changeCheckboxValue('swatch_border_style', value)}
                                />
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch border color</Heading>
                            <div className="flex_wrap pickcolor relative">
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div ref={refs.swatch_border_color_nomal} className="open_picker mt-5" onClick={() => openColorPicker("swatch_border_color_nomal")} style={{ backgroundColor: colorPickerValue.swatch_border_color_nomal.hex }}></div>
                                </div>
                                <div className="width-30">
                                    <label>Hover</label>
                                    <div ref={refs.swatch_border_color_hover} className="open_picker mt-5" onClick={() => openColorPicker("swatch_border_color_hover")} style={{ backgroundColor: colorPickerValue.swatch_border_color_hover.hex }}></div>
                                </div>
                                <div className="width-30">
                                    <label>Selected</label>
                                    <div ref={refs.swatch_border_color_selected} className="open_picker mt-5" onClick={() => openColorPicker("swatch_border_color_selected")} style={{ backgroundColor: colorPickerValue.swatch_border_color_selected.hex }}></div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Swatch hover effects</Heading>
                            <div className="background_effect flex_wrap">
                                <p className="mb-10 width-100">Background effect on hover</p>
                                <ChoiceList
                                    choices={[
                                        { label: 'No efect', value: 'no effect' },
                                        { label: 'Add glow', value: 'add glow' },
                                        { label: 'Add shadow', value: 'add shadow' },
                                    ]}
                                    selected={[checkboxValue.swatch_background_effect]}
                                    onChange={(value) => changeCheckboxValue('swatch_background_effect', value)}
                                />
                            </div>
                            <div className="zoom_image flex_wrap">
                                <p className="mb-10 width-100">Zoom image on hover</p>
                                <ChoiceList
                                    choices={[
                                        { label: 'No zoom', value: 'no zoom' },
                                        { label: 'Zoom', value: 'zoom' },
                                    ]}
                                    selected={[checkboxValue.swatch_zoom_image]}
                                    onChange={(value) => changeCheckboxValue('swatch_zoom_image', value)}
                                />
                            </div>
                            <div className="size_change flex_wrap">
                                <p className="mb-10 width-100">Size change on hover (not applicable for swatches in slider):</p>
                                <ChoiceList
                                    choices={[
                                        { label: 'No change', value: 'no change' },
                                        { label: 'Reduce zise', value: 'reduce size' },
                                        { label: 'Increase size', value: 'increase size' },
                                    ]}
                                    selected={[checkboxValue.swatch_size_change]}
                                    onChange={(value) => changeCheckboxValue('swatch_size_change', value)}
                                />
                            </div>
                        </FormLayout>
                    </Card.Section>
                </Card>
                <Card>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button corner</Heading>
                            <div className="flex_wrap swatch_size">
                                <ChoiceList
                                    choices={[
                                        { label: 'Sharp', value: 'sharp' },
                                        { label: 'Rounded', value: 'rounded' },
                                    ]}
                                    selected={[checkboxValue.button_corner]}
                                    onChange={(value) => changeCheckboxValue('button_corner', value)}
                                />
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button size</Heading>
                            <div className="flex_wrap swatch_size">
                            <ChoiceList
                                    choices={[
                                        { label: 'Small', value: 'small' },
                                        { label: 'Medium', value: 'medium' },
                                        { label: 'Large', value: 'large' },
                                    ]}
                                    selected={[checkboxValue.button_size]}
                                    onChange={(value) => changeCheckboxValue('button_size', value)}
                                />
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button border color</Heading>
                            <div className="flex_wrap pickcolor relative">
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div ref={refs.button_border_color_nomal} className="open_picker mt-5" onClick={() => openColorPicker("button_border_color_nomal")} style={{ backgroundColor: colorPickerValue.button_border_color_nomal.hex }}></div>
                                </div>
                                <div className="width-30">
                                    <label>Hover</label>
                                    <div ref={refs.button_border_color_hover} className="open_picker mt-5" onClick={() => openColorPicker("button_border_color_hover")} style={{ backgroundColor: colorPickerValue.button_border_color_hover.hex }}></div>
                                </div>
                                <div className="width-30">
                                    <label>Selected</label>
                                    <div ref={refs.button_border_color_selected} className="open_picker mt-5" onClick={() => openColorPicker("button_border_color_selected")} style={{ backgroundColor: colorPickerValue.button_border_color_selected.hex }}></div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Text style</Heading>
                            <div className="flex_wrap border_style">
                            <ChoiceList
                                    choices={[
                                        { label: 'Default', value: 'default' },
                                        { label: 'Lowercase', value: 'lowercase' },
                                        { label: 'Uppercase', value: 'uppercase' },
                                    ]}
                                    selected={[checkboxValue.text_style]}
                                    onChange={(value) => changeCheckboxValue('text_style', value)}
                                />
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Text color</Heading>
                            <div className="flex_wrap pickcolor relative">
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div ref={refs.text_color_nomal} className="open_picker mt-5" onClick={() => openColorPicker("text_color_nomal")} style={{ backgroundColor: colorPickerValue.text_color_nomal.hex }}></div>
                                </div>
                                <div className="width-30">
                                    <label>Hover</label>
                                    <div ref={refs.text_color_hover} className="open_picker mt-5" onClick={() => openColorPicker("text_color_hover")} style={{ backgroundColor: colorPickerValue.text_color_hover.hex }}></div>
                                </div>
                                <div className="width-30">
                                    <label>Selected</label>
                                    <div ref={refs.text_color_selected} className="open_picker mt-5" onClick={() => openColorPicker("text_color_selected")} style={{ backgroundColor: colorPickerValue.text_color_selected.hex }}></div>
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
                                </div>
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div className="open_picker" onClick={() => openColorPicker("background_color_hover")} style={{ backgroundColor: colorPickerValue.background_color_hover.hex }}></div>
                                </div>
                                <div className="width-30">
                                    <label>Nomal</label>
                                    <div className="open_picker" onClick={() => openColorPicker("background_color_selected")} style={{ backgroundColor: colorPickerValue.background_color_selected.hex }}></div>
                                </div>
                            </div>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            <Heading element="h3">Button hover effects</Heading>
                            <div className="background_effect flex_wrap">
                                <p className="mb-10 width-100">Background effect on hover</p>
                                <ChoiceList
                                    choices={[
                                        { label: 'No effect', value: 'no effect' },
                                        { label: 'Add glow', value: 'add glow' },
                                        { label: 'Add shadow', value: 'add shadow' },
                                    ]}
                                    selected={[checkboxValue.button_background_effect]}
                                    onChange={(value) => changeCheckboxValue('button_background_effect', value)}
                                />
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
                <div className="flex-end mt-10"><Button primary disabled={change ? '' : 'disabled'} >Save</Button></div>
            </div>
            {displayColorPicker == "" ? '' : <ColorPickers closeColorPicker={() => closeColorPicker()} field={displayColorPicker} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={true} value={colorPickerValue[displayColorPicker].hex} position={positionColorPicker}></ColorPickers>}
        </div>
    );
}