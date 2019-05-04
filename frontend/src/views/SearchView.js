import React from 'react';
import { Card, H3, H2, Tag } from '@blueprintjs/core';
import {  mockProvinciasSelect, mockAreasSelect } from '../mock/mock';
import Select from 'react-select';

const SearchView = () => 
    <div className="row">
        <div className="col-xs-12 col-sm-4">
            <Card>
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
        </div>
        <div className="col-xs-12 col-sm-8">
            <SearchItem />
        </div>
        
    </div>

const SearchItem = () =>
    <div>
        <H2>Marina Mayos<Tag large={true}>Informática</Tag></H2>    
    </div>

export default SearchView;