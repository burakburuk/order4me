import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';
import { toPrice } from './../../utils/price';
import * as Styled from './style';

const MenuItemDetails = ({ menuItem, onAddToBasket }) => (
    <Styled.Wrapper>
        <h3>{menuItem.name}</h3>
        <div>
            <Image preview={false} src={menuItem.imageLink} />
        </div>
        <Styled.Details>
            <b>Ingredients: </b>
            <i>{menuItem.details}</i>
            <p>{`Price: € ${toPrice(menuItem.price)}`}</p>
        </Styled.Details>
        <Styled.AddButton
            type="primary"
            onClick={() => onAddToBasket(menuItem)}
        >
            Add
        </Styled.AddButton>
    </Styled.Wrapper>
);

MenuItemDetails.propTypes = {
    menuItem: PropTypes.object.isRequired,
    onAddToBasket: PropTypes.func.isRequired,
};

export default MenuItemDetails;
