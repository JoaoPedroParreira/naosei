import React from 'react'
import Nav from '../../components/Navtbar.js'
import Play from '../../components/Player.js'
import Car from '../../components/Carouselper.js'
import Mainfooter from '../../components/Mainfooter.js'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Homecss from '../../styles/Main.css'
import adv from '../../styles/adv.css'


const Theadventurer = () => {
    return (
        <div>
            <div className="backgroundimg">
                <Nav />

                <Container className="cima">
                    <Row >
                        <Col sm={2}></Col>


                        <Col class="col-md-10 col-md-offset-5" >
                            <h4>𝑻𝒉𝒆<br></br>𝑨𝒅𝒗𝒆𝒏𝒕𝒖𝒓𝒆𝒓</h4>
                            <h5>O jogo é de tipo arcade, historia e baseada em um aventureiro que tem como missão ir á procura do precioso diamante roubado da sua vila que desapareceu quando a noite surgiu, isto deixou-os preocupados e olhando para o chão descobrirão pegadas. Estas pegadas eram gigantes. Esta criatura cria monstros para dominar o mundo e com isso dá-lhe prazer as criações de diferentes tipos de monstros.
                                <br></br>
                                O jogo ainda esta na parte de desenvolvimento mas se quiser testar o jogo é só clicar no botão abaixo para baixar o jogo.
                            </h5>
                            <form method="get" action="/Adventurer" >
                                <Button type="submit" class="btn btn-warning" className="Explore" href="naosei.rar">Download</Button>
                            </form>
                        </Col>
                        <Col sm={2} ></Col>
                    </Row>
                </Container>


                <Container className="cima">
                    <Row>
                        <Col sm={2}></Col>
                        <Col class="col-md-10 col-md-offset-5">
                            <Play />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Container>








             <div className="back">
                    

                            
                <Container className="back">
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <h2 className="letralan">Personagen Principal</h2>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>

                     
            <div className="back">
                <Container  >
                    <Row>
                        <Col sm={4}></Col>
                        <Col class="col-md-4 col-md-offset-2">
                        <Card  >
                                <Card.Img variant="top" src="aventureiro1.png" />
                                <Card.Body>
                                    <Card.Title>Fixed</Card.Title>
                                    <Card.Text>
                                       <h6>12/02/2021</h6>  <br></br>
                                       A aranha do Adventurer não estava a atacar e agora com a última atualização já funciona.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>

             </div>

                </div>

                <Mainfooter />
            </div>
        </div>
    )
}
export default Theadventurer;