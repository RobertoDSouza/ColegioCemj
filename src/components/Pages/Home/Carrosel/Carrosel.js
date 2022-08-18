import React from "react";
import './Carrosel.css';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../../../img/1.png';
import Img2 from '../../../../img/2.png';
import Button from 'react-bootstrap/Button';


const Carrosel =()=>{
    return(
        <div className="carrosel">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"/>
        <Carousel.Caption>
          <h3>Centro Educacional Menino Jesus</h3>
          <Button variant="primary"><a href="/Contato">Faça sua Matrícula</a></Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"/>
        <Carousel.Caption>
        <h3>Centro Educacional Menino Jesus</h3>
          <Button variant="primary" ><a href="/Contato">Faça sua Matrícula</a></Button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </div>
    )

}
export default Carrosel;