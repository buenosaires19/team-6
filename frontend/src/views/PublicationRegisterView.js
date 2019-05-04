import React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import {AnchorButton} from '@blueprintjs/core'

const inputs = [
    {
        property: "nombre",
        label: "Nombre"
    },
    {
        property: "apellido",
        label: "Apellido"
    },
    {
        property: "nacimiento",
        label: "Fecha de nacimiento"
    },
    {
        property: "descripción",
        label: "Descripción"
    },
    {
        property: "area",
        label: "Áreas"
    },
    {
        property: "provincia",
        label: "Provincia"
    },
];

const PublicationRegisterView = () => 
    <div>{
        inputs.map((input) => 
        <FormGroup
            label={input.label}
            labelFor={input.property}
        >
            <InputGroup id={input.property} placeholder="Placeholder text" />
        </FormGroup>)
    }
        <AnchorButton text="Postular candidata" icon={"user"} large={true} fill={true}/>
    </div>

export default PublicationRegisterView;