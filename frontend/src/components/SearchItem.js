import React from 'react';
import { H2, Tag } from '@blueprintjs/core';

const SearchItem = ({nombre, apellido, area}) =>
    <div>
        <H2>{nombre} {apellido} {area.map((i) => <Tag large={true}>{i}</Tag>)}</H2>    
    </div>

export default SearchItem;