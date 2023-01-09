import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./pages/Header/Header";
import SideBar from "./pages/SideBar/SideBar";
import "./pages/SideBar/SideBar.css";
import Burgers from "./pages/Burgers/Burgers";
import Chicken from "./pages/Chicken/Chicken";
import Drinks from "./pages/Drinks/Drinks";
import FriesAndSides from "./pages/FriesAndSides/FriesAndSides";
import Sweets from "./pages/Sweets/Sweets";
import Wraps from "./pages/Wraps/Wraps";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <SideBar />

                <Routes>
                    <Route path="/burgers" element={<Burgers />} />
                    <Route path="/chicken" element={<Chicken />} />
                    <Route path="/drinks" element={<Drinks />} />
                    <Route path="/friesAndSides" element={<FriesAndSides />} />
                    <Route path="/sweets" element={<Sweets />} />
                    <Route path="/wraps" element={<Wraps />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
