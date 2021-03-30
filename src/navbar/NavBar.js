import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Imaging from '../components/Imaging'

const NavBar =() =>{
   return(
      <div>
      <Link to = '/imaging' component ={Imaging}>Images</Link>
<Navbar bg="light" expand="lg">
  <Navbar.Brand className ='welcome' href="#home">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown.Item href="/SurgeryWebsite/">Home</NavDropdown.Item>
      <Nav.Link href="https://surgery-inventory.herokuapp.com/">Inventory</Nav.Link>
      
        <NavDropdown.Item href="/imaging" >Imaging Steps</NavDropdown.Item>
        <NavDropdown.Item href="/video">Video Conferencing</NavDropdown.Item>
        <NavDropdown.Item href="/drives">Drive Mappings</NavDropdown.Item>
        <NavDropdown.Item href="/ricoh">Ricoh</NavDropdown.Item>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
)
}
export default NavBar;
