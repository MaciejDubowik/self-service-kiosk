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
    <div>
      <Header />
      <SideBar />
      {/*<Burgers />*/}
      {/*  <Chicken />*/}
      {/*  <Drinks />*/}
      {/*  <FriesAndSides />*/}
      {/*  <Sweets />*/}
        <Wraps />
    </div>

  );
}

export default App;
