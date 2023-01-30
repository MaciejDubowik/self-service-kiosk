import React from "react";
import "../../../assets/menuArrangement.css";
import "../../../components/MenuCard/menuCard.css";
import MenuCard from "../../../components/MenuCard/MenuCard";
import sweetsData from "../../../data/sweetsData";

function Sweets() {
  return (
    <div className="main-section">
      {sweetsData.map((item) => {
        return <MenuCard key={item.id} {...item} />;
      })}
    </div>
  );
}
export default Sweets;
