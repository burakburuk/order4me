import React from 'react';
import { connect } from 'react-redux';
import MenuGroupList from '../../components/menuGroupList';
import MenuGroupItem from '../../components/menuGroupItem';
import { getMenuGroup } from '../../state/menu/selectors';

const getMenuGroupItems = (menuGroups) =>
    menuGroups.map((menuGroup) => (
        <MenuGroupItem
            key={`menu-group-item-${menuGroup.id}`}
            id={menuGroup.id}
            name={menuGroup.name}
            imageLink={menuGroup.imageLink}
        />
    ));

const MenuGroups = ({ menuGroups }) => (
    <MenuGroupList>{getMenuGroupItems(menuGroups)}</MenuGroupList>
);

const mapStateToProps = (state) => ({
    menuGroups: getMenuGroup(state),
});

export default connect(mapStateToProps, null)(MenuGroups);
