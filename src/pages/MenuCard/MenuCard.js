import React, {useState} from "react";
import MenuCardModal from "../MenuCardModal/MenuCardModal.js";
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
        addToCart({ title, price });
    }
    return(
        <>
            <Button onClick={handleShow} className="menu-card">
                {isShown && (
                    <div>
                        <MenuCardModal title={props.title} image={imgPath} price={props.price}/>
                    </div>
                )}


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
                            <h1>Przyciski</h1>
                            <p>{title}</p>
                            <p>{price}</p>
                            <Button onClick={() => addToCart(price)}>Dodaj do koszyka</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
</>
    )}
export default MenuCard;