import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import * as Styled from './style';
import { Row, Col, Divider } from 'antd';

const MenuGroupList = ({ children }) => (
    <Styled.MenuGroupsWrapper>
         <Row>
            <Col span={24}>
                <Logo />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Divider>Menu</Divider>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
            {children}
        </Row>
    </Styled.MenuGroupsWrapper>
);

MenuGroupList.propTypes = {
    children: PropTypes.any.isRequired,
};

export default MenuGroupList;
