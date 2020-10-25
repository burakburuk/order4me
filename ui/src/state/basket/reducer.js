import { Map } from 'immutable';
import { message } from 'antd';
import initialState from '../state';
import constants from '../../utils/constants';
import { setMenuItem } from './utils';
import { setBasket } from '../../utils/storageUtils';

const basketReducer = (state = initialState.basket, action) => {
    let updatedBasket = state;
    switch (action.type) {
        case constants.resetBasket: {
            setBasket(null);
            updatedBasket = Map();
            break;
        }
        case constants.addItemToBasket: {
            message.success(`${action.menuItem.name} added to basket`);
            updatedBasket = setMenuItem(action.menuItem, state);
            setBasket(updatedBasket);
            break;
        }
        case constants.removeItemFromBasket: {
            updatedBasket = state.filterNot(
                (item) => item.id === action.menuItem.id,
            );
            setBasket(updatedBasket);
            break;
        }
        case constants.updateBasketItem: {
            const { id, count, totalPrice } = action.payload;
            const updatedMenuItem = state
                .get(id)
                .set('count', count)
                .set('totalPrice', totalPrice);
            updatedBasket = state.set(id, updatedMenuItem);
            setBasket(updatedBasket);
            break;
        }
        default:
            return state;
    }
    return updatedBasket;
};

export default basketReducer;
