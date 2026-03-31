// src/pages/Cart.js
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, removeFromCart, addToCart, reduceFromCart} = useCart();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const images = require.context('../assets/images', true);


    if (cartItems.length === 0) {
        return (
            <main className="p-5 text-center">
                <div className="text-center py-12"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-16 h-16 text-gray-300 mx-auto mb-4"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg><p className="text-gray-500">Your cart is empty</p></div>
                <Link to="/" className="text-blue-500 underline mt-4 inline-block">
                    <button className="w-full bg-blue-500 text-white m-2 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">Continue Shopping</button>
                </Link>
            </main>
        );
    }

    return (
        <main className="max-w-3xl mx-auto p-5">
            <h2 className="text-3xl font-bold mb-5 dark:text-white">Shopping Cart</h2>
            {cartItems.map(item => (
                <div className="flex gap-4 bg-gray-100 p-4 rounded-lg m-2 dark:bg-gray-600">
                    <img src={images(`./${item.image}`)} alt="Premium Wireless Headphones" className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-1">{item.name}</h3>
                        <p className="text-blue-600 dark:text-red-400 font-bold mb-2">${(item.price * item.quantity).toFixed(2)}</p>
                        <div className="flex items-center gap-2">
                            <button onClick={() => item.quantity === 1 ? removeFromCart(item.id) : reduceFromCart(item)} className="bg-gray-200 p-1 rounded hover:bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus w-4 h-4">
                                    <path d="M5 12h14"></path>
                                </svg>
                            </button>
                            <span className="w-8 text-center font-semibold dark:text-gray-200">{item.quantity}</span>
                            <button onClick={() => addToCart(item)} className="bg-gray-200 p-1 rounded hover:bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-4 h-4">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                            </button>
                            <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500 hover:text-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 lucide-trash-2 w-4 h-4">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="text-right mt-4 text-xl font-bold text-blue-600  dark:text-white">
                Total: ${total.toFixed(2)}
            </div>
            <div className='justify-between items-center flex'>
                <Link to="/">
                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">Continue Shopping</button>
                </Link>
                <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">Proceed to Checkout</button>
            </div>
        </main>
    );
};