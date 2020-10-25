import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import * as Styled from './style';
import BasketItem from '../basketItem';

const BasketList = ({ basketItemList, onRemove, onDecrease, onIncrease }) => (
    <Styled.ListWrapper>
        <Styled.MenuTitle>Basket</Styled.MenuTitle>
        <List
            dataSource={basketItemList}
            renderItem={(item) => (
                <BasketItem
                    basketItem={item}
                    onRemove={onRemove}
                    onDecrease={onDecrease}
                    onIncrease={onIncrease}
                />
            )}
        ></List>
    </Styled.ListWrapper>
);

BasketList.propTypes = {
    basketItemList: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired,
};

export default BasketList;
