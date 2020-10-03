/* eslint-disable max-len */
import { Record, List } from 'immutable';

export const MenuGroupRecord = Record({
    id: '',
    name: '',
    imageLink: '',
    menuList: List(),
});

export const MenuItemRecord = Record({
    id: '',
    name: '',
    price: 0,
    details: '',
    imageLink: '',
});
