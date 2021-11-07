export const ActionTypes ={
    LOGGED:"LOGGED",
    STORE_PRODUCTS : "STORE_PRODUCTS",
    FAVOURITE_PRODUCTS : "FAVOURITE_PRODUCTS",
    SET_PRODUCT : "SET_PRODUCT",
    ADD_TO_CART : "ADD_TO_CART",
    REMOVE_FORM_CART : "REMOVE_FROM_CART", 
    LOGOUT : "LOGOUT"
}

export const setLogged = (data)=>{
    return {
        type : ActionTypes.LOGGED,
        payload : data
    }
}

export const setProducts=(products)=>{
    return{
        type: ActionTypes.STORE_PRODUCTS,
        payload : products
    }
}

export const setFavouiteProducts=(products)=>{
    return{
        type: ActionTypes.FAVOURITE_PRODUCTS,
        payload : products
    }
}

export const setProduct=(product)=>{
    return{
        type: ActionTypes.SET_PRODUCT,
        payload: product
    }
}

export const addToCart = (Product)=>{
    return{
        type : ActionTypes.ADD_TO_CART,
        payload : Product
    }
}

export const removeFromCart =(id)=>{
    return{
        type: ActionTypes.REMOVE_FORM_CART,
        payload :id
    }
}

export const setLogout =(data)=>{
    return{
        type : ActionTypes.LOGOUT,
        payload : data
    }
}