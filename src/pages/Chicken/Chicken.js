import React, { useState } from 'react';
import chickenData from "../../data/chickenData";
import "../../assets/menuArrangement.css";
import "../MenuCard/menuCard.css";
import MenuCard from "../MenuCard/MenuCard";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Chicken() {
    const values = [ 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down',true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </div>
    );

}
export default Chicken;
