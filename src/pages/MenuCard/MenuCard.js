import React, {useState} from "react";
import {ButtonToolbar, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useCart } from '../ShoppingCart/CardContext';

function MenuCard(props){
    const imgPath = `${props.directory}/${props.img}`;
    const [isShown, setIsShown] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const title = props.title;
    const price = props.price;
    const { addToCart } = useCart();
    const handleClick = event => {
        setIsShown(current => !current);
    };
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return(
        <>
            <Button onClick={handleShow} className="menu-card">
                <img src={imgPath} alt="" className="menu-card-image"/>
                <div className="menu-card-text">
                    <div className="menu-card-title">{props.title}</div>
                    <div className="menu-card-price">${props.price}</div>
                </div>
            </Button>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="main-container">
                        <div className="modal-image">
                            <img src={imgPath} alt="" className="modal-image"/>
                        </div>
                        <div className="button-section">
                            <button> test</button>
                            <h1>Przyciski</h1>
                            <p>{title}</p>
                            <p>{price}</p>
                            <Button onClick={() => addToCart({title, price})}>Dodaj do koszyka</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )}
export default MenuCard;