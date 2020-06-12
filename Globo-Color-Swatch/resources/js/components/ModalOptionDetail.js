import React, { Component, useCallback, useRef, useState, useEffect } from 'react';
import { Modal,ColorPicker } from '@shopify/polaris';

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
                                    <div className="value-preview"></div>
                                    <div className="value-color-1">
                                        <ColorPicker onChange={handleChangeColor} color={color} />
                                    </div>
                                    <div className="value-color-2"></div>
                                    <div className="value-file"></div>
                                    <div className="value-url-img"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Modal.Section>
            </Modal>
        </div>
    );
}