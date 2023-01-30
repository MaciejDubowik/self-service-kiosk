import React from "react";
import "../../../assets/menuArrangement.css";
import "../../../components/MenuCard/menuCard.css";
import burgersData from "../../../data/burgersData";
import MenuCard from "../../../components/MenuCard/MenuCard";

function Burgers(props) {
  return (
    <div className="main-section">
      {burgersData.map((item) => {
        return <MenuCard key={item.id} {...item} />;
      })}
    </div>
  );
}
export default Burgers;
