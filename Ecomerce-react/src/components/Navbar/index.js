import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container fluid">
      <Navbar color="light" light expand="md">
        <NavbarBrand >  <Link  to="/"> Inicio</Link>  </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink> <Link to="login" >   Login</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Registrarse</NavLink>
            </NavItem>
            
          </Nav>

        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
         </form>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;