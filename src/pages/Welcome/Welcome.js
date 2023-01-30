import React from "react";
import "./WelcomeStyle.css";
import { useNavigate } from "react-router-dom";
import fries from "./fries-lg.jpeg";

function Welcome() {
  const navigate = useNavigate();
  return (
      <div       onClick={() => {
          navigate("/orderMethod");
          window.location.reload();
      }}>
    <div className="container">
    >
      <h1 className="title">
          Welcome to McDonald's restaurant!<br /><br /><br />
          Click on the screen to place an order.
      </h1>
      <img className="welcome-photo" src={fries} />
    </div>
      </div>
  );
}
export default Welcome;
