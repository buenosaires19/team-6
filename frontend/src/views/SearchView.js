import React from 'react';
import { Card, H3, H2, Tag } from '@blueprintjs/core';
import {  mockProvinciasSelect, mockAreasSelect } from '../mock/mock';
import Select from 'react-select';

const SearchView = () => 
    <div>
        
        <Card style={{width:300, margin: 20}}>
            <H3>Filtros</H3>
            <Select 
            options={[{label: "Mas votados",value:"desc" },{label: "Menos votados",value:"asc" }]} 
            defaultValue={{label: "Mas votados",value:"desc" }} />
            <Select 
            isClearable={true}
            isSearchable={true}
            options={mockProvinciasSelect} 
            placeholder={"Filtra por provincia"} />
            <Select 
            isClearable={true}
            isSearchable={true}
            options={mockAreasSelect} 
            placeholder={"Filtra por area"} />
        </Card>
        <SearchItem />
        
    </div>

const SearchItem = () =>
    <div>
        <H2>Marina Mayos<Tag large={true}>Informática</Tag></H2>    
    </div>

export default SearchView;