import React, { Component, useCallback, useRef, useState, useEffect } from 'react';
import { Modal, ColorPicker, TextField, Icon, Select, Card,Button } from '@shopify/polaris';
import { ExportMinor, LinkMinor } from '@shopify/polaris-icons';
import { Switch } from 'antd';
import 'antd/dist/antd.css';

function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default function Dashboard(props) {

    const [active, setActive] = useState(false);
    const [displayType, setDisplayType] = useState('choose');
    const [customize, setCustomize] = useState(false);
    const [swatchShape, setSwatchShape] = useState("crcle");
    const [buttonShape, setButtonShape] = useState("crcle");
    const [swatchSize, setSwatchSize] = useState("small");
    const [buttonSize, setButtonSize] = useState("small");
    const [textStyle, setTextStyle] = useState("default");
    const [borderStyle, setBoderStyle] = useState("single");
    const [seletedTypeSwatch, setSeletedTypeSwatch] = useState("1");
    const [swatchHoverEffect, setSwatchHoverEffect] = useState({
        background: "not effect",
        zoom_image: "no zoom",
        size_change: "no change",
    })
    const [buttonHoverEffect, setButtonHoverEffect] = useState({
        background: "not effect",
    })
    const [color, setColor] = useState({
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.7,
    });
    const [displayColorPicker,setDisplayColorPicker] = useState({
        one_color: false,
        two_color: false
    });

    useEffect(
        () => {
            setActive(props.active)
        },
        [props.active], // giá trị được subcrive
    );
    const openColorPicker = useCallback((field, value) =>{
        setDisplayColorPicker({
            ...displayColorPicker,
            [field]: value
        })
    })
    const handleChange = useCallback(() => {
        setActive(!active);
        props.handleActiveModal();
    });
    const handleChangeColor = useCallback(setColor, []);
    const handleSelectChange = useCallback((value) => {
        setSeletedTypeSwatch(value)
    }, []);

    const handleChangeCustomize = useCallback(() => setCustomize((customize) => !customize), []);
    const changeSelected = (state, value, field) => {
        if (state == "swatch_hover_effect") {
            setSwatchHoverEffect({
                ...swatchHoverEffect,
                [field]: value
            })
        } else if (state == "button_hover_effect") {
            setButtonHoverEffect({
                ...buttonHoverEffect,
                [field]: value
            })
        } else if (state == "border_style") {
            setBoderStyle(value);
        } else if (state == "display_type") {
            setDisplayType(value);
        } else if (state == "swatch_shape") {
            setSwatchShape(value);
        } else if (state == "swatch_size") {
            setSwatchSize(value);
        } else if (state == "button_shape") {
            setButtonShape(value);
        } else if (state == "button_size") {
            setButtonSize(value);
        } else if (state == "text_style") {
            setTextStyle(value);
        }

    }

    const typeList = [
        { label: '--- Choose a type ---', value: 'choose' },
        { label: 'Swatch', value: 'swatch' },
        { label: 'Button', value: 'button' },
    ];
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

    const GetCustomize = () => {
        if (customize == true) {
            return (
                <div className="type flex mb-10">
                    <div className="width-30">
                        <span>Display type</span>
                    </div>
                    <div className="width-70">
                        <Select
                            options={typeList}
                            onChange={(value) => changeSelected("display_type", value, "none")}
                            value={displayType}
                        />
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }

    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const GetTypeSwatch = () => {
        if (seletedTypeSwatch == "1") {
            return (
                <div className="one-color mr-50">
                    <TextField value={"fasd"} onChange={handleChange}></TextField>
                    <div className="open_picker" onClick={()=>openColorPicker("one_color", true)}></div>
                    <div className="color_picker" style={{display: displayColorPicker.one_color ? 'block' : 'none'}}>
                        <ColorPicker ref={wrapperRef} onChange={handleChangeColor} color={color} />
                    </div>
                </div>
            )
        } else if (seletedTypeSwatch == "2") {
            return (
                <div className="two-colors">
                    <div className="value-color-1 mr-15 width-50 flex relative">
                        <TextField value={"fasd"} onChange={handleChange}></TextField>
                        <div className="open_picker"></div>
                        <div className="color_picker">
                            <ColorPicker onChange={handleChangeColor} color={color} />
                        </div>
                    </div>
                    <div className="value-color-2 mr-15 width-50 flex relative">
                        <TextField value={"fasd"} onChange={handleChange}></TextField>
                        <div className="open_picker"></div>
                        <div className="color_picker">
                            <ColorPicker onChange={handleChangeColor} color={color} />
                        </div>
                    </div>
                </div>

            )
        } else if (seletedTypeSwatch == "3") {
            return (
                <div className="value-file mr-50">
                    <TextField value={"fasd"} onChange={handleChange}></TextField>
                    <input type="file" id="upload_file"></input>
                    <div className="upload_file">
                        <label htmlFor="upload_file"><Icon source={ExportMinor} /></label>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="value-url-img mr-50">
                    <TextField value={"fasd"} onChange={handleChange}></TextField>
                    <div className="image_url">
                        <Icon source={LinkMinor} />
                    </div>
                </div>
            )
        }
    }

    const CustomizeType = () => {
        if (displayType == "swatch" && customize == true) {
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
                        <div className="width-70 flex space-between">
                            <div className="width-30 relative">
                                <TextField label="Nomal" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                            <div className="width-30 relative">
                                <TextField label="Hover" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                            <div className="width-30 relative">
                                <TextField label="Selected" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
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
        } else if (displayType == "button" && customize== true) {
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
                        <div className="width-70 flex space-between">
                            <div className="width-30 relative">
                                <TextField label="Nomal" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                            <div className="width-30 relative">
                                <TextField label="Hover" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                            <div className="width-30 relative">
                                <TextField label="Selected" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
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
                        <div className="width-70 flex space-between">
                            <div className="width-30 relative">
                                <TextField label="Nomal" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                            <div className="width-30 relative">
                                <TextField label="Hover" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                            <div className="width-30 relative">
                                <TextField label="Selected" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="width-30">
                            <span>Background color</span>
                        </div>
                        <div className="width-70 flex space-between">
                            <div className="width-30 relative">
                                <TextField label="Nomal" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                            <div className="width-30 relative">
                                <TextField label="Hover" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
                            </div>
                            <div className="width-30 relative">
                                <TextField label="Selected" value={"fasd"} onChange={handleChange}></TextField>
                                <div className="open_picker"></div>
                                <div className="color_picker" style={{ display: 'none' }}>
                                    <ColorPicker onChange={handleChangeColor} color={color} />
                                </div>
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

    return (
        <div style={{ height: '500px' }}>
            <Modal
                open={active}
                onClose={handleChange}
                title="Custom swatch | Option name: Color"
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
                                    <GetCustomize></GetCustomize>
                                    <CustomizeType></CustomizeType>

                                </div>
                            </div>
                        </Card.Section>
                        <Card.Section>
                            <ul className="list_value_option pl-0">
                                <li>
                                    <div className="value-option">
                                        <h3 className="value-name mb-10">Red <a className="affects_product">(affects only 1 product)</a></h3>
                                        <div className="custom-value-option">
                                            <div className="value-preview mr-50">

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
                            </ul>
                        </Card.Section>
                    </Card>
                    <div className="modal_footer flex space-between mt-20">
                        <div><Button primary>Save theme</Button></div>
                        <div><Button primary>Save theme</Button></div>
                    </div>
                </Modal.Section>
            </Modal>
        </div>
    );
}