import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const NavBar =() =>{
   return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Surgery">Home</Nav.Link>
      <Nav.Link href="https://surgery-inventory.herokuapp.com/">Inventory</Nav.Link>
      <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Imaging">Imaging Steps</NavDropdown.Item>
        <NavDropdown.Item href="/Video">Video Conferencing</NavDropdown.Item>
        <NavDropdown.Item href="/Drives">Drive Mappings</NavDropdown.Item>
       
        <NavDropdown.Item href="/Ricoh">Ricoh</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>)
}
export default NavBar;