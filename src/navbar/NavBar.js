import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Imaging from '../components/Imaging'
const NavBar =() =>{
   return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand className ='welcome' href="#home">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Surgery/">Home</Nav.Link>
      <Nav.Link href="https://surgery-inventory.herokuapp.com/">Inventory</Nav.Link>
      <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="/imaging" component={Imaging}>Imaging Steps</NavDropdown.Item>
        <NavDropdown.Item href="/video">Video Conferencing</NavDropdown.Item>
        <NavDropdown.Item href="/drives">Drive Mappings</NavDropdown.Item>
       
        <NavDropdown.Item href="/ricoh">Ricoh</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>)
}
export default NavBar;
