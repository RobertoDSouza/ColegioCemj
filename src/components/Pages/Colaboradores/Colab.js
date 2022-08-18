import React from "react";
import Card from 'react-bootstrap/Card';
import './Colab.css';

import Prof1 from '../../../img/prof1.jfif'
import Prof2 from '../../../img/prof2.jfif'
import Prof3 from '../../../img/prof3.jpg'
import Prof4 from '../../../img/prof4.jfif'


const Colab =()=>{
    return(
        <div className="card-colab">
                <h3>Colaboradores do Ensino</h3>

        <div className="cardes">
        <Card>
            <Card.Img variant="top" src={Prof1} />
            <Card.Body>
            <Card.Title>Prof. Ana</Card.Title>
            <Card.Text>
            Formada em Pedagogia.
            </Card.Text>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={Prof2} />
            <Card.Body>
            <Card.Title>Prof. Rebeca</Card.Title>
            <Card.Text>
            Formada em Pedagogia.
            </Card.Text>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={Prof3} />
            <Card.Body>
            <Card.Title>Prof. Helena</Card.Title>
            <Card.Text>
            Formada em Pedagogia.
            </Card.Text>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={Prof4} />
            <Card.Body>
            <Card.Title>Aux. Marta</Card.Title>
            <Card.Text>
            Auxiliar de Ensino.
            Crusando Pedagogia.
            </Card.Text>
            </Card.Body>
        </Card>
        </div> 
        </div>
    )
}
export default Colab