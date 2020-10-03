import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const MenuGroupItem = ({ id, name, imageLink }) => (
    <Link to={`/menu-group/${id}`}>
        <Styled.MenuGroupItem
            style={{ width: 300 }}
            cover={<img alt="group-menu-item" src={imageLink} />}
        >
            <Meta title={name} />
        </Styled.MenuGroupItem>
    </Link>
);

MenuGroupItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
};

export default MenuGroupItem;
