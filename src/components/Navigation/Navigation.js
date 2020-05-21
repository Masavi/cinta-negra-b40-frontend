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
  const { isAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authNavbar = () => {
    return (<Navbar
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
            <NavLink tag={Link} to="/books-list">Books List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/book-form">Add Book</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/profile">Profile</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>)
  }

  const publicNavbar = () => {
    return (<Navbar
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

  const renderNavigation = () => {
    return isAuth
      ? authNavbar()
      : publicNavbar()
  }

  return (
    <React.Fragment>
      { renderNavigation() }
    </React.Fragment>
  );
}

export default Navigation;