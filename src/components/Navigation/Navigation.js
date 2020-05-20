 import React, { useState, useContext } from 'react';
 import { AuthContext } from '../../contexts/AuthContext';
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

const Navigation = () => {
  const { color, isAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderNavigation = () => {
    return isAuth
      ? (<Navbar
      className="navbar navbar-dark bg-dark"
      // style={{ backgroundColor: "black", color: "red" }}
      expand="md">
      <NavbarBrand tag={Link} to="/">{ color }</NavbarBrand>
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
      <NavbarBrand tag={Link} to="/">{ color }</NavbarBrand>
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