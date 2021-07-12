import { Container, Row, Col } from 'react-bootstrap'
import Presonagens from '../styles/Presonagens.css'

function Pres() {
    return (
        <Container fluid>
            <Row>
                <Col sm={2}>

                </Col>



                <Col sm={2} className="bordared">


                    <img src="aventureiro.png" className="image"></img>
                   <div className="bra">
                    <Row className="bordared">
                        <h2> Adventurer</h2>
                        <p>Herói de todas as vilas que vive debaixo do subsolo no qual vai em busca dos preciosos diamantes roubados das vilas pelo Asterius.</p>
                    </Row>
                    </div> 

                </Col>
                <Col sm={2} className="bordared">

                    <img src="minotaur.png" className="image"></img>
                    <div className="bra">
                    <Row className="bordared">
                        <h2> Adventurer</h2>
                        <p>Herói de todas as vilas que vive debaixo do subsolo no qual vai em busca dos preciosos diamantes roubados das vilas pelo Asterius.</p>
                    </Row>
                    </div>
                </Col>
                <Col sm={2} className="bordared">

                    <img src="snake.png" className="image"></img>
                    <Row className="bordared">
                        <div className="bra">
                            <h2> Adventurer</h2>

                            <p>Herói de todas as vilas que vive debaixo do subsolo no qual vai em busca dos preciosos diamantes roubados das vilas pelo Asterius.</p>
                        </div>
                    </Row>

                </Col>


                <Col sm={2} className="bordared">


                    <img src="spider.png" className="image"></img>
                    <div className="bra">
                    <Row className="bordared">
                        <h2> Adventurer</h2>
                        <p>Herói de todas as vilas que vive debaixo do subsolo no qual vai em busca dos preciosos diamantes roubados das vilas pelo Asterius.</p>
                    </Row>
                    </div>
                </Col>




                <Col sm={2}>

                </Col>

            </Row>

        </Container>

    )
}


export default Pres;