import { BasketRecord } from './types';

export const setMenuItem = (menuItem, menuItemMap) => {
    if (menuItemMap.has(menuItem.id)) {
        const basketRecord = menuItemMap.get(menuItem.id);
        const updatedBasketRecord = basketRecord
            .set('count', basketRecord.count + 1)
            .set('totalPrice', basketRecord.totalPrice + menuItem.price);
        return menuItemMap.set(menuItem.id, updatedBasketRecord);
    }
    return menuItemMap.set(
        menuItem.id,
        new BasketRecord({
            id: menuItem.id,
            name: menuItem.name,
            imageLink: menuItem.imageLink,
            unitPrice: menuItem.price,
            totalPrice: menuItem.price,
            count: 1,
        }),
    );
};
