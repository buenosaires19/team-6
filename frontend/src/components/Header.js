import React from 'react';
import './Header.css';
import { Button, Alignment, Navbar } from "@blueprintjs/core";
import { ALIGNMENT_RIGHT } from '@blueprintjs/icons/lib/esm/generated/iconContents';
import logo from '../assets/logo.webp';
import {Link} from 'react-router-dom';

const Header = () =>
  <Navbar className="header">
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading className="bp3-nav"><img src={logo} style={{height:36}}/></Navbar.Heading>
            <Navbar.Heading className="bp3-nav">GRANDES MUJERES</Navbar.Heading>
            <span class="bp3-navbar-divider"></span>
            <Navbar.Heading className="bp3-nav"><Link to={`/buscar`}>GANADORAS</Link></Navbar.Heading>
            <span class="bp3-navbar-divider"></span>
            <Navbar.Heading className="bp3-nav"><Link to={`/buscar`}>CANDIDATAS</Link></Navbar.Heading>
            <span class="bp3-navbar-divider"></span>
            <Navbar.Heading className="bp3-nav"><Link to={`/`}>HOME</Link></Navbar.Heading>
            <span class="bp3-navbar-divider"></span>
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Ingresar" />
            <span class="bp3-navbar-divider"></span>
            <Link to={`/postularse`}><Button className="bp3-minimal" icon="document" text="Postular" /></Link>
        </Navbar.Group>
  </Navbar>

export default Header;