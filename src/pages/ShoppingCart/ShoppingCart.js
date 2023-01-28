import React, { useEffect } from 'react';
import MenuCard from '../MenuCard/MenuCard';
import { useCart } from './CardContext';
import { useContext } from 'react';
import { CartContext } from './CardContext';

function ShoppingCart() {
    const { cart, setCart } = useContext(CartContext);
    useEffect(() => {
        const currentCart = JSON.parse(localStorage.getItem('cart') || "[]");
        setCart(currentCart);
    }, []);

    const addToCart = (item) => {
        setCart([...cart, item]);
        localStorage.setItem('cart', JSON.stringify([...cart, item]));
    }

    return (
        <div>
            <MenuCard title="Product 1" price={10} onAddToCart={addToCart} />
            <MenuCard title="Product 2" price={20} onAddToCart={addToCart} />
            <Cart items={cart} />
        </div>
    );
}

function Cart({ items }) {
    const total = items.reduce((acc, item) => acc + item.price, 0);
    const { cart, setCart } = useContext(CartContext);
    const removeFromCart = (item) => {
        setCart(cart.filter(i => i !== item));
        localStorage.setItem('cart', JSON.stringify(cart.filter(i => i !== item)));
    }

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {items.map((item) => (
                    <li>
                        {item.title} - ${item.price}
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${total}</p>
        </div>
    );
}

export default ShoppingCart;
