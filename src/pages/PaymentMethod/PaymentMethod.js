import React from 'react';
import '../OrderMethod/OrderMethod.css';
import cardImg from "../../assets/card.png"
import cashImg from "../../assets/cash-removebg-preview.png"
import {useNavigate} from "react-router-dom";

function PaymentMethod() {
    const navigate = useNavigate();

    const handleCardClick = () => {
        localStorage.setItem('paymentMethod', 'card');
        navigate("/confirmation");
        window.location.reload();
    }

    const handleCashClick = () => {
        localStorage.setItem('paymentMethod', 'cash');
        navigate("/confirmation");
        window.location.reload();
    }

    return (
        <div>
            <h1 className="center">How do you want to pay?</h1>
            <div className="container">
                <div className="button-border" onClick={handleCardClick}>
                    <div className="button-text">CARD</div>
                    <img className="button-image" src={cardImg} alt="logo" />
                </div>
                <div className="button-border" onClick={handleCashClick}>
                    <div className="button-text">CASH</div>
                    <img className="button-image-cash" src={cashImg} alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default PaymentMethod;