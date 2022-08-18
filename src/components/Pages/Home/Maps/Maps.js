import React from "react";

import './Maps.css';
import Map from './Map';

const Maps =()=>{
    return(
        <div className="map">
            
            <h2> Venha conhecer nossas Unidades </h2>
            <div className="listas">
                <ul className="list1">
                    <li style={{fontSize:'28px'}}>Unidade 1</li>
                    <li>Endereço: RUA 52 - Nº 25 - Parque Capibaribe</li>
                    <li>São Lourenço da Mata - PE</li>
                </ul>
                <ul className="list2">
                    <li style={{fontSize:'28px'}}>Unidade 2</li>
                    <li>Endereço: R. Oito, 160 Parque Capibaribe</li>
                    <li>São Lourenço da Mata - PE</li>
                </ul>
                
            </div>
            <div className="googlemaps">
                    <Map/>
                </div>
        </div>
    )
}
export default Maps;