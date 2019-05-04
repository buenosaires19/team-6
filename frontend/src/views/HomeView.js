import React from 'react';
import HomeTopSlider from '../components/HomeTopSlider';
import {  H1, H2 } from '@blueprintjs/core';
import HomeLinks from '../components/HomeLinks';
import { mockTop } from '../mock/mock';
import './HomeView.css'


const HomeView = () => 
    <div>
        <h1 className="titulo1home">Grandes Mujeres</h1>        
        <HomeTopSlider postulaciones={mockTop}/>
        <h2 className="titulo2home">Destacadas del mes</h2>
        <HomeLinks />
    </div>

export default HomeView;