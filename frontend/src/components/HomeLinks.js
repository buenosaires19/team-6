import React from 'react';
import { AnchorButton, Alignment, Classes } from '@blueprintjs/core';
import { ALIGNMENT_RIGHT } from '@blueprintjs/core';
import {Link} from 'react-router-dom';

const HomeLinks = () =>
    <div>
        <Link to="/buscar">
                <AnchorButton text="Ganadoras Anteriores" />
            </Link>
            <Link to="/buscar">
                <AnchorButton text="Candidatas" />   
            </Link>
    </div>

export default HomeLinks;