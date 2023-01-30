import React, {useEffect, useState} from 'react';
import '../OrderMethod/OrderMethod.css';
import cardImg from "../../assets/card.png"
import cashImg from "../../assets/cash-removebg-preview.png"
import {useNavigate} from "react-router-dom";

function AdminPageMain() {
    const navigate = useNavigate();

    const handleProductsClick = () => {
        navigate("/adminedit");
        window.location.reload();
    }

    const handleReportsClick = () => {
        navigate("/adminreports");
        window.location.reload();
    }

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 className="center">Hello boss how are you today?</h1>
            <h1 className="center">Current time: {time}</h1>
            <div className="container">
                <div className="button-border" onClick={handleProductsClick}>
                    <div className="button-text mb-52">VIEW PRODUCTS</div>
                </div>
                <div className="button-border" onClick={handleReportsClick}>
                    <div className="button-text mb-52">REPORTS</div>
                </div>
            </div>
        </div>
    );
}

export default AdminPageMain;