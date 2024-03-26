export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return { ...state, products: action.payload }
        case "ADD_CART":
            return { ...state, cart: [...state.cart, {...action.payload}] }
        case "REMOVE_CART":
            return { ...state, cart: state.cart.filter((prod) => prod.id !== action.payload) }
        default:
            break;
    }
}