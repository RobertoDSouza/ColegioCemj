import React from "react";
import './styledFooter.css';
import LOGO from '../../img/Logo.png';
import wathsapp from '../../img/zap.png'

 function Footer(){
    return(
        
        <div className="foot">
            
            <div className="container-list">
               
                <ul className="list-footer">
                <li><img className="logotype" src={LOGO} style={{height:'180px'}}/></li>
                </ul>
                    
                <ul className="list-footer">
                    <li className="li-menu"><a href="/"> Inicio</a></li>
                    <li className="li-menu"><a href="/Noticias">Noticias e Eventos</a></li>
                    <li className="li-menu"><a href="/Contato">Contato</a></li>
                    <li className="li-menu"><a href="/QuemSomos">Quem Somos</a></li>
                </ul>

            

                <ul className="list-footer">
                    <span>Segmento de Ensino</span>
                    <li><a href="/Maternal">Maternal</a></li>
                    <li><a href="/Fundamental1">Fundamental 1</a></li>
                    <li><a href="/Fundamental2">Fundamental 2</a></li>
                    <li><a href="/Hibrido">Ensino Híbrido</a></li>
                    
                </ul>

                <ul className="list-footer">
                    <li>contato@cemj.com.br</li>
                    <li>FACE</li>
                    <li>Insta</li>
                    <li>(81) 98303-9381</li>
                    <li className="li-img"><img src={wathsapp}/></li>
                </ul>
            </div> 
            <div className="foot-dev">
            <ul className="list-dev">
                    <span className="list-dev">copyright by Roberto Souza</span>
                    <li className="list-dev">Git</li>
                    <li className="list-dev">Linkedin</li>
                    <li className="list-dev">Wathsapp</li>
                    <li className="list-dev">robertofsd.souza@gmail.com</li>
                </ul>
            </div>
         </div>
    );
};
export default Footer;