import React from 'react';
import "./SideBar.css"
import "../SideBarCard/SideBarCard.css"
import SideBarCard from "../SideBarCard/SideBarCard";
import categoryData from "../../data/categoryData"


function SideBar(){

    return (

        <aside className="sidebar">
            {categoryData.map(item => {
                return (
                    <SideBarCard
                        key={item.id}
                        {...item}
                    />
                )
            })}
        </aside>

    );
};

export default SideBar;