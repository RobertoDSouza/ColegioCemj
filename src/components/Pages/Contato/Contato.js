import React from "react";

import Logo from '../../../img/Logo.png';
import Waths from '../../../img/waths.webp';
import Insta from '../../../img/insta.png';
import Face from '../../../img/face.png';
import Email from '../../../img/emial.png';

import './Contato.css';
import Maps from '../Home/Maps/Maps'




const Contato=()=>{
    return(
        <div className="contato">
                <h2> Contato </h2>
                <ul className="contatolista">
                    <li className="iconecontato"><img src={Waths}/><p className="info">(81) 98303-9381</p></li>
                    <li className="iconecontato"><img src={Insta}/><p className="info">@unidadesdeensinocemj</p></li>
                    <li className="iconecontato"><img src={Face}/><p className="info">faceboo.com/cemj</p></li>
                    <li className="iconecontato"><img src={Email}/><p className="info">contato@cemj.com</p></li>
                </ul>


            <div className="cadastroContato">
                <div className="contatoformulario">
                    <form name="meu_form">

                    <h1>Faça sua Pre-Matrícula</h1>

                    <input type="text" id="nomeid" placeholder="Nome do Responsavel" required="required" name="nome" />


                    <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />


                    <input type="email" id="emailid" placeholder="seuemailg@mail.com" name="email" />


                    <select name="select" >
                    <option value='0'>Qual seguimento de ensino?</option>
                    <option value="Maternal">Maternal</option>
                    <option value="1">Fundamental 1</option>
                    <option value="2">Fundamental 2</option>
                    </select>

                    <select name="select" >
                    <option value='0'>Qual Unidade CEMJ?</option>
                    <option value="3">Unidade Rua 52</option>
                    <option value="4">Unidade Rua 8</option>
                    </select>

                    <textarea placeholder="Deixe uma mensagem"></textarea>

                    <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
                    </form>
                </div>
                <div className="logocontato"><img src={Logo}/></div>
                
            </div>
            
            <Maps/>
        </div>
    )

}
export default Contato;