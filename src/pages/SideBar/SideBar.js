import React from 'react';
import "./SideBar.css"
import "../SideBarCard/SideBarCard.css"
import SideBarCard from "../SideBarCard/SideBarCard";
import categoryData from "../../data/categoryData"


function SideBar(){

    return (
        <div>
        <section className="sidebar">
            {categoryData.map(item => {
                return (
                    <SideBarCard
                        key={item.id}
                        {...item}
                    />
                )
            })}
        </section>
        </div>
    );
};

export default SideBar;