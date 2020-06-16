import React, { Component, useCallback, useRef, useState, useEffect } from 'react';
import { Modal, ColorPicker, TextField,Icon } from '@shopify/polaris';
import { ExportMinor,LinkMinor } from '@shopify/polaris-icons';

export default function Dashboard(props) {

    const [active, setActive] = useState(false);
    useEffect(
        () => {
            setActive(props.active)
        },
        [props.active], // giá trị được subcrive
    );


    const handleChange = useCallback(() => {
        setActive(!active);
        props.handleActiveModal();
    });

    const [color, setColor] = useState({
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.7,
    });

    const handleChangeColor = useCallback(setColor, []);

    return (
        <div style={{ height: '500px' }}>
            <Modal
                open={active}
                onClose={handleChange}
                title="Custom swatch | Option name: Color"
            >
                <Modal.Section>
                    <ul className="list_value_option">
                        <li>
                            <div className="value-option">
                                <h3 className="value-name">Red <a>(affects only 1 product)</a></h3>
                                <div className="custom-value-option">
                                    <div className="value-preview mr-20">

                                    </div>
                                    <div className="value-color-1 mr-15">
                                        <TextField value={"fasd"} onChange={handleChange}></TextField>
                                        <div className="open_picker"></div>
                                        <div className="color_picker">
                                            <ColorPicker onChange={handleChangeColor} color={color} />
                                        </div>
                                    </div>
                                    <div className="value-color-2 mr-15">
                                        <TextField value={"fasd"} onChange={handleChange}></TextField>
                                        <div className="open_picker"></div>
                                        <div className="color_picker">
                                            <ColorPicker onChange={handleChangeColor} color={color} />
                                        </div>
                                    </div>
                                    <div className="value-file mr-15">
                                    <TextField  value={"fasd"} onChange={handleChange}></TextField>
                                    <input type="file" id="upload_file"></input>
                                        <div className="upload_file">
                                            <label for="upload_file"><Icon source={ExportMinor} /></label>
                                        </div>
                                    </div>
                                    <div className="value-url-img mr-15">
                                    <TextField value={"fasd"} onChange={handleChange}></TextField>
                                        <div className="image_url">
                                        <Icon source={LinkMinor} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Modal.Section>
            </Modal>
        </div>
    );
}