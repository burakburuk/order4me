import { menuGroups } from './menu/mockData';
import { getBasket } from '../utils/storageUtils';

const basket = getBasket();

export default {
    app: {},
    menu: menuGroups,
    basket,
};
