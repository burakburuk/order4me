import { MenuGroupRecord, MenuItemRecord } from './types';
import { List } from 'immutable';

const californiaRolls = new MenuItemRecord({
    id: '1',
    name: 'California rolls',
    details: 'Includes soya',
    price: 3.9,
    imageLink: '/images/california-rolls.jpg',
});

const teriakiChicken = new MenuItemRecord({
    id: '2',
    name: 'Teriaki chicken',
    details: 'Includes gluten',
    price: 6.5,
    imageLink: '/images/teriyaki-chicken.jpg',
});

const mainDishesMenu = List([californiaRolls, teriakiChicken]);

const mainDishes = new MenuGroupRecord({
    id: '1',
    name: 'Main dishes',
    imageLink: '/images/main_dishes.jpg',
    menuList: mainDishesMenu,
});

const desserts = new MenuGroupRecord({
    id: '2',
    name: 'Desserts',
    imageLink: '/images/desserts.jpeg',
});

// mock data is returned until BE is implemented
export const menuGroups = List([mainDishes, desserts]);
