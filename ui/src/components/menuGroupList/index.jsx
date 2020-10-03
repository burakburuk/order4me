import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import * as Styled from './style';

const MenuGroupList = ({ children }) => (
    <Styled.MenuGroupsWrapper>
        <Logo />
        <Styled.MenuTitle>Menu</Styled.MenuTitle>
        <Styled.MenuGroups>{children}</Styled.MenuGroups>
    </Styled.MenuGroupsWrapper>
);

MenuGroupList.propTypes = {
    children: PropTypes.any.isRequired,
};

export default MenuGroupList;
