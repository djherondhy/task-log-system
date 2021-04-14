import React from 'react';

import {  Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './index.css';

const Header: React.FC = () => {
  return(
    <Navbar className="Nav" expand="lg">
    <Navbar.Brand href="#home">Task Log</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Item as={Link} to ="/" className="nav-link">Inicio</Nav.Item>
        <Nav.Item as={Link} to ="/tarefas" className="nav-link">Tarefas</Nav.Item>
      
      </Nav>
     
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Header;