export const getBasketTotalAmount = (state) => {
    const reducer = (accumulator, item) => accumulator + item.totalPrice;
    return state.basket.reduce(reducer, 0);
};

export const getGroupedItemList = (state) => state.basket.toList();
