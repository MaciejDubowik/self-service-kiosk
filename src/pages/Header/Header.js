import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './header.css'
import Logo from './logo-mcDonalds-removebg-preview.png'

function Header() {
    return (
        <>
            <Navbar className="nav">
                    <img src={Logo} className="img"></img>
            </Navbar>
        </>
    );
}
export default Header;