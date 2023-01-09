import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./menuCardModal.css";

function MenuCardModal(props) {
    const [show, setShow] = useState(true);
    const prop1 = props.prop1;
    return (
        <>
            <Modal className="modal-sizing"
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {prop1}
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default MenuCardModal