import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Hibrido.css'
import Img1 from '../../../../img/maternal.jfif';
import Img2 from '../../../../img/fund1.jfif';
import Img3 from '../../../../img/fund2.jfif';
import Livro from '../../../../img/livro.png';
import Brinq from '../../../../img/brinquedo.png';
import Ideia from '../../../../img/ideias.png';
import Colab from "../../Colaboradores/Colab";

const Hibrido =()=>{
    return(
        <div className="hibrido">
            
            <h2>Ensino Hibrido</h2>

            <div className="propostas">
                
                <div className="text-maternal">
                    <h3>Proposta de Ensino</h3>
                    <p>A Educação Infantil do CEMJ prioriza, 
                        dentre as diversas atividades, os momentos
                        livres de brincar, criar e fortalecer os elos
                        de afetividade e a interação com o outro, 
                        essenciais à estruturação de uma personalidade 
                        sadia e feliz. As ações pedagógicas para essa 
                        faixa etária têm como finalidade o desenvolvimento
                        das capacidades do ser, estar, conviver e interagir,
                            por meio de atitudes que fortaleçam as relações de 
                            respeito e confiança, com o intuito de promover o 
                            desenvolvimento cognitivo, afetivo, social e 
                            psicomotor da criança.</p>

                           
                </div>
                <iframe className="mater-video" 
                src="https://www.youtube.com/embed/LpMhrDvOa8o" 
                title="CENTRO EDUCACIONAL MENINO JESUS" 
                frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen></iframe>        
                        
                
            </div>    

            
            <div className="maternal-cards">

                <h2>Atividades</h2>

                <CardGroup>
                   

                    <Card>
                    <Card.Img src={Img2} alt="Card image" />
                    <Card.ImgOverlay>
                            
                    <Card.Text>
                       Atividades educativas que estimulam o parendizado
                        </Card.Text>
                            
                        </Card.ImgOverlay>
                    </Card>

                    <Card>
                <Card.Img src={Img3} alt="Card image" />
                <Card.ImgOverlay>
                        
                <Card.Text>
                       Atividades educativas que estimulam o parendizado
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </CardGroup>

                <CardGroup>
                <Card>
                <Card.Img src={Img1} alt="Card image" />
                <Card.ImgOverlay>
                        
                <Card.Text>
                       Atividades educativas que estimulam o parendizado
                        </Card.Text>
                        
                    </Card.ImgOverlay>
                </Card>

                <Card>
                <Card.Img src={Img2} alt="Card image" />
                <Card.ImgOverlay>
                        
                <Card.Text>
                       Atividades educativas que estimulam o parendizado
                        </Card.Text>
                       
                    </Card.ImgOverlay>
                </Card>
                
                
                </CardGroup>

                <CardGroup>
                

                <Card>
                <Card.Img src={Img2} alt="Card image" />
                <Card.ImgOverlay>
                        
                <Card.Text>
                       Atividades educativas que estimulam o parendizado
                        </Card.Text>
                       
                    </Card.ImgOverlay>
                </Card>
                
                <Card>
                <Card.Img src={Img3} alt="Card image" />
                <Card.ImgOverlay>
                        
                        <Card.Text>
                       Atividades educativas que estimulam o parendizado
                        </Card.Text>
                        
                    </Card.ImgOverlay>
                </Card>
                </CardGroup>
                
            </div>

            <div className="icones">
                <Colab/>
            </div>

        </div>
    )
}
export default Hibrido