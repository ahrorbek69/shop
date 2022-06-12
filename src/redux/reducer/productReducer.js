import { Actiontype } from "../contacts/action-type"

const initialState = {
    product: {
        id: 1,
        title: "Ahrorbek",
        category: "Full-stack developer"
    }
}

export const productReducer = (state = initialState , {type,payload}) => {
    switch(type){
        case Actiontype.SET_PRODUCTS:
            return state
        default: return state
    }
}