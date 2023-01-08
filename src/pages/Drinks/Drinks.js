import React from "react";
import drinksData from "../../data/drinksData";
import "../../assets/menuArrangement.css";
import "../MenuCard/menuCard.css";
import MenuCard from "../MenuCard/MenuCard";


function Drinks() {
    return (
        <div className="main-section">
            {drinksData.map((item) => {
                return <MenuCard key={item.id} {...item} />;
            })}
        </div>
    );
}
export default Drinks;
