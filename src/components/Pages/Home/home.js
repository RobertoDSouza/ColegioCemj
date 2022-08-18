import React from 'react';
import './home.css';
import Carrosel from './Carrosel/Carrosel';
import CardsSeries from './CardsHome/CardsSeries';
import Atividades from './Atividades/Atividades';
import Maps from './Maps/Maps';
import Cadastro from './Cadastro/Cadastro';

function Home(){
    return(
        <div className='main'>
            <div className='carrousel'>
            <Carrosel/>
            <CardsSeries/>
            <Atividades/>
            <Maps/>
            <Cadastro/>
            </div>
        </div>
    )
};
export default Home;
