import React from 'react';
import HomeTopSlider from '../components/HomeTopSlider';
import { H1, H2 } from '@blueprintjs/core';
import HomeLinks from '../components/HomeLinks';
import { mockTop } from '../mock/mock';

const HomeView = () => 
    <div>
        <H1>Grandes Mujeres</H1>        
        <HomeTopSlider postulaciones={mockTop}/>
        <H2>Destacadas del mes</H2>
        <HomeLinks />
    </div>

export default HomeView;