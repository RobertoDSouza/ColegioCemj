import React from "react";

import ColabFull from '../Colaboradores/ColabFull';
import './QuemSomos.css';
import d0 from '../../../img/d0.jpg';
import d1 from '../../../img/d1.jpg';
import d2 from '../../../img/d2.jpg';
import d3 from '../../../img/d3.jpg';
import d4 from '../../../img/d4.jpg';
import d5 from '../../../img/d5.jpg';
import d6 from '../../../img/d6.jpg';
import d7 from '../../../img/d7.jpg';
import Ass from '../../../img/ass.webp';


const QuemSomos=()=>{
    return(
        <div className="quemsomos">
            <h2></h2>
            <div className="time">
                <ColabFull/>
            </div>

            <h3> Nossa História </h3>
            <div className="nossahistoria">
                <div className="text-quem">
                <p>
                O Colégio CEMJ , a mais de 20 anos forma para a vida e constrói valores essenciais 
                a personalidade dos alunos. Um ensino de base desenvolvido de 
                forma específica para cada ano colegial, tornando o aprendizado 
                mais eficiente para o futuro do seu filho.

                Um ensino tradicional no que diz respeito à construção de valores, mas com aplicação
                dos mais modernos métodos e conceitos pedagógicos, com atividades escolares e 
                extracurriculares durante todo o ano, inseridas de forma gradual e contínua, e conduzidas para
                estimular e desenvolver nos alunos a criatividade, a formação de um raciocínio lógico, o interesse 
                pelo aprendizado e a construção de valores morais para o convívio social, como responsabilidade, respeito, e cidadania.

                Com isso, o Colégio CEMJ pratica uma didática mais próxima dos alunos,
                de acordo com o grau de desenvoltura em cada fase escolar, e o nível de ensino, 
                preparando os alunos com mais consistência para os desafios do nosso tempo.

                Com estruturas específicas voltadas para o ensino, as unidades do Colégio CEMJ
                atendem confortavelmente às necessidades dos seus mais de 300 alunos, 
                contando com uma equipe de quase 500 pessoas, incluindo gestores, coordenadores, 
                colaboradores e professores, que trabalham todo dia para oferecer o que há de mais
                moderno e inovador no mercado de educação.
                </p>
                </div>
                <iframe className="mater-video" 
                src="https://www.youtube.com/embed/LpMhrDvOa8o" 
                title="CENTRO EDUCACIONAL MENINO JESUS" 
                frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen></iframe>
            </div>

            <h3> Depoimentos</h3>

            <ul className="minicard">
            <li className="carddepoi">
                    <img src={d0}/>
                </li>
                <li className="carddepoi">
                    <img src={d1}/>
                </li>
                <li className="carddepoi">
                    <img src={d2}/>
                </li>
                <li className="carddepoi">
                    <img src={d3}/>
                </li>
                <li className="carddepoi">
                    <img src={d4}/>
                </li>
                <li className="carddepoi">
                    <img src={d5}/>
                </li>
                <li className="carddepoi">
                    <img src={d6}/>
                </li>
                <li className="carddepoi">
                    <img src={d7}/>
                </li>
            </ul>
            <div className="cartadadiretor">
                <h3>Carta da Direção</h3>

            <h4>PREZADOS PAIS E ALUNOS DO CENTRO EDUCACIONAL MENINO JESUS</h4>
                    <h5>O Centro Educacional Menino Jesus oferece toda a estrutura necessária para o 
                        conforto e desenvolvimento educacional dos seus alunos, 
                        como por exemplo: Banda Larga, Parque Infantil, 
                        Refeitório, Biblioteca, Quadra Esportiva, Quadra Esportiva Coberta,
                         Laboratório de Informática, Sala de Leitura, Pátio Coberto,
                         Sala do Professor e Internet.</h5>
                    <img src={Ass}/>
            </div>
        </div>
    )
}
export default QuemSomos