import React from 'react';
import HomeTopSlider from '../components/HomeTopSlider';
import {  H1, H2 } from '@blueprintjs/core';
import HomeLinks from '../components/HomeLinks';
import { mockTop } from '../mock/mock';
import './HomeView.css'


const HomeView = () => 
    <div>
        <h1 className="titulo1home">Grandes Mujeres</h1>  
        <h2 className="titulo2home">Destacadas del mes</h2>      
        <HomeTopSlider postulaciones={mockTop}/>  
        <h2 className="titulo2home">.</h2>      
        <p className="titulo3home">Queremos visibilizar a las mujeres de Argentina que se desarrollan en áreas de Ciencia y Tecnología. Y estamos buscando a todas las mujeres cuyo labor en el area sirva de inspiración para la comunidad. Para cerrar la brecha, te invitamos a que subas tu perfil o el de alguna amiga, hermana y nos cuentes tus logros.   </p>
        <HomeLinks />
        <br/>
        
    </div>

export default HomeView;