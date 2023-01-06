import React from "react";
import "./burgers.css"
import "../MenuCard/menuCard.css"
import burgersData from "../../data/burgersData";
import MenuCard from "../MenuCard/MenuCard";


function Burgers(props){
    return (

        <div className="main-section">
            {burgersData.map(item => {
                return (
                    <MenuCard
                        key={item.id}
                        {...item}
                    />
                )
            })}

        </div>

    )
}
export default Burgers;