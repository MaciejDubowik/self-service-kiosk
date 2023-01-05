import React from 'react';
import './OrderMethod.css';
import dineIn from "../../assets/dineIn.png"
import takeAway from "../../assets/takeAway.png"

function OrderMethod() {
    return (
        <div className="center">
        <h1 className="text-3xl font-bold center">
            Where will you be eating today?
        </h1>
            <div className="button-border">
                <div className="button-text">
                    DINE IN
                </div>
                <img className="button-image" src={dineIn} alt="logo" />
            </div>

            <div className="button-border">
                <div className="button-text">
                    TAKE AWAY
                </div>
                <img className="button-image" src={takeAway} alt="logo" />
            </div>
        </div>
    )
}
export default OrderMethod;