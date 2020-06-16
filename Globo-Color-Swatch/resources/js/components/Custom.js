import React, { Component } from 'react';
import { Page, Layout, Card, FormLayout, Checkbox, Heading } from '@shopify/polaris';
import { useCallback, useRef, useState } from 'react';

export default function Custom() {

    const [madatory, setMadatory] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

    const handleEnableMadatory = useCallback(() => {
        setMadatory(!madatory);
    });
    return (
        <div id="customPage">
            <Page fullWidth>

                <div className="flex">
                    <div className="width-30 swatch_custom">
                        <Card>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Swatch shape</Heading>
                                    <div className="flex_wrap swatch_shape">
                                        <div className="width-50 text_center pr-20 pl-20 mb-20">
                                            <img class="image_preview circle" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            <Checkbox
                                                label="Circle"
                                                checked={checked}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20">
                                            <img class="image_preview square" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            <Checkbox
                                                label="Square"
                                                checked={checked}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Swatch size</Heading>
                                    <div className="flex_wrap swatch_size">
                                        <div className="width-50 text_center pr-20 pl-20 mb-20">
                                            <img class="image_preview small" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            <Checkbox
                                                label="Small"
                                                checked={checked}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20">
                                            <img class="image_preview medium" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            <Checkbox
                                                label="Medium"
                                                checked={checked}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="width-50 text_center pr-20 pl-20 mb-20">
                                            <img class="image_preview large" src="http://localhost:88/Globo-Color-Swatch/public/images/variant.jpg" />
                                            <Checkbox
                                                label="Large"
                                                checked={checked}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Border color</Heading>
                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Hover effects</Heading>
                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Swatch size</Heading>
                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Heading element="h3">Swatch size</Heading>
                                </FormLayout>
                                <FormLayout>
                                    <Checkbox
                                        label="Enable"
                                        checked={madatory}
                                        onChange={handleEnableMadatory}
                                    />
                                </FormLayout>

                            </Card.Section>
                        </Card>

                    </div>
                    <div className="width-70 swatch_preview">
                        <Card title="Order details" sectioned>
                            <p>View a summary of your order.</p>
                        </Card>
                    </div>
                </div>
            </Page>
        </div>
    );
}

