import React, {useEffect, useMemo, useState} from 'react';
import MenuCard from '../MenuCard/MenuCard';
import { useCart } from './CardContext';
import { useContext } from 'react';
import { CartContext } from './CardContext';
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./ShoppingCartStyle.css";


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
    const handleClick = () => {
        navigate("/burgers");
        window.location.reload();
    }

    return (
        <div>
            <Button variant="outline-success" className="mt-5 ml-20" size="lg"  onClick={handleClick}>Back</Button>
            <Button variant="outline-success" className="float-right mt-5" size="lg" onClick={handleShow}>
                Confirm the order and proceed to payment
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to continue?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUnderstoodClick} >Go to payment</Button>
                </Modal.Footer>
            </Modal>
            <Cart items={cart} />
        </div>
    );
}

function Cart({ items }) {
    const { cart, setCart } = useContext(CartContext);
    const total = useMemo(() => items.reduce((acc, item) => acc + item.price, 0), [items]);
    const removeFromCart = (item) => {
        setCart(cart.filter(i => i !== item));
        localStorage.setItem('cart', JSON.stringify(cart.filter(i => i !== item)));
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">Cart</h2>
            <ul className="cart-list">
                {items.map((item) => (
                    <li className="cart-list-item">
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
