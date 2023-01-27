import { createContext, useState } from 'react';

export const CartContext = createContext();

export function useCart() {
    const [cart, setCart] = useState([]);
    function addToCart(item) {
        let currentCart = JSON.parse(localStorage.getItem('cart') || "[]");

        currentCart.push(item);
        localStorage.setItem('cart', JSON.stringify(currentCart));
        console.log(cart);
    }

    return { cart, addToCart };
    }