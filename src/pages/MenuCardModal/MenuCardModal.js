import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./menuCardModal.css";

function MenuCardModal(props) {
    const [show, setShow] = useState(true);
    const [fullscreen, setFullscreen] = useState(true);
    const imgPath = props.image;
    const title = props.title;
    const price = props.price;
    return (
        <>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
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

                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}
export default MenuCardModal