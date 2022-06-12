import { Actiontype } from "../contacts/action-type"

export const setProduct = (products) =>{
    return{
        type: Actiontype.SET_PRODUCTS,
        payload: products
    }
}
export const selectProduct = (product) => {
    return{
        type: Actiontype.SELECT_PRODUCT,
        payload: product
    }
}