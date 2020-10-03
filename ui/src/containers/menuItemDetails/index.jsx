import React from 'react';
import { connect } from 'react-redux';
import MenuItemDetails from '../../components/menuItemDetails';
import { addItemToBasket } from '../../state/basket/actions';
import { getMenuItemDetails } from '../../state/menu/selectors';

const MenuItemDetailsContainer = ({ menuItem, onAddToBasket }) => (
    <MenuItemDetails menuItem={menuItem} onAddToBasket={onAddToBasket} />
);

const mapStateToProps = (state, ownProps) => ({
    menuItem: getMenuItemDetails(
        state,
        ownProps.menuGroupId,
        ownProps.menuItemId,
    ),
});

const mapDispatchToProps = (dispatch) => ({
    onAddToBasket(menuItem) {
        dispatch(addItemToBasket(menuItem));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuItemDetailsContainer);
