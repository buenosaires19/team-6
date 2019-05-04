import React from 'react';
import { AnchorButton, Alignment, Classes } from '@blueprintjs/core';
import { ALIGNMENT_RIGHT } from '@blueprintjs/core';
import {Link} from 'react-router-dom';
import './HomeLinks.css';

const HomeLinks = () =>
    <div className={"row"}>
         <div className={"col-xs-2"}></div>
        <Link to="/buscar" className="col-xs-4">
            <AnchorButton text="Ganadoras Anteriores" icon={"user"} large={true} fill={true}/>
        </Link>
        <Link to="/buscar"  className="col-xs-4">
            <AnchorButton text="Votar Candidatas" rightIcon={"circle-arrow-right"} large={true} fill={true}/>   
        </Link>
    </div>

export default HomeLinks;