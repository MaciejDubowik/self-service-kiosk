import React from "react";
import { Link } from 'react-router-dom';

function SideBarCard(props){
    return(
        <Link to={props.href}>
            <div className="card">
                <img src={`/img/${props.img}`} alt="" className="card--image"/>
                <h1 className="card--title">{props.title}</h1>
            </div>
        </Link>
    )
}
export default SideBarCard;