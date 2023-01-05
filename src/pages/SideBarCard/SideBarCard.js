import React from "react";

function SideBarCard(props){
    return(
        <div className="card">
            <img src={`/images/${props.coverImg}`} alt="" className="card--image"/>
            <h1 className="card--title">{props.title}</h1>
        </div>

    )
}
export default SideBarCard;