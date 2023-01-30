import React from "react";
import drinksData from "../../../data/drinksData";
import "../../../assets/menuArrangement.css";
import "../../../components/MenuCard/menuCard.css";
import MenuCard from "../../../components/MenuCard/MenuCard";


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
