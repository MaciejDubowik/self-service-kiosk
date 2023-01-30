import React, {useState} from 'react';
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
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

import { CartContext } from './pages/ShoppingCart/CardContext';
import Welcome from "./pages/Welcome/Welcome";
import OrderMethod from "./pages/OrderMethod/OrderMethod";
import AdminPage from "./pages/Admin/AdminPage";
import PaymentMethod from "./pages/PaymentMethod/PaymentMethod";
import Confirmation from "./pages/Confirmation/Confirmation";
import AdminPageEdit from "./pages/Admin/AdminPageEdit";
import AdminPageReports from "./pages/Admin/AdminPageReports";
import AdminPageMain from "./pages/Admin/AdminPageMain";

function App() {
    const path = window.location.pathname;
    const [cart, setCart] = useState([]);
    return (
        <BrowserRouter>
            <div>
                <Header />
                {path !== '/shoppingCart' && path !== '/' && path !== '/adminreports' && path !== '/confirmation' && path !== '/review' && path !== '/paymentMethod'  && path !== '/adminedit' && path !== '/orderMethod' && path !== '/admin'&& <SideBar />}
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/orderMethod" element={<OrderMethod />} />
                    <Route path="/burgers" element={<Burgers />} />
                    <Route path="/chicken" element={<Chicken />} />
                    <Route path="/drinks" element={<Drinks />} />
                    <Route path="/friesAndSides" element={<FriesAndSides />} />
                    <Route path="/sweets" element={<Sweets />} />
                    <Route path="/wraps" element={<Wraps />} />
                    {/*<Route path='/admin' element={<AdminPage />} />*/}
                    <Route path="/shoppingCart" element={        <CartContext.Provider value={{ cart, setCart }}>
                        <ShoppingCart />
                    </CartContext.Provider>} />
                    <Route path="/paymentMethod" element={<PaymentMethod />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path="/adminedit" element={<AdminPage />} />
                    <Route path="/adminreports" element={<AdminPageReports />} />
                    <Route path="/admin" element={<AdminPageMain />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
