import { Actiontype } from "../contacts/action-type"

const initialState = {
    product: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontype.SET_PRODUCTS:
            return { ...state, product: payload }
        default: return state
    }
}