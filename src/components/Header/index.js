import React from "react";
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './styled.css'
import Logo from '../../img/Logo.png'

 function Header(){
    return(
            <div className="header">
                <div className="header-top">
                    <ul className="header-contatos">
                        <li>(81) 98303-9381</li>
                        <li>contato@cemj.com</li>
                        <li>Atendimento : Seg a Sex 8:00 as 17:00</li>
                    </ul>
                    <ul className="header-midias">
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>

                <div className="header-menu">
                    <img src={Logo}/>
                    <ul className="ul-menu">
                        <li><a href="/"> Inicio</a></li>
                        <li><DropdownButton id="dropdown-basic-button" title="Séries Escolares" >
                            <Dropdown.Item> <Link to="/Maternal">Maternal</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to="/Fundamental1">Fundamental 1</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to="/Fundamental2">Fundamental 2</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to="/Hibrido">Ensino Híbrido</Link></Dropdown.Item>
                            </DropdownButton></li>
                        <li><DropdownButton id="dropdown-basic-button" title="Portal Galileu" >
                            <Dropdown.Item href="https://portalaluno.app/auth/login" target="_blank">Portal do Aluno</Dropdown.Item>
                            <Dropdown.Item href="https://appgalileu.com.br/professor" target="_blank">Portal do Professor</Dropdown.Item>
                            </DropdownButton></li>
                        <li><Link to="/Noticias">Noticias e Eventos</Link></li>
                        <li><Link to="/Contato">Contato</Link></li>
                        <li><Link to="/QuemSomos">Quem Somos</Link></li>
                    </ul>
                </div>
            </div>
    );
};
export default Header;