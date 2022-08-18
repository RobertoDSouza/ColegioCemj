import React from "react";
import {Link} from 'react-router-dom';
import './CardsSeries.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgMaternal from '../../../../img/maternal.jfif';
import ImgFund1 from '../../../../img/fund1.jfif';
import ImgFund2 from '../../../../img/fund2.jfif';
import ImgHibr from '../../../../img/hibrido.jfif';
import Bv from '../BoasVindas/Bv'
 const CardsSeries = () => {
    return(
        <div className="cardsItens">
            
            <div className="cadrsItensTitulo">
                <h2>Conheça nossas Divisões de Ensino</h2>
            </div>
            
            <div className="itens">
            <Bv/>
                <div className="itensCard">

                    <Card style={{ width: '14rem' , backgroundColor:'#253D5F', color:'white'}}>
                    <Card.Img variant="top" src={ImgMaternal} />
                    <Card.Body>
                        <Card.Title>Maternal</Card.Title>
                        <Card.Text>
                        Cuidado especial e atividades educativas.
                        </Card.Text>
                        <Button variant="primary"> <a href="/Maternal">Conheça Melhor</a></Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top"src={ImgFund1} />
                    <Card.Body>
                        <Card.Title>Fundamental 1
                        </Card.Title>
                        <Card.Text>
                        Atividades educacionais para o desenvolvimento do seu filho.
                        </Card.Text>
                        <Button variant="primary"><a href="/Fundamental1">Conheça Melhor</a></Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem', backgroundColor:'#253D5F', color:'white'}}>
                    <Card.Img variant="top" src={ImgFund2} />
                    <Card.Body>
                        <Card.Title>Fundamental 2</Card.Title>
                        <Card.Text>
                        Atividades educacionais para o desenvolvimento do seu filho.
                        </Card.Text>
                        <Button variant="primary"><a href="/Fundamental2">Conheça Melhor</a></Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={ImgHibr} />
                    <Card.Body>
                        <Card.Title>Educação Hibrida</Card.Title>
                        <Card.Text>
                        Um jeito inovador e tecnológico de aprendizado.
                        </Card.Text>
                        <Button variant="primary" ><a href="/Hibrido">Conheça Melhor</a></Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default CardsSeries;