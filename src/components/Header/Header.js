import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './header.css'
import Logo from './logo-mcDonalds-removebg-preview.png'
import {Button} from "reactstrap";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/shoppingCart");
        window.location.reload();
    }
    return (
        <>
            <Navbar className="nav">
                    <img src={Logo} className="img"></img>
                    <Button color="outline-light" size="lg" className="float-right" onClick={handleClick}>Shopping Cart</Button>
            </Navbar>
        </>
    );
}
export default Header;