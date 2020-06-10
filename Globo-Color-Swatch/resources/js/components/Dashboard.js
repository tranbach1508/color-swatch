import React, { Component } from 'react';
import { Page, Layout, Card, Icon } from '@shopify/polaris';
import { ToolsMajorMonotone } from '@shopify/polaris-icons';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({ value }) =>{
    return (
        <tr className="Polaris-DataTable__TableRow">
            <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn" scope="row">{value} <a href="integrate">(affects only 1 product)</a></th>
            <td className="Polaris-DataTable__Cell">
                <div className="Polaris-Select"><select id="PolarisSelect2" className="Polaris-Select__Input" aria-invalid="false">
                    <option value="today">Color or custom image swatch</option>
                    <option value="yesterday">Automated variant image swatch</option>
                    <option value="lastWeek">Button</option>
                    <option value="lastWeek">Dropdown list</option>
                </select>
                    <div className="Polaris-Select__Content" aria-hidden="true"><span className="Polaris-Select__SelectedOption">Color or custom image swatch</span><span className="Polaris-Select__Icon"><span className="Polaris-Icon"><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                        <path d="M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z" fillRule="evenodd" />
                    </svg></span></span></div>
                    <div className="Polaris-Select__Backdrop" />
                </div>
            </td>
            <td className="Polaris-DataTable__Cell">
                <div className="Polaris-ButtonGroup__Item">
                    <a data-fancybox data-type="iframe" data-src="https://filter-v5.globosoftware.net/values/100409" className="Polaris-Button resource-modal" data-filter-option-id={100409} href="https://filter-v5.globosoftware.net/values/100409" data-polaris-unstyled="true">
                        <Icon
                            source={ToolsMajorMonotone} />
                    </a>
                </div>
            </td>
        </tr>
    )
}
);

const SortableList = SortableContainer(({ items }) => {
    return (
        <tbody>
            {items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
        </tbody>
    );
});

class componentName extends Component {

    constructor() {
        super();
        this.state = {
            items: ['Color', 'Size', 'Weight'],
        };
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    render() {
        return (
            <div id="dashboardPage">
                <Page title="Dashboard">
                    <Layout>
                        <Layout.Section>
                            <Card title="Product options" sectioned>
                                <table className="Polaris-DataTable__Table">
                                    <thead>
                                        <tr>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header" scope="col"><strong>Option</strong></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--header" scope="col"><strong>Display style</strong></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--header" scope="col"></th>
                                        </tr>
                                    </thead>
                                    <SortableList useDragHandle={true} items={this.state.items} onSortEnd={this.onSortEnd} />
                                    {/* <tr className="Polaris-DataTable__TableRow">
                                            <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn" scope="row">Color <a href="#">(affects only 1 product)</a></th>
                                            <td className="Polaris-DataTable__Cell">
                                                <div className="Polaris-Select"><select id="PolarisSelect2" className="Polaris-Select__Input" aria-invalid="false">
                                                    <option value="today">Color or custom image swatch</option>
                                                    <option value="yesterday">Automated variant image swatch</option>
                                                    <option value="lastWeek">Button</option>
                                                    <option value="lastWeek">Dropdown list</option>
                                                </select>
                                                    <div className="Polaris-Select__Content" aria-hidden="true"><span className="Polaris-Select__SelectedOption">Color or custom image swatch</span><span className="Polaris-Select__Icon"><span className="Polaris-Icon"><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                        <path d="M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z" fillRule="evenodd" />
                                                    </svg></span></span></div>
                                                    <div className="Polaris-Select__Backdrop" />
                                                </div>
                                            </td>
                                            <td className="Polaris-DataTable__Cell">
                                                <div className="Polaris-ButtonGroup__Item">
                                                    <a data-fancybox data-type="iframe" data-src="https://filter-v5.globosoftware.net/values/100409" className="Polaris-Button resource-modal" data-filter-option-id={100409} href="https://filter-v5.globosoftware.net/values/100409" data-polaris-unstyled="true">
                                                        <Icon
                                                            source={ToolsMajorMonotone} />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="Polaris-DataTable__TableRow">
                                            <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn" scope="row">Size <a href="#">(affects only 1 product)</a></th>
                                            <td className="Polaris-DataTable__Cell">
                                                <div className="Polaris-Select"><select id="PolarisSelect2" className="Polaris-Select__Input" aria-invalid="false">
                                                    <option value="today">Color or custom image swatch</option>
                                                    <option value="yesterday">Automated variant image swatch</option>
                                                    <option value="lastWeek">Button</option>
                                                    <option value="lastWeek">Dropdown list</option>
                                                </select>
                                                    <div className="Polaris-Select__Content" aria-hidden="true"><span className="Polaris-Select__SelectedOption">Color or custom image swatch</span><span className="Polaris-Select__Icon"><span className="Polaris-Icon"><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                        <path d="M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z" fillRule="evenodd" />
                                                    </svg></span></span></div>
                                                    <div className="Polaris-Select__Backdrop" />
                                                </div>
                                            </td>
                                            <td className="Polaris-DataTable__Cell">
                                                <div className="Polaris-ButtonGroup__Item">
                                                    <a data-fancybox data-type="iframe" data-src="https://filter-v5.globosoftware.net/values/100409" className="Polaris-Button resource-modal" data-filter-option-id={100409} href="https://filter-v5.globosoftware.net/values/100409" data-polaris-unstyled="true">
                                                        <Icon
                                                            source={ToolsMajorMonotone} />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="Polaris-DataTable__TableRow">
                                            <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn" scope="row">Weight <a href="#">(affects only 1 product)</a></th>
                                            <td className="Polaris-DataTable__Cell">
                                                <div className="Polaris-Select"><select id="PolarisSelect2" className="Polaris-Select__Input" aria-invalid="false">
                                                    <option value="today">Color or custom image swatch</option>
                                                    <option value="yesterday">Automated variant image swatch</option>
                                                    <option value="lastWeek">Button</option>
                                                    <option value="lastWeek">Dropdown list</option>
                                                </select>
                                                    <div className="Polaris-Select__Content" aria-hidden="true"><span className="Polaris-Select__SelectedOption">Color or custom image swatch</span><span className="Polaris-Select__Icon"><span className="Polaris-Icon"><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                        <path d="M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z" fillRule="evenodd" />
                                                    </svg></span></span></div>
                                                    <div className="Polaris-Select__Backdrop" />
                                                </div>
                                            </td>
                                            <td className="Polaris-DataTable__Cell">
                                                <div className="Polaris-ButtonGroup__Item">
                                                    <a data-fancybox data-type="iframe" data-src="https://filter-v5.globosoftware.net/values/100409" className="Polaris-Button resource-modal" data-filter-option-id={100409} href="https://filter-v5.globosoftware.net/values/100409" data-polaris-unstyled="true">
                                                        <Icon
                                                            source={ToolsMajorMonotone} />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr> */}
                                </table>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </Page>
            </div>
        );
    }
}

export default componentName;