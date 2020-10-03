import { Map } from 'immutable';
import { BasketRecord } from '../state/basket/types';

// localStorage.removeItem('myCat');
// localStorage.clear();

export const setBasket = (basketItemList) => {
    localStorage.setItem('basket', JSON.stringify(basketItemList.toArray()));
};

export const getBasket = () => {
    const basket = JSON.parse(localStorage.getItem('basket'));

    if (basket !== null) {
        const baskets = basket.map(([key, value]) => [
            key,
            new BasketRecord(value),
        ]);
        return Map(baskets);
    }
    return Map();
};
