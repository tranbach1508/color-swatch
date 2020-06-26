import React, { Component } from 'react';
import { useCallback, useRef, useState } from 'react';
import { Page, Layout, Card, Icon, TextStyle, SettingToggle, Select } from '@shopify/polaris';
import { ToolsMajorMonotone, DragHandleMinor } from '@shopify/polaris-icons';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ModalOptionDetail from './ModalOptionDetail';

export default function Dashboard() {

    const [items, setItem] = useState([
        {
            name: 'Color',
            value: 'color'
        },
        {
            name: 'Size',
            value: 'size'
        },
        {
            name: 'Weight',
            value: 'weight'
        },
    ]);
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

    const [selectedDisplayStyle, setSelectedDisplayStyle] = useState({
        color: 1,
        size: 1,
        weight: 1
    });

    const handleSelectChange = (value,option) =>{
        setSelectedDisplayStyle({
            ...selectedDisplayStyle,
            [option]: value
        })
    };

    const options = [
        { label: 'Color or custom image swatch', value: '1' },
        { label: 'Automated variant image swatch', value: '2' },
        { label: 'Button', value: '3' },
        { label: 'Dropdown list', value: '4' },
    ];
    // const options_size = [
    //     { label: 'Color or custom image swatch', value: '1' },
    //     { label: 'Automated variant image swatch', value: '2' },
    //     { label: 'Button', value: '3' },
    //     { label: 'Dropdown list', value: '4' },
    // ];
    // const options_weight = [
    //     { label: 'Color or custom image swatch', value: '1' },
    //     { label: 'Automated variant image swatch', value: '2' },
    //     { label: 'Button', value: '3' },
    //     { label: 'Dropdown list', value: '4' },
    // ];

    const DragHandle = sortableHandle(() => <Icon source={DragHandleMinor} />);

    const SortableItem = SortableElement((option) => {
        return (
            <tr className="Polaris-DataTable__TableRow">
                <td><DragHandle></DragHandle></td>
                <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn" scope="row">{option.value.name} <a className="affects_product" href="integrate">(affects only 1 product)</a></th>
                <td className="Polaris-DataTable__Cell">
                    <Select
                        options={options}
                        onChange={(value) => handleSelectChange(value,option.value.value)}
                        value={selectedDisplayStyle[option.value.value]}
                    />
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
                    <SortableItem key={`item-${value.value}`} index={index} value={value} />
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
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--header" scope="col"><strong>Config</strong></th>
                                        </tr>
                                    </thead>
                                    <SortableList useDragHandle={true} items={items} onSortEnd={onSortEnd} lockAxis="y" />
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