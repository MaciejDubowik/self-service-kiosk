import React from "react";

function MenuCard(props){
    return(
        <div className="menu-card">
            <img src={`/img/burgers/${props.img}`} alt="" className="menu-card-image"/>
            <div className="menu-card-text">
            <div className="menu-card-title">{props.title}</div>
            <div className="menu-card-price">${props.price}</div>
            </div>
        </div>

    )
}
export default MenuCard;