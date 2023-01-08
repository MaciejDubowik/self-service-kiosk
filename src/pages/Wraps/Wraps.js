import React from "react";
import "../../assets/menuArrangement.css";
import "../MenuCard/menuCard.css";
import MenuCard from "../MenuCard/MenuCard";
import wrapsData from "../../data/wrapsData";

function Sweets() {
    return (
        <div className="main-section">
            {wrapsData.map((item) => {
                return <MenuCard key={item.id} {...item} />;
            })}
        </div>
    );
}
export default Sweets;
