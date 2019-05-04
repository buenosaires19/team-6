import React from 'react';
import './Header.css';
import { Button, Alignment, Navbar } from "@blueprintjs/core"; 
import { ALIGNMENT_RIGHT } from '@blueprintjs/icons/lib/esm/generated/iconContents';


const Header = () => 
  <Navbar className="header">
   
        <Navbar.Group align={Alignment.LEFT}> 
            <Navbar.Heading className="bp3-nav">CHICAS EN TECNLOGÍA</Navbar.Heading> 
            <span class="bp3-navbar-divider"></span>   
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Ingresar" />
            <span class="bp3-navbar-divider"></span>   
            <Button className="bp3-minimal" icon="document" text="Postular" />
        </Navbar.Group>
  </Navbar> 

export default Header;