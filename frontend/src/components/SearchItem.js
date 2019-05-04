import React from 'react';
import { H2, Tag } from '@blueprintjs/core';
import {Link} from 'react-router-dom';

const SearchItem = ({nombre, apellido, area, descripcion, id}) =>
    <Link to={`/publicacion/${id}`}>
        <H2>{nombre} {apellido} {area.map((i) => <Tag large={true}>{i}</Tag>)}</H2>
        <p>{descripcion} </p>    
    </Link>

export default SearchItem;