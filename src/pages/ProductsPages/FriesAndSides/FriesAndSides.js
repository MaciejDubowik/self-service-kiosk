import React from "react";
import "../../../assets/menuArrangement.css";
import "../../../components/MenuCard/menuCard.css";
import MenuCard from "../../../components/MenuCard/MenuCard";
import friesAndSidesData from "../../../data/friesAndSidesData";


function Drinks() {
    return (
        <div className="main-section">
            {friesAndSidesData.map((item) => {
                return <MenuCard key={item.id} {...item} />;
            })}
        </div>
    );
}
export default Drinks;
