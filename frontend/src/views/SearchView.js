import React from 'react';
import { Card, H3, Divider } from '@blueprintjs/core';
import {  mockProvinciasSelect, mockAreasSelect, mockPostulacion } from '../mock/mock';
import Select from 'react-select';
import SearchItem from '../components/SearchItem';

const SearchView = ({onChange, voteFilter, provinciaFilter, areaFilter}) => 
    <div className="row">
        <div className="col-xs-12 col-sm-4">
            <Card>
                <H3>Filtros</H3>
                <Select 
                options={[{label: "Mas votados",value:"desc" },{label: "Menos votados",value:"asc" }]} 
                value={voteFilter || {label: "Mas votados",value:"desc" }} 
                onChange={(value) => onChange({voteFilter: value})}/>
                <Select 
                isClearable={true}
                isSearchable={true}
                options={mockProvinciasSelect} 
                placeholder={"Filtra por provincia"}
                value={provinciaFilter}
                onChange={(value) => onChange({provinciaFilter: value})} />
                <Select 
                isClearable={true}
                isSearchable={true}
                options={mockAreasSelect} 
                placeholder={"Filtra por area"} 
                value={areaFilter}
                onChange={(value) => onChange({areaFilter: value})}/>
            </Card>
        </div>
        <div className="col-xs-12 col-sm-8">
            <SearchItem {...mockPostulacion} />
            <Divider />
            <SearchItem {...mockPostulacion} />
        </div>
    </div>



export default SearchView;