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
        Witamy w restauracji McDonalds! <br /><br /><br />
        Kliknij w ekran aby złożyć zamówienie.
      </h1>
      <img className="welcome-photo" src={fries} />
    </div>
      </div>
  );
}
export default Welcome;
