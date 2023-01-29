import React, { useState } from 'react';
import burgersData from '../../data/burgersData';
import chickenData from '../../data/chickenData';
import friesAndSidesData from '../../data/friesAndSidesData';
import sweetsData from '../../data/sweetsData';
import wrapsData from '../../data/wrapsData';
import MenuCard from "../MenuCard/MenuCard";

function AdminPage() {
    const [products, setProducts] = useState(burgersData);
    const [selectedCategory, setSelectedCategory] = useState('burgers');
    const categories = {
        burgers: burgersData,
        chicken: chickenData,
        friesAndSides: friesAndSidesData,
        sweets: sweetsData,
        wraps: wrapsData
    };

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
        setProducts(categories[event.target.value]);
    }

    return (
        <div>
            <h1>List of all products:</h1>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="burgers">Burgers</option>
                <option value="chicken">Chicken</option>
                <option value="friesAndSides">Fries and Sides</option>
                <option value="sweets">Sweets</option>
                <option value="wraps">Wraps</option>
            </select>
            <ul>
                {products.map((item) => {
                    return <MenuCard key={item.id} {...item} />;
                })}
            </ul>
        </div>
    );
}

export default AdminPage;
