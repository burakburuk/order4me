import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Col } from 'antd';

const { Meta } = Card;

const MenuGroupItem = ({ id, name, imageLink }) => (
    <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={4}>
        <Link to={`/menu-group/${id}`}>
            <Styled.MenuGroupItem
                cover={<img alt="group-menu-item" src={imageLink} />}
            >
                <Meta title={name} />
            </Styled.MenuGroupItem>
        </Link>
    </Col>
);

MenuGroupItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
};

export default MenuGroupItem;
