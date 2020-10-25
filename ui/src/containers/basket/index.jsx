import React from 'react';
import { connect } from 'react-redux';
import BasketList from '../../components/basketList';
import {
    removeItemFromBasket,
    updateBasketItem,
} from '../../state/basket/actions';
import { getGroupedItemList } from '../../state/basket/selectors';

const Basket = ({ basketItemList, onRemove, onUpdateBasketItem }) => {
    const handleDecrease = (basketItem) => {
        const updatedCount = basketItem.count - 1;
        if (updatedCount <= 0) {
            onRemove(basketItem);
        } else {
            const updatedTotalPrice =
                basketItem.totalPrice - basketItem.unitPrice;
            onUpdateBasketItem({
                id: basketItem.id,
                count: updatedCount,
                totalPrice: updatedTotalPrice,
            });
        }
    };

    const handleIncrease = (basketItem) => {
        const updatedTotalPrice = basketItem.totalPrice + basketItem.unitPrice;
        onUpdateBasketItem({
            id: basketItem.id,
            count: basketItem.count + 1,
            totalPrice: updatedTotalPrice,
        });
    };

    return (
        <BasketList
            basketItemList={basketItemList}
            onRemove={onRemove}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
        />
    );
};

const mapStateToProps = (state) => ({
    basketItemList: getGroupedItemList(state),
});

const mapDispatchToProps = (dispatch) => ({
    onRemove(basketItem) {
        dispatch(removeItemFromBasket(basketItem));
    },
    onUpdateBasketItem({ id, count, totalPrice }) {
        dispatch(updateBasketItem({ id, count, totalPrice }));
    },
});

export { Basket };
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
