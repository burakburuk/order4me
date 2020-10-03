import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar, Button } from 'antd';
import { toPrice } from './../../utils/price';
import * as Styled from './style';

const MenuItem = ({ menuItem, onSelect, onAdd }) => (
    <List.Item
        key={menuItem.id}
        actions={[
            <Button type="primary" onClick={() => onAdd(menuItem)}>
                Add
            </Button>,
        ]}
    >
        <Styled.MenuItem
            onClick={() => onSelect(menuItem.id)}
            avatar={<Avatar src={menuItem.imageLink} />}
            title={menuItem.name}
            description={`Price: € ${toPrice(menuItem.price)} - Details: ${
                menuItem.details
            }`}
        />
    </List.Item>
);

MenuItem.propTypes = {
    menuItem: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default MenuItem;
