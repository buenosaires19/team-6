import React from 'react';
import { Card, H3, Divider } from '@blueprintjs/core';
import {  mockProvinciasSelect, mockAreasSelect, mockPostulacion } from '../mock/mock';
import Select from 'react-select';
import SearchItem from '../components/SearchItem';

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
            <SearchItem {...mockPostulacion} />
            <Divider />
            <SearchItem {...mockPostulacion} />
        </div>
    </div>



export default SearchView;