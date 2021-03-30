import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

import Imaging from '../components/Imaging'
import { NavLink } from 'react-router-dom'
const NavBar =() =>{
   return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand className ='welcome' href="#home">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/SurgeryWebsite/">Home</Nav.Link>
      <Nav.Link href="https://surgery-inventory.herokuapp.com/">Inventory</Nav.Link>
      <NavDropdown title="Menu" id="basic-nav-dropdown">
        <Nav.Link href="/imaging" >Imaging Steps</Nav.Link>
        <Nav.Link href="/video">Video Conferencing</Nav.Link>
        <Nav.Link href="/drives">Drive Mappings</Nav.Link>
       
        <Nav.Link href="/ricoh/">Ricoh</Nav.Link>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>)
}
export default NavBar;
