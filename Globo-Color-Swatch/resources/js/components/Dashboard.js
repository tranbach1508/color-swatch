import React, { Component } from 'react';
import { useCallback, useRef, useState } from 'react';
import { Page, Layout, Card, Icon, TextStyle, SettingToggle, Checkbox } from '@shopify/polaris';
import { ToolsMajorMonotone, DragHandleMinor } from '@shopify/polaris-icons';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ModalOptionDetail from './ModalOptionDetail';

export default function Dashboard() {

    const [items, setItem] = useState(['Color', 'Size', 'Weight']);
    const [active, setActive] = useState(false);
    const [activeModal, setActiveModal] = useState(false);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItem(arrayMove(items, oldIndex, newIndex))
    };

    const handleActiveModal = useCallback(() => {
        setActiveModal(!activeModal);
    });

    const handleEnableApp = useCallback(() => {
        setActive(!active);
    });

    const DragHandle = sortableHandle(() => <Icon source={DragHandleMinor} />);

    const SortableItem = SortableElement(({ value }) => {
        return (
            <tr className="Polaris-DataTable__TableRow">
                <td><DragHandle></DragHandle></td>
                <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn" scope="row">{value} <a className="affects_product" href="integrate">(affects only 1 product)</a></th>
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
                        <a onClick={handleActiveModal} data-fancybox data-type="iframe" className="Polaris-Button resource-modal" >
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

    const contentStatus = active ? 'Disable' : 'Enable';

    const textStatus = active ? 'enabled' : 'disabled';

    return (
        <div id="dashboardPage">
            <Page title="Dashboard">
                <Layout>
                    <Layout.Section>
                        <SettingToggle
                            action={{
                                content: contentStatus,
                                onAction: handleEnableApp,
                            }}
                            enabled={active}
                        >
                            This setting is <TextStyle variation="strong">{textStatus}</TextStyle>.
                                 </SettingToggle>
                    </Layout.Section>
                </Layout>

                <div className="mt-20">
                    <Layout>
                        <Layout.Section>
                            <Card title="Product options" sectioned>
                                <table className="Polaris-DataTable__Table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header" scope="col"><strong>Option</strong></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--header" scope="col"><strong>Display style</strong></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--header" scope="col">Config</th>
                                        </tr>
                                    </thead>
                                    <SortableList useDragHandle={true} items={items} onSortEnd={onSortEnd} />
                                </table>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </div>

                <ModalOptionDetail 
                active={activeModal}
                handleActiveModal={handleActiveModal}
                ></ModalOptionDetail>
            </Page>
        </div>
    );
}