import React, { useCallback, useRef, useState } from 'react';
import { Page, Layout, Card, SettingToggle, TextStyle, Select, Button } from '@shopify/polaris';
import { Switch } from 'antd';

export default function Settings() {
    const [install, setInstall] = useState(false);
    const contentStatus = install ? 'Disable' : 'Enable';
    const textStatus = install ? 'enabled' : 'disabled';
    const [stockOut,setStockOut] = useState('1');
    const [change,setChange] = useState(false);
    const [enableCollection, setEnableCollection] = useState(false);
    const [mandatory, setMandatory] = useState(false);

    const handleEnableApp = useCallback(() => {
        setInstall(!install);
        setChange(true);
    });
    const options = [
        { label: 'Hide', value: '1' },
        { label: 'Opacity', value: '2' },
        { label: 'Cross out', value: '3' },
        { label: 'Grey out', value: '4' },
    ];
    
    const handleEnableCollection = () => {
        setEnableCollection(!enableCollection);
        setChange(true);
    }
    const hanleEnableMandatory = () => {
        setMandatory(!mandatory);
        setChange(true);
    }
    const handleSelectChange = (value) => {
        setStockOut(value);
        setChange(true);
    }
    return (
        <div className="settingPage">
            <Page title="Setting">
                <Layout.Section>
                    <SettingToggle
                        action={{
                            content: contentStatus,
                            onAction: handleEnableApp,
                        }}
                        enabled={install}
                    >
                        This setting is <TextStyle variation="strong">{textStatus}</TextStyle>.
                                 </SettingToggle>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <Card.Section>
                            <div className="flex space-between">
                                <label>Show in collection page</label>
                                <Switch checked={enableCollection} onChange={handleEnableCollection} />
                            </div>
                        </Card.Section>
                        <Card.Section>
                            <div className="flex space-between">
                                <label>Mandatory customer select an option</label>
                                <Switch checked={mandatory} onChange={hanleEnableMandatory} />
                            </div>
                        </Card.Section>
                        <Card.Section>
                            <Select
                                label="Stock out settings"
                                options={options}
                                onChange={handleSelectChange}
                                value={stockOut}
                            />
                        </Card.Section>
                    </Card>
                    <div className="flex-end mt-10"><Button primary disabled={change ? '' : 'disabled'}>Save</Button></div>
                    
                </Layout.Section>
                
            </Page>
        </div>
    );
}
