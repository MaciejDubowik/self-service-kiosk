import React, { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';

function ShoppingCart() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

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

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {items.map((item) => (
                    <li>
                        {item.title} - ${item.price}
                    </li>
                ))}
            </ul>
            <p>Total: ${total}</p>
        </div>
    );
}

export default ShoppingCart;