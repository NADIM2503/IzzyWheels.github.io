import React from "react-dom";
import { NavLink } from "react-router-dom";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarNew = ()=>{
return(
    <>
  
    <Navbar className="navbar " bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="nav-icon pt-0" href="#home">
          <img src="https://static.wixstatic.com/media/38036e_1802fb586116482a8551a0f8a69250f4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Izzy%20Wheels%20Logo%20Blue.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink to="/" className={'nav-link nav-text'} >Home</NavLink>
            <NavLink to="/Store" className={'nav-link nav-text'} >Store</NavLink>
            <NavLink to="/Contact" className={'nav-link nav-text'} >Public Speaking</NavLink>
            <NavLink to="/Cart" className={'nav-link nav-text'}>
            <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
)
}

export default NavbarNew;