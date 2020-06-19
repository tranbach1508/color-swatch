import React, { Component } from 'react';
import { Page, TextStyle, Card, FormLayout, Checkbox, Heading, TextField, ColorPicker, Layout } from '@shopify/polaris';
import { useCallback, useRef, useState } from 'react';

export default function Custom() {

    const [madatory, setMadatory] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

    const [color, setColor] = useState({
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.7,
    });

    const handleChangeColor = useCallback(setColor, []);

    const handleEnableMadatory = useCallback(() => {
        setMadatory(!madatory);
    });
    return (
        <div id="customPage">
            <Page fullWidth>
                <div className="flex">
                    <div className="width-25 swatch_custom">
                        <Card>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Swatch shape</Heading>
                                    <div className="flex_wrap swatch_shape">
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 circle">
                                            <div>
                                                <img className="image_preview" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Circle"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 square">
                                            <div>
                                                <img className="image_preview" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Square"
                                                    checked={checked}
                                                    onChange={handleChange}
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
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 small">
                                            <div>
                                                <img className="image_preview" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Small"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 medium">
                                            <div>
                                                <img className="image_preview" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Medium"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 large">
                                            <div>
                                                <img className="image_preview" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Large"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Border style</Heading>
                                    <div className="flex_wrap border_style">
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 none">
                                            <div>
                                                <img className="image_preview" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="None"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 single">
                                            <div>
                                                <img className="image_preview" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Single"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 double">
                                            <div>
                                                <img className="image_preview" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Double"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Border color</Heading>
                                    <div className="flex_wrap border_color relative">
                                        <TextField label="When swatch is selected:" onChange={handleChange}></TextField>
                                        <div className="open_picker"></div>
                                        <div className="color_picker" style={{ display: 'none' }}>
                                            <ColorPicker onChange={handleChangeColor} color={color} />
                                        </div>
                                    </div>
                                    <div className="flex_wrap border_color relative">
                                        <TextField label="When swatch is not selected:" onChange={handleChange}></TextField>
                                        <div className="open_picker"></div>
                                        <div className="color_picker" style={{ display: 'none' }}>
                                            <ColorPicker onChange={handleChangeColor} color={color} />
                                        </div>
                                    </div>
                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Hover effects</Heading>
                                    <div className="background_effect flex_wrap">
                                        <p className="mb-20 text_center width-100">Background effect on hover</p>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 no_effect">
                                            <div>
                                                <img className="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="No effect"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 add_glow">
                                            <div>
                                                <img className="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Add glow"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 add_shadow">
                                            <div>
                                                <img className="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Add shadow"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="zoom_image flex_wrap">
                                        <p className="mb-20 text_center width-100">Zoom image on hover</p>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 no_zoom">
                                            <div>
                                                <img className="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="No zoom"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 zoom">
                                            <div>
                                                <img className="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Zoom"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="size_change flex_wrap">
                                        <p className="mb-20 text_center width-100">Size change on hover (not applicable for swatches in slider):</p>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 no_change">
                                            <div>
                                                <img className="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="No change"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 reduce_size">
                                            <div>
                                                <img className="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Reduce zise"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20 increase_size">
                                            <div>
                                                <img className="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            </div>
                                            <div>
                                                <Checkbox
                                                    label="Increase size"
                                                    checked={checked}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </FormLayout>
                            </Card.Section>
                        </Card>
                    </div>
                    <div className="width-75 swatch_preview">
                        <Card title="Preview" sectioned>
                            <Layout>
                                <Layout.Section oneThird>
                                    <Card>
                                        <Card.Section>
                                        <img className="product_image" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                        </Card.Section>
                                    </Card>
                                </Layout.Section>
                                <Layout.Section oneThird>
                                    <Card>
                                        <Card.Section></Card.Section>
                                    </Card>
                                </Layout.Section>
                            </Layout>
                        </Card>
                    </div>
                </div>
            </Page>
        </div>
    );
}

