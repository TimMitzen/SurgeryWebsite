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
      <Nav.Link href="/SurgeryWebsite/">Home</Nav.Link>
      <Nav.Link href="https://surgery-inventory.herokuapp.com/">Inventory</Nav.Link>
      
        <Nav.Link href="/imaging" component ={Imaging} >Imaging Steps</Nav.Link>
        <Nav.Link href="/video" >Video Conferencing</Nav.Link>
        <Nav.Link href="/drives">Drive Mappings</Nav.Link>
       
        <Nav.Link href="/ricoh">Ricoh</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
)
}
export default NavBar;
