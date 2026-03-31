import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const addToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            product: product
        })
    }

    const reduceFromCart = (product) => {
        dispatch({
            type: "REDUCE_FROM_CART",
            product: product
        })
    }

    const removeFromCart = (id) => {
        dispatch({
            type: "DELETE_FROM_CART",
            id: id
        })
    }

    const value = {
        cartItems: cartItems,
        cartCount: cartItems.reduce((count, item) => count + item.quantity, 0),
        addToCart,
        reduceFromCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}