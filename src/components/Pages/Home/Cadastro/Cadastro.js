import React from "react";

import './Cadastro.css'

const Cadastro =()=>{
    return(
        <div className="formulario">
            <form name="meu_form">

            <h1>Entre em contato</h1>

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
    )
}
export default Cadastro;