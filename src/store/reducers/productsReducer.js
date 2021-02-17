import {
    PRODUCT_LIST
} from '../action_types/productsActionTypes'


const initialState = {
    data: [],
    totalRows: 0,
};

const products = (state = initialState, { type, payload = null }) => {
    switch (type) {
        case PRODUCT_LIST:
            return list(state, payload);
       
        default:
            return state;
    }
};

function list(state, payload) {
    return { ...state, ...payload };
}

export default products;