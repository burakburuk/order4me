import initialState from '../state';
import constants from '../../utils/constants';

const appReducer = (state = initialState.app, action) => {
    switch (action.type) {
        case constants.startApplication:
            return state;
        default:
            return state;
    }
};

export default appReducer;
