import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Axios from 'axios';


// import payload from '../../utils/payload';
import Search from '../Search'

export default function NavbarX( {usuario}) {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand >  <Link to="/"> Inicio</Link>  </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {usuario

              ?
              <>
                <NavItem>
                  <NavLink> Bienvenido  {usuario.user.first_name} </NavLink>
                </NavItem>

                <NavItem>
                <NavLink>   Tipo : {usuario.role} </NavLink>
                </NavItem>
                <NavItem>
                <NavLink> <Link to="/logout" >   Logout</Link></NavLink>
                </NavItem>
              </>


              :
              <>
                <NavItem>
                  <NavLink> <Link to="/login" >   Login</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink> <Link to="/registrarse" > Registrarse </Link></NavLink>
                </NavItem>
              </>

            }


          </Nav>

          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form> */}

          <Search />

        </Collapse>
      </Navbar>
    </>
  );
}

