import React from "react";
import "./OrderMethod.css";
import dineIn from "../../../assets/dineIn.png";
import takeAway from "../../../assets/takeAway.png";
import { useNavigate } from "react-router-dom";

function OrderMethod() {
  const navigate = useNavigate();

  const handleDineInClick = () => {
    localStorage.setItem("orderMethod", "dineIn");
    navigate("/burgers");
    window.location.reload();
  };

  const handleTakeAwayClick = () => {
    localStorage.setItem("orderMethod", "takeAway");
    navigate("/burgers");
    window.location.reload();
  };

  return (
    <div>
      <h1 className="center">Where will you be eating today?</h1>
      <div className="container">
        <div className="button-border" onClick={handleDineInClick}>
          <div className="button-text">DINE IN</div>
          <img className="button-image" src={dineIn} alt="logo" />
        </div>
        <div className="button-border" onClick={handleTakeAwayClick}>
          <div className="button-text">TAKE AWAY</div>
          <img className="button-image" src={takeAway} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default OrderMethod;
