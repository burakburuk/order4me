import constants from '../../utils/constants';

export const resetBasket = () => ({
    type: constants.resetBasket,
});

export const addItemToBasket = (menuItem) => ({
    type: constants.addItemToBasket,
    menuItem,
});

export const removeItemFromBasket = (menuItem) => ({
    type: constants.removeItemFromBasket,
    menuItem,
});

export const updateBasketItem = ({ id, count, totalPrice }) => ({
    type: constants.updateBasketItem,
    payload: { id, count, totalPrice },
});
