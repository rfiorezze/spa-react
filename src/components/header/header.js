// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';

const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <NavItem href='/'>Blog</NavItem>
      <NavItem href='/about'>About</NavItem>
      <NavItem href='/description'>Description</NavItem>
    </Navbar>
  </Row>
);

export default Header;