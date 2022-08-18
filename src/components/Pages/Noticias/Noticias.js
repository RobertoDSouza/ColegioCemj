import React from "react";

import './Noticias.css'
import Card from 'react-bootstrap/Card';

import ImgVolta from '../../../img/volta.jpeg';
import ImgInsta from '../../../img/instaevento.jpg';
const Noticias=()=>{
    return(
        <div className="noticias">
            <h2></h2>
            <h3>Principais Noticias</h3>
            <div className="news">
            <Card style={{width:'400px'}}>
                <Card.Img variant="top" src={ImgVolta} />
                <Card.Body>
                <Card.Text>
                    VOLTA AS AULAS!!!
                </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width:'400px'}}>
                <Card.Img variant="top" src={ImgVolta} />
                <Card.Body>
                <Card.Text>
                VOLTA AS AULAS!!!
                </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width:'400px'}}>
                <Card.Img variant="top" src={ImgVolta} />
                <Card.Body>
                <Card.Text>
                VOLTA AS AULAS!!!
                </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width:'400px'}}>
                <Card.Img variant="top" src={ImgVolta} />
                <Card.Body>
                <Card.Text>
                VOLTA AS AULAS!!!
                </Card.Text>
                </Card.Body>
            </Card>
     </div>
    
        <div className="eventos">
            <h2 className="h2event">
                Eventos
            </h2>
            <h3>Acompanhe no Instagram</h3>
            <h4>@unidadesdeensinocemj</h4>
            <img style={{borderRadius:'15px'}} src={ImgInsta}/>
        </div>
        </div>
    )
}
export default Noticias