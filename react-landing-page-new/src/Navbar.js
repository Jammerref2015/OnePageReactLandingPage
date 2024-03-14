// Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;

  &:hover {
    color: #ddd;
  }

  &.active {
    color: #f00;
  }
`;

function Navbar() {
  return (
    <Nav>
    <img src="/images/Logo.png" alt="Logo" className="navbar-logo" />
      <NavItem href="#section1">Section 1</NavItem>
      <NavItem href="#section2">Section 2</NavItem>
      <NavItem href="#section3">Section 3</NavItem>
      <NavItem href="#section4">Section 4</NavItem>
      <NavItem href="#section5">Section 5</NavItem>
    </Nav>
  );
}

export default Navbar;