import { combineReducers } from 'redux';
import products from './reducers/productsReducer';
const combinedReducer = combineReducers({
    products
});

const initialState = combinedReducer({}, {}, {}, {});

const rootReducer = (state, action) => {
    // if (action.type === AUTH_LOGOUT) {
    //     state = initialState;
    // }
    return combinedReducer(state, action);
};

export default rootReducer;