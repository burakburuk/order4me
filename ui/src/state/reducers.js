import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import menuReducer from './menu/reducer';
import basketReducer from './basket/reducer';

export default combineReducers({
    app: appReducer,
    basket: basketReducer,
    menu: menuReducer,
});
