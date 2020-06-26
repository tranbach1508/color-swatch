import React, { Component } from 'react';
import { Page, Card, Tabs, Checkbox, Heading, TextField, Layout, Label } from '@shopify/polaris';
import { useCallback, useRef, useState } from 'react';
import CustomProductPage from './CustomProductPage';
import CustomCollectionPage from './CustomCollectionPage';

export default function Custom() {

    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'Product page',
            content: 'Product page',
            panelID: 'product-page',
        },
        {
            id: 'Collection page',
            content: 'Collection page',
            panelID: 'collection-page',
        },
    ];

    const TabContent = () =>{
        if(tabs[selected].content == "Product page"){
            return(
                <CustomProductPage></CustomProductPage>
            )
        }else{
            return (
                <CustomCollectionPage></CustomCollectionPage>
            )
        }
    }

    return (
        <div id="customPage">
            <Page fullWidth>
                <Card>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                        <TabContent></TabContent>
                    </Tabs>
                </Card>
            </Page>
        </div>
    );
}

