import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import "./components/SideBar/SideBar.css";
import Burgers from "./pages/ProductsPages/Burgers/Burgers";
import Chicken from "./pages/ProductsPages/Chicken/Chicken";
import Drinks from "./pages/ProductsPages/Drinks/Drinks";
import FriesAndSides from "./pages/ProductsPages/FriesAndSides/FriesAndSides";
import Sweets from "./pages/ProductsPages/Sweets/Sweets";
import Wraps from "./pages/ProductsPages/Wraps/Wraps";
import ShoppingCart from "./pages/OutroPages/ShoppingCart/ShoppingCart";

import { CartContext } from "./context/CardContext";
import Welcome from "./pages/IntroPages/Welcome/Welcome";
import OrderMethod from "./pages/IntroPages/OrderMethod/OrderMethod";
import AdminPage from "./pages/AdminPages/AdminPage";
import PaymentMethod from "./pages/OutroPages/PaymentMethod/PaymentMethod";
import Confirmation from "./pages/OutroPages/Confirmation/Confirmation";
import AdminPageReports from "./pages/AdminPages/AdminPageReports";
import AdminPageMain from "./pages/AdminPages/AdminPageMain";

function App() {
  const path = window.location.pathname;
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <Header />
        {path !== "/shoppingCart" &&
          path !== "/" &&
          path !== "/adminreports" &&
          path !== "/confirmation" &&
          path !== "/review" &&
          path !== "/paymentMethod" &&
          path !== "/adminedit" &&
          path !== "/orderMethod" &&
          path !== "/admin" && <SideBar />}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/orderMethod" element={<OrderMethod />} />
          <Route path="/burgers" element={<Burgers />} />
          <Route path="/chicken" element={<Chicken />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/friesAndSides" element={<FriesAndSides />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/wraps" element={<Wraps />} />
          <Route
            path="/shoppingCart"
            element={
              <CartContext.Provider value={{ cart, setCart }}>
                <ShoppingCart />
              </CartContext.Provider>
            }
          />
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
