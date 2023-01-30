import React from "react";
import chickenData from "../../../data/chickenData";
import "../../../assets/menuArrangement.css";
import "../../../components/MenuCard/menuCard.css";
import MenuCard from "../../../components/MenuCard/MenuCard";

function Chicken() {
    return (
        <div className="main-section">
            {chickenData.map((item) => {
                return <MenuCard key={item.id} {...item} />;
            })}
        </div>
    );
}
export default Chicken;
