import React from 'react';
import { ALIGNMENT_HORIZONTAL_CENTER } from '@blueprintjs/icons/lib/esm/generated/iconContents';
import './PublicationView.css';
import { Button,ButtonGroup, AnchorButton, Card, Elevation, Icon } from "@blueprintjs/core";




const PublicationView = () => 
    <p>
        
        <h1 className="titulo">Candidatas</h1>        
         <Card interactive={true} elevation={Elevation.TWO}>         
         
        <p className="nombreCandidata">Maria Salerno</p>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqfYIcPYstFZS0tdw24sju588C5O-EksHFpK8PlqedEnNQvaajQ"} alt="Logo" />
        <p className= "especialidad">Bioquímica</p>
        <p className= "actividad">Investigadora del CONICET </p>
        <p className= "detalles">Egresada de la UBA en el 2009 de Lic. en Bioquímica. Actualmente se encarga de la parte de investigaciń y desarrollo en el laboratorio de enfermedades virales de ...</p>
        <ButtonGroup minimal={false}>
       <Button icon="flag">Denunciar</Button>
       <Button icon="social-media">Compartir</Button>
       <AnchorButton rightIcon="thumbs-up" >Votar</AnchorButton>
       </ButtonGroup>   
       
       
       </Card>
       
              
        
    </p> 


export default PublicationView;