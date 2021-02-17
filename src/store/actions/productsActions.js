import {
    PRODUCT_LIST
} from '../action_types/productsActionTypes'

export const list = (payload) => {
    return {
        type: PRODUCT_LIST,
        payload
    }
}