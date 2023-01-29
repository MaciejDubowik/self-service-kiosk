import React, { useReducer, useEffect } from 'react';
import '../OrderMethod/OrderMethod.css';

const orderReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { orderNumber: state.orderNumber + 1 };
        default:
            return state;
    }
};

function Confirmation() {
    const storedOrderNumber = parseInt(localStorage.getItem('orderNumber')) || 0;
    const [state, dispatch] = useReducer(orderReducer, { orderNumber: storedOrderNumber });
    const storedPaymentMethod = localStorage.getItem('paymentMethod');
    useEffect(() => {
        localStorage.setItem('orderNumber', state.orderNumber + 1);
    }, [state.orderNumber]);
    return (
        <div>
            <h1 className="center">
                Thank you for placing your order at the McDonald's kiosk! <br /> Enjoy
                your meal.
            </h1>
            <h1 className="center">Payment Method: {storedPaymentMethod}</h1>
            <h2 className="center">Order Number: {state.orderNumber}</h2>
        </div>
    );
}

export default Confirmation;
