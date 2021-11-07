import { ActionTypes } from "../Action/ProductAction"

const initialState ={
    products : [],
    product:{},
    favProducts : [],
    cart : [],
    isLogged : false,
    profile : {},
}

const  ProductReducer=(state=initialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.LOGGED : 
            return {...state, isLogged : true, profile: {...state.profile, payload}}
        case ActionTypes.STORE_PRODUCTS:
            return {...state, products : payload}
        case ActionTypes.FAVOURITE_PRODUCTS:
            return {...state, favProducts : [...state.favProducts, payload] }
        case ActionTypes.SET_PRODUCT : 
            return {...state, product :{...state.product, payload}}
        case ActionTypes.ADD_TO_CART : 
            return {...state, cart : [...state.cart , payload]}
        case ActionTypes.REMOVE_FORM_CART :
            const newCart = state.cart.filter((val)=>val.id !== payload)
            return {...state, cart:newCart}
        case ActionTypes.LOGOUT:
            return {...state, isLogged : payload}
        default:
           return state
    }
}
export default ProductReducer