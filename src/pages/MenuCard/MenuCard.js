import React from "react";

function MenuCard(props){

    const imgPath = `${props.directory}/${props.img}`;

    return(
        <div className="menu-card">
            <img src={imgPath} alt="" className="menu-card-image"/>
            <div className="menu-card-text">
            <div className="menu-card-title">{props.title}</div>
            <div className="menu-card-price">${props.price}</div>
            </div>
        </div>

    )
}
export default MenuCard;