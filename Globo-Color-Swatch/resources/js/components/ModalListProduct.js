import React, { Component, useState } from 'react';

export default function ModalListProduct() {
    const [active, setActive] = useState(true);
    const [listProduct,setListProduct] = useState([]);

    const handleChange = useCallback(() => setActive(!active), [active]);
    return (
        <Modal
            open={active}
            onClose={handleChange}
            title="Reach more shoppers with Instagram product tags"
            primaryAction={{
                content: 'Add Instagram',
                onAction: handleChange,
            }}
            secondaryActions={[
                {
                    content: 'Learn more',
                    onAction: handleChange,
                },
            ]}
        >
            <Modal.Section>
                <TextContainer>
                    <p>
                        Use Instagram posts to share your products with millions of
                        people. Let shoppers buy from your store without leaving
                        Instagram.
            </p>
                </TextContainer>
            </Modal.Section>
        </Modal>
    );
}
