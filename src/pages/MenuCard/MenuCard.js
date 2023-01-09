import React, {useState} from "react";
import MenuCardModal from "../MenuCardModal/MenuCardModal.js";

function MenuCard(props){
    const imgPath = `${props.directory}/${props.img}`;
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
        // {state ? <Home/> : null}
    };
    return(

        <button onClick={handleClick} className="menu-card">
            {isShown && (
                <div>
                    <MenuCardModal prop1={props.title}/>
                </div>
            )}


            <img src={imgPath} alt="" className="menu-card-image"/>
            <div className="menu-card-text">
            <div className="menu-card-title">{props.title}</div>
            <div className="menu-card-price">${props.price}</div>
            </div>

        </button>


    )
}
export default MenuCard;