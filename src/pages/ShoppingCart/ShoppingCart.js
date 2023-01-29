import React, {useEffect, useState} from 'react';
import MenuCard from '../MenuCard/MenuCard';
import { useCart } from './CardContext';
import { useContext } from 'react';
import { CartContext } from './CardContext';
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function ShoppingCart() {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();
    useEffect(() => {
        const currentCart = JSON.parse(localStorage.getItem('cart') || "[]");
        setCart(currentCart);
    }, []);

    const addToCart = (item) => {
        setCart([...cart, item]);
        localStorage.setItem('cart', JSON.stringify([...cart, item]));
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUnderstoodClick = () => {
        handleClose();
        navigate("/paymentMethod");
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUnderstoodClick} >Understood</Button>
                </Modal.Footer>
            </Modal>
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
