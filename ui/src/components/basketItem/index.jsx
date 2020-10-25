import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { toPrice } from './../../utils/price';

const BasketItem = ({ basketItem, onRemove, onDecrease, onIncrease }) => (
    <List.Item
        key={basketItem.id}
        actions={[
            <Button
                type="secondary"
                shape="circle"
                icon={<MinusOutlined />}
                size="small"
                onClick={() => onDecrease(basketItem)}
            />,
            <span>{basketItem.count}</span>,
            <Button
                type="secondary"
                shape="circle"
                icon={<PlusOutlined />}
                size="small"
                onClick={() => onIncrease(basketItem)}
            />,
            <Button type="secondary" onClick={() => onRemove(basketItem)}>
                Remove
            </Button>,
        ]}
    >
        <List.Item.Meta
            avatar={<Avatar src={basketItem.imageLink} />}
            title={basketItem.name}
            description={`Total: € ${toPrice(basketItem.totalPrice)}`}
        />
    </List.Item>
);

BasketItem.propTypes = {
    basketItem: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired,
};

export default BasketItem;
