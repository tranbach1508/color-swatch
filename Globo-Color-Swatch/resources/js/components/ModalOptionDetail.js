import React, { Component, useCallback, useRef, useState, useEffect } from 'react';
import { Modal, TextField, Icon, Select, Card, Button } from '@shopify/polaris';
import { ExportMinor, LinkMinor } from '@shopify/polaris-icons';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import ColorPickers from './ColorPickers';

export default function Dashboard(props) {

    const [active, setActive] = useState(false);
    const [change, setChange] = useState(false);
    const [customize, setCustomize] = useState(false);
    const [swatchShape, setSwatchShape] = useState("crcle");
    const [buttonShape, setButtonShape] = useState("crcle");
    const [swatchSize, setSwatchSize] = useState("small");
    const [buttonSize, setButtonSize] = useState("small");
    const [textStyle, setTextStyle] = useState("default");
    const [borderStyle, setBoderStyle] = useState("single");
    const [seletedTypeSwatch, setSeletedTypeSwatch] = useState(1);
    const [variantOption, setVariantOption] = useState({
        field: {
            display_style: "",
            id: "",
            option_items: "",
            settings: '',
            shop_id: ''
        },
    });
    const [swatchHoverEffect, setSwatchHoverEffect] = useState({
        background: "not effect",
        zoom_image: "no zoom",
        size_change: "no change",
    })
    const [buttonHoverEffect, setButtonHoverEffect] = useState({
        background: "not effect",
    })

    const [displayColorPicker, setDisplayColorPicker] = useState("");
    const [positionColorPicker, setPositionColorPicker] = useState({
        top: 0,
        left: 0
    });

    const [colorPickerValue, setColorPickerValue] = useState({
        one_color: {
            hex: "#000",
        },
        two_color: {
            hex: "#000",
        },
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
        button_text_color_nomal: {
            hex: "#000",
        },
        button_text_color_hover: {
            hex: "#000",
        },
        button_text_color_selected: {
            hex: "#000",
        },
        button_background_color_nomal: {
            hex: "#000",
        },
        button_background_color_hover: {
            hex: "#000",
        },
        button_background_color_seleted: {
            hex: "#000",
        },
    })

    const [importOldSwatch, setImportOldSwatch] = useState(false);
    const [importOldSwatchTheme, setImportOldSwatchTheme] = useState('1');
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
        one_color: useRef(),
        two_color: useRef(),
    }


    useEffect(() => {
        setActive(props.active);
        setVariantOption({
            field: props.field,
            display_style: props.field.display_style
        })
    }, [props.active], // giá trị được subcrive
    );
    console.log(variantOption);

    const openColorPicker = useCallback((field) => {
        if (refs[field]) {
            setPositionColorPicker({
                top: refs[field].current.getBoundingClientRect().top,
                left: refs[field].current.getBoundingClientRect().left,
            })
        }
        setDisplayColorPicker(field);
    })
    const closeColorPicker = () => {
        setDisplayColorPicker("");
        setPositionColorPicker({
            top: 0,
            left: 0
        })
    }
    const handleChange = useCallback(() => {
        setDisplayColorPicker("");
        setActive(false);
        props.closeModal();
        setVariantOption({
            field: {
                display_style: "",
                id: "",
                option_items: [],
                settings: '',
                shop_id: ''
            },
        });
        setChange(true);
    });
    const handleSelectChange = useCallback((value) => {
        setSeletedTypeSwatch(value);
        setChange(true);
    }, []);

    const inputColorPickerValue = (field, newValue) => {
        setColorPickerValue({
            ...colorPickerValue,
            [field]: { hex: newValue }
        });
        setChange(true);
    }

    const changeColorPickerValue = (field, value) => {
        console.log(field);
        setColorPickerValue({
            ...colorPickerValue,
            [field]: value
        });
        setChange(true);
    }

    const handleChangeCustomize = useCallback(() => {
        setCustomize(!customize);
        setChange(true);
    }
    );
    const changeSelected = (state, value, field) => {
        if (state == "swatch_hover_effect") {
            setSwatchHoverEffect({
                ...swatchHoverEffect,
                [field]: value
            });
            setChange(true);
        } else if (state == "button_hover_effect") {
            setButtonHoverEffect({
                ...buttonHoverEffect,
                [field]: value
            });
            setChange(true);
        } else if (state == "border_style") {
            setBoderStyle(value);
            setChange(true);
        } else if (state == "display_type") {
            setDisplayType(value);
            setChange(true);
        } else if (state == "swatch_shape") {
            setSwatchShape(value);
            setChange(true);
        } else if (state == "swatch_size") {
            setSwatchSize(value);
            setChange(true);
        } else if (state == "button_shape") {
            setButtonShape(value);
            setChange(true);
        } else if (state == "button_size") {
            setButtonSize(value);
            setChange(true);
        } else if (state == "text_style") {
            setTextStyle(value);
            setChange(true);
        }

    }

    const swatch_shape = [
        { label: 'Crcle', value: 'crcle' },
        { label: 'Square', value: 'square' },
    ];
    const swatch_size = [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
    ];
    const text_style = [
        { label: 'Default', value: 'default' },
        { label: 'Lowercase', value: 'lowercase' },
        { label: 'Uppercase', value: 'uppercase' },
    ];
    const hover_effect = {
        background: [
            { label: 'Not effect', value: 'not effect' },
            { label: 'Add glow', value: 'add glow' },
            { label: 'Add shadow', value: 'add shadow' },
        ],
        zoom_image: [
            { label: 'No zoom', value: 'no zoom' },
            { label: 'Zoom', value: 'zoom' },
        ],
        size_change: [
            { label: 'No change', value: 'no change' },
            { label: 'Reduce size', value: 'reduce size' },
            { label: 'Increase size', value: 'increase size' },
        ]
    }
    const boder_style = [
        { label: 'None', value: 'none' },
        { label: 'Single', value: 'single' },
        { label: 'Double', value: 'double' },
    ]
    const options = [
        { label: 'One color', value: '1' },
        { label: 'Two colors', value: '2' },
        { label: 'Upload file', value: '3' },
        { label: 'Image url', value: '4' },
    ];
    const swatch_old_theme = [
        { label: 'Select theme import swatch', value: '1' },
        { label: 'Debut', value: '2' },
        { label: 'Minimal', value: '3' },
        { label: 'Simple', value: '4' },
        { label: 'Test', value: '5' },
    ];

    const GetImportOldSwatch = () => {
        if (importOldSwatch) {
            return (
                <div className="flex">
                    <Button primary>Import swatch</Button>
                    <Select
                        options={swatch_old_theme}
                        onChange={(value) => setImportOldSwatchTheme(value)}
                        value={importOldSwatchTheme}
                    />
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const GetTypeSwatch = () => {
        if (seletedTypeSwatch == "1") {
            return (
                <div className="one-color mr-50 relative">
                    <TextField value={colorPickerValue.one_color.hex} onChange={(value) => inputColorPickerValue("one_color", value)}></TextField>
                    <div ref={refs.one_color} className="open_picker" onClick={() => openColorPicker("one_color")} style={{ backgroundColor: colorPickerValue.one_color.hex }}></div>
                </div>
            )
        } else if (seletedTypeSwatch == "2") {
            return (
                <div className="two-colors">
                    <div className="value-color-1 mr-15 width-50 flex relative">
                        <TextField value={colorPickerValue.one_color.hex} onChange={(value) => inputColorPickerValue("one_color", value)}></TextField>
                        <div ref={refs.one_color} className="open_picker" onClick={() => openColorPicker("one_color")} style={{ backgroundColor: colorPickerValue.one_color.hex }}></div>
                    </div>
                    <div className="value-color-2 mr-15 width-50 flex relative">
                        <TextField value={colorPickerValue.two_color.hex} onChange={(value) => inputColorPickerValue("two_color", value)}></TextField>
                        <div ref={refs.two_color} className="open_picker" onClick={() => openColorPicker("two_color")} style={{ backgroundColor: colorPickerValue.two_color.hex }}></div>
                    </div>
                </div>

            )
        } else if (seletedTypeSwatch == "3") {
            return (
                <div className="value-file mr-50">
                    <TextField ></TextField>
                    <input type="file" id="upload_file"></input>
                    <div className="upload_file">
                        <label htmlFor="upload_file"><Icon source={ExportMinor} /></label>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="value-url-img mr-50">
                    <TextField></TextField>
                    <div className="image_url">
                        <Icon source={LinkMinor} />
                    </div>
                </div>
            )
        }
    }

    const CustomizeType = () => {
        if (variantOption.display_style == "1" && customize == true) {
            return (
                <div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Swatch shape</span>
                        </div>
                        <div className="width-70">
                            <Select
                                options={swatch_shape}
                                onChange={(value) => changeSelected('swatch_shape', value, "none")}
                                value={swatchShape}
                            />
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Swatch size</span>
                        </div>
                        <div className="width-70">
                            <Select
                                options={swatch_size}
                                onChange={(value) => changeSelected('swatch_size', value, "none")}
                                value={swatchSize}
                            />
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Border color</span>
                        </div>
                        <div className="width-70 flex space-between relative">
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
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Hover effects</span>
                        </div>
                        <div className="width-70 flex space-between relative">
                            <div className="width-30">
                                <Select
                                    label="Background"
                                    options={hover_effect.background}
                                    onChange={(value) => changeSelected("swatch_hover_effect", value, "background")}
                                    value={swatchHoverEffect.background}
                                />
                            </div>
                            <div className="width-30">
                                <Select
                                    label="Zoom image"
                                    options={hover_effect.zoom_image}
                                    onChange={(value) => changeSelected("swatch_hover_effect", value, "zoom_image")}
                                    value={swatchHoverEffect.zoom_image}
                                />
                            </div>
                            <div className="width-30">
                                <Select
                                    label="Size change"
                                    options={hover_effect.size_change}
                                    onChange={(value) => changeSelected("swatch_hover_effect", value, "size_change")}
                                    value={swatchHoverEffect.size_change}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Border style</span>
                        </div>
                        <div className="width-70">
                            <Select
                                options={boder_style}
                                onChange={(value) => changeSelected("border_style", value, "none")}
                                value={borderStyle}
                            />
                        </div>
                    </div>
                </div>
            )
        } else if (variantOption.display_style == "3" && customize == true) {
            return (
                <div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Button shape</span>
                        </div>
                        <div className="width-70">
                            <Select
                                options={swatch_shape}
                                onChange={(value) => changeSelected('button_shape', value, "none")}
                                value={buttonShape}
                            />
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Button size</span>
                        </div>
                        <div className="width-70">
                            <Select
                                options={swatch_size}
                                onChange={(value) => changeSelected('button_size', value, "none")}
                                value={buttonSize}
                            />
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Border color</span>
                        </div>
                        <div className="width-70 flex space-between relative">
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
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Text style</span>
                        </div>
                        <div className="width-70">
                            <Select
                                options={text_style}
                                onChange={(value) => changeSelected('text_style', value, "none")}
                                value={textStyle}
                            />
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Text color</span>
                        </div>
                        <div className="width-70 flex space-between relative">
                            <div className="width-30">
                                <label>Nomal</label>
                                <div ref={refs.button_text_color_nomal} className="open_picker mt-5" onClick={() => openColorPicker("button_text_color_nomal")} style={{ backgroundColor: colorPickerValue.button_text_color_nomal.hex }}></div>
                            </div>
                            <div className="width-30">
                                <label>Hover</label>
                                <div ref={refs.button_text_color_hover} className="open_picker mt-5" onClick={() => openColorPicker("button_text_color_hover")} style={{ backgroundColor: colorPickerValue.button_text_color_hover.hex }}></div>
                            </div>
                            <div className="width-30">
                                <label>Selected</label>
                                <div ref={refs.button_text_color_selected} className="open_picker mt-5" onClick={() => openColorPicker("button_text_color_selected")} style={{ backgroundColor: colorPickerValue.button_text_color_selected.hex }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Background color</span>
                        </div>
                        <div className="width-70 flex space-between relative">
                            <div className="width-30">
                                <label>Nomal</label>
                                <div ref={refs.button_background_color_nomal} className="open_picker mt-5" onClick={() => openColorPicker("button_background_color_nomal")} style={{ backgroundColor: colorPickerValue.button_background_color_nomal.hex }}></div>
                            </div>
                            <div className="width-30">
                                <label>Hover</label>
                                <div ref={refs.button_background_color_hover} className="open_picker mt-5" onClick={() => openColorPicker("button_background_color_hover")} style={{ backgroundColor: colorPickerValue.button_background_color_hover.hex }}></div>
                            </div>
                            <div className="width-30">
                                <label>Selected</label>
                                <div ref={refs.button_background_color_seleted} className="open_picker mt-5" onClick={() => openColorPicker("button_background_color_seleted")} style={{ backgroundColor: colorPickerValue.button_background_color_seleted.hex }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Hover effects</span>
                        </div>
                        <div className="width-70 flex space-between">
                            <div className="width-30">
                                <Select
                                    label="Background"
                                    options={hover_effect.background}
                                    onChange={(value) => changeSelected("button_hover_effect", value, "background")}
                                    value={buttonHoverEffect.background}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const ListValue = () => {
        if (variantOption.field.option_items != "") {
            return (
                variantOption.field.option_items.map((value, index) => (
                    <li key={index}>
                        <div className="value-option mb-10">
                            <h3 className="value-name">{value.value} <a className="affects_product">(affects only 1 product)</a></h3>
                            <div className="custom-value-option ">
                                <div className="value-preview mr-50 relative">
                                    <span className="top_color" style={{ backgroundColor: colorPickerValue.one_color.hex }}></span>
                                    <span className="bottom_color" style={{ borderBottomColor: colorPickerValue.two_color.hex, display: seletedTypeSwatch == '1' ? 'none' : 'block' }}></span>
                                </div>
                                <div className="select-type-swatch mr-50">
                                    <Select
                                        options={options}
                                        onChange={handleSelectChange}
                                        value={seletedTypeSwatch}
                                    />
                                </div>
                                <GetTypeSwatch></GetTypeSwatch>
                            </div>
                        </div>
                    </li>
                ))
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const FooterModal = () => {
        return (
            <div className="flex space-between">
                <div style={{ display: importOldSwatch == true ? 'none' : '' }}><Button primary onClick={() => setImportOldSwatch(true)}>Import your old swatch images</Button></div>
                <GetImportOldSwatch></GetImportOldSwatch>
                <div><Button primary disabled={change ? '' : 'disabled'}>Save</Button></div>
            </div>
        )
    }

    return (
        <div style={{ height: '500px', display: active ? 'block' : 'none' }}>
            <Modal
                open={active}
                onClose={handleChange}
                title={"Custom swatch | Option name: " + variantOption.field.name}
                footer={<FooterModal></FooterModal>}
            >
                <Modal.Section>
                    <Card>
                        <Card.Section>
                            <div className="custom_for_option mb-20 pl-0">
                                <div className="status mb-20 flex">
                                    <div className="width-30">
                                        <span>Customize for option</span>
                                    </div>
                                    <div className="width-70">
                                        <Switch checked={customize} onChange={handleChangeCustomize} />
                                    </div>
                                </div>
                                <div className="custom">
                                    <CustomizeType></CustomizeType>
                                </div>
                            </div>
                        </Card.Section>
                        <Card.Section>
                            <ul className="list_value_option pl-0">
                                <ListValue></ListValue>
                            </ul>
                        </Card.Section>
                    </Card>

                </Modal.Section>
            </Modal>
            {displayColorPicker == "" ? '' : <ColorPickers closeColorPicker={() => closeColorPicker()} field={displayColorPicker} changeColorPickerValue={(field, value) => changeColorPickerValue(field, value)} active={true} value={colorPickerValue[displayColorPicker].hex} position={positionColorPicker}></ColorPickers>}
        </div>
    );
}