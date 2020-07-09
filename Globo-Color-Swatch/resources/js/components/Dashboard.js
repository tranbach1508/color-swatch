import React, { Component, useEffect } from 'react';
import { useCallback, useRef, useState } from 'react';
import { Page, Layout, Card, Icon, Button, Select } from '@shopify/polaris';
import { ToolsMajorMonotone, DragHandleMinor } from '@shopify/polaris-icons';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import axios from 'axios';
import { Switch } from 'antd';
import arrayMove from 'array-move';
import ModalOptionDetail from './ModalOptionDetail';

export default function Dashboard() {
    const [change, setChange] = useState(false);
    const [items, setItem] = useState([]);
    const [activeModal, setActiveModal] = useState({
        field: '',
        display_style: ''
    });
    const [enableCollection, setEnableCollection] = useState({});

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItem(arrayMove(items, oldIndex, newIndex));
        setChange(true);
    };

    const handleEnableCollection = (field) => {
        setEnableCollection({
            ...enableCollection,
            [field]: !enableCollection[field]
        });
        setChange(true);
    }

    const handleActiveModal = useCallback((field) => {
        setActiveModal({
            field: field,
            display_style: selectedDisplayStyle[field.name]
        });
    });

    const closeModal = useCallback(() => {
        setActiveModal({
            field: "",
            display_style: ""
        });
    });

    const [selectedDisplayStyle, setSelectedDisplayStyle] = useState({});

    const handleSelectChange = (value, option) => {
        setSelectedDisplayStyle({
            ...selectedDisplayStyle,
            [option]: value
        });
        setChange(true);
    };

    const options = [
        { label: 'Color or custom image swatch', value: 1 },
        { label: 'Automated variant image swatch', value: 2 },
        { label: 'Button', value: 3 },
        { label: 'Dropdown list', value: 4 },
    ];

    useEffect(() => {
        const getOptions = async () => {
            const result = await axios(
                'http://localhost:88/Globo-Color-Swatch/public/api/options',
            );
            setItem(result.data.option);
            console.log(result.data.option);
            
            var display_style = [];
            var enable_collection = [];
            Object.values(result.data.option).map((option,index) =>{
                display_style[option.name] = option.display_style;
            });
            display_style = Object.assign({}, display_style);
            Object.values(result.data.option).map((option,index) =>{
                enable_collection[option.name] = JSON.parse(option.settings).status;
            });
            enable_collection = Object.assign({}, enable_collection);
            setEnableCollection(enable_collection);
        }
        getOptions();
    }, []);

    const DragHandle = sortableHandle(() => <Icon source={DragHandleMinor} />);

    const SortableItem = SortableElement((option) => {
        return (
            <tr className="Polaris-DataTable__TableRow">
                <td style={{cursor: 'grab'}}><DragHandle></DragHandle></td>
                <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn" scope="row">{option.value.name} <a className="affects_product" href="integrate">(affects only {option.value.products_count} product)</a></th>
                <td className="Polaris-DataTable__Cell">
                    <Select
                        options={options}
                        onChange={(value) => handleSelectChange(value, option.value.name)}
                        value={selectedDisplayStyle[option.value.name] ? selectedDisplayStyle[option.value.name] : option.value.display_style}
                    />

                </td>
                <td className="Polaris-DataTable__Cell">
                    <Switch checked={enableCollection[option.value.name]} onChange={() => handleEnableCollection(option.value.name)} />
                </td>
                <td className="Polaris-DataTable__Cell">
                    <div className="Polaris-ButtonGroup__Item">
                        <a onClick={() => selectedDisplayStyle[option.value.name] != 2 && selectedDisplayStyle[option.value.name] != 4 ? handleActiveModal(option.value): ''} data-fancybox data-type="iframe" className={selectedDisplayStyle[option.value.name] != 2 && selectedDisplayStyle[option.value.name] != 4 ? "Polaris-Button resource-modal" : "Polaris-Button resource-modal disabled"}>
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
                {items.map((option, index) => (
                    <SortableItem key={`item-${option.name}`} index={index} value={option} />
                ))}
            </tbody>
        );
    });

    return (
        <div id="dashboardPage">
            <Page title="Dashboard">
                <div>
                    <Layout>
                        <Layout.Section>
                            <Card title="Product options" sectioned>
                                <table className="Polaris-DataTable__Table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header" scope="col"><strong>Option</strong></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--header" scope="col"><strong>Display style</strong></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--header" scope="col"><strong>Show in collection</strong></th>
                                            <th data-polaris-header-cell="true" className="Polaris-DataTable__Cell Polaris-DataTable__Cell--header" scope="col"><strong>Config</strong></th>
                                        </tr>
                                    </thead>
                                    <SortableList useDragHandle={true} items={items} onSortEnd={onSortEnd} lockAxis="y" />
                                </table>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </div>
                <div className="flex-end mt-10"><Button primary disabled={change ? '' : 'disabled'} >Save</Button></div>
                <ModalOptionDetail
                    active={activeModal.field != "" ? true : false}
                    field={activeModal.field}
                    displayStyle={activeModal.display_style}
                    handleActiveModal={handleActiveModal}
                    closeModal={closeModal}
                ></ModalOptionDetail>
            </Page>
        </div>
    );
}
