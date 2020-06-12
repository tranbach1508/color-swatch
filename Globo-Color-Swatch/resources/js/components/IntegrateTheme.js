import React, { Component } from 'react';
import { Page, Layout, Card, Select,Button } from '@shopify/polaris';

class IntegrateTheme extends Component {
    constructor() {
        super();
        this.state = {
            selected: 123
        };
    }

    handleSelectChange = (value) => {
        this.setState({
            selected: value
        })
    };

    render() {
        var { selected } = this.state;
        var options = [
            { label: 'Debut', value: 123 },
            { label: 'Simple', value: 456 },
            { label: 'Minimal', value: 789 },
        ];
        return (
            <div id="integratePage">
                <Page title="Integrate theme">
                    <Layout>
                        <Layout.AnnotatedSection
                            title="Backup theme"
                        >
                            <Card sectioned>
                            <p>The app will apply a few changes to your theme. We strongly recommend you to do the setup on a backup theme to test before publishing that theme. (Click <a href="https://help.shopify.com/en/manual/using-themes/managing-themes/duplicating-themes" target="_blank">here</a> to know how to create a backup theme).</p>
                            <br></br>
                            <p>To undo, click on "Uninstall Filter" button so that your original theme will be reverted.</p>
                            </Card>
                        </Layout.AnnotatedSection>
                        <Layout.AnnotatedSection
                            title="Choose theme"
                        >
                            <Card sectioned>
                                <Select
                                    label="Select a theme for applying the color swatch"
                                    options={options}
                                    onChange={this.handleSelectChange}
                                    value={selected}
                                />
                                <div className="space-between mt-10">
                                    <Button destructive>Uninstall</Button>
                                    <Button primary>Install</Button>
                                </div>
                            </Card>
                        </Layout.AnnotatedSection>
                    </Layout>
                </Page>
            </div>
        );
    }
}

export default IntegrateTheme;