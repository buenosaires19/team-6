import React from 'react';
import './Header.css';
import { Button, Alignment, Navbar } from "@blueprintjs/core"; 
import { ALIGNMENT_RIGHT } from '@blueprintjs/icons/lib/esm/generated/iconContents';

const Header = () => 
  <Navbar className="header">
   
        <Navbar.Group align={Alignment.LEFT}> 
            <Navbar.Heading className="bp3-nav">Chicas en Tecnología</Navbar.Heading>    
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Ingresar" />
            <Button className="bp3-minimal" icon="document" text="Postular" />
        </Navbar.Group>
  </Navbar> 

export default Header;