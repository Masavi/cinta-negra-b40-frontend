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
} from 'reactstrap';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  console.log('🌞', token);

  const toggle = () => setIsOpen(!isOpen);

  const renderNavigation = () => {
    return token
      ? (<Navbar
      className="navbar navbar-dark bg-dark"
      // style={{ backgroundColor: "black", color: "red" }}
      expand="md">
      <NavbarBrand tag={Link} to="/">Maui App</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/logout">Logout</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/books">Books</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>)
    : (<Navbar
      className="navbar navbar-dark bg-dark"
      // style={{ backgroundColor: "black", color: "red" }}
      expand="md">
      <NavbarBrand tag={Link} to="/">Maui App</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup">Signup</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>)
  }

  return (
    <React.Fragment>
      { renderNavigation() }
    </React.Fragment>
  );
}

export default Navigation;