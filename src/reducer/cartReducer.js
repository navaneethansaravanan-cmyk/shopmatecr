export const cartReducer = (cartItems, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const exitingItem = cartItems.find(item => item.id === action.product.id);
            if (exitingItem) {
                return cartItems.map(item =>
                    item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...cartItems, { ...action.product, quantity: 1 }]
        }
        case 'REDUCE_FROM_CART': {
            const exitingItem = cartItems.find(item => item.id === action.product.id);
            if (exitingItem) {
                return cartItems.map(item =>
                    item.id === action.product.id ? { ...item, quantity: item.quantity - 1 } : item
                )
            }
            break;
        }
        case 'DELETE_FROM_CART': {
            return cartItems.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
