import React from "react";
import Card from 'react-bootstrap/Card';
import  Button  from "react-bootstrap/Button";
import './Atividades.css';

import ImgMaternal from '../../../../img/maternal.jfif';
import ImgFund1 from '../../../../img/fund1.jfif';
import ImgFund2 from '../../../../img/fund2.jfif';
import ImgHibr from '../../../../img/hibrido.jfif';
import gali from '../../../../img/galileu.png';

const Atividades = ()=>{
    return(
        <div className="container-atividades" >
            <div className="title-atividades">
                <h2>
                    Atividades
                </h2>
            </div>
            
            
            <div className="grid-atividades">

                <div className="card-atividade">
                <Card style={{ width: '14rem' , backgroundColor:'#62b4fc', color:'white'}}>
                    <Card.Img variant="top" src={ImgMaternal} />
                    <Card.Body>
                        <Card.Text>
                        Cuidado especial e atividades educativas.
                        </Card.Text>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top"src={ImgFund1} />
                    <Card.Body>
                        <Card.Text>
                        Atividades educacionais para o desenvolvimento do seu filho.
                        </Card.Text>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem', backgroundColor:'#62b4fc', color:'white'}}>
                    <Card.Img variant="top" src={ImgFund2} />
                    <Card.Body>
                        <Card.Text>
                        Atividades educacionais para o desenvolvimento do seu filho.
                        </Card.Text>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={ImgHibr} />
                    <Card.Body>
                        <Card.Text>
                        Um jeito inovador e tecnológico de aprendizado.
                        </Card.Text>
                    </Card.Body>

                    </Card>
                    <Card style={{ width: '14rem' , backgroundColor:'#62b4fc', color:'white'}}>
                    <Card.Img variant="top" src={ImgMaternal} />
                    <Card.Body>
                        <Card.Text>
                        Cuidado especial e atividades educativas.
                        </Card.Text>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem'}}>
                    <Card.Img variant="top" src={ImgFund2} />
                    <Card.Body>
                        <Card.Text>
                        Atividades educacionais para o desenvolvimento do seu filho.
                        </Card.Text>
                    </Card.Body>
                    </Card>

                </div>
                <div className="galileu">
                    <img src={gali}/>
                    <h3 >Portal Academico</h3>
                    <p> Posso resumir o GALILEU em duas palavras:
                         eficiência e organização. O GALILEU nos 
                         trouxe melhorias significativas em todos
                          os nossos processos internos e reduzindo
                           toda a burocracia diária.</p>
                     <a href="https://portalaluno.app/auth/login" target="_blank"><Button style={{ width: '10rem', backgroundColor:'#62b4fc', color:'white'}} >
                        Portal do Aluno
                     </Button></a>

                     <a href="https://appgalileu.com.br/professor" target="_blank"><Button style={{ width: '12rem', backgroundColor:'#62b4fc', color:'white'}}>
                        Portal do Professor
                    </Button></a>      
                </div>
            </div>
        
        </div>
    );
};
export default Atividades