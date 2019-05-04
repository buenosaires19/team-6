import React from 'react';
import Candidatas from '../components/Candidatas';
import HomeTopSlider from '../components/HomeTopSlider';
import GanadorasAnteriores from '../components/GanadorasAnteriores';
import { H1, H2 } from '@blueprintjs/core';

const HomeView = () => 
    <div>
        <H1>Grandes Mujeres</H1>        
        <HomeTopSlider />
        <H2>Destacadas del mes</H2>
        <GanadorasAnteriores />
        <Candidatas />
    </div>

export default HomeView;