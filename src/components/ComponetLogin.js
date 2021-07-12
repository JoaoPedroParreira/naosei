import { Container, Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Registercss from "../styles/Register.css";
import firebase from "../fire";
import {Redirect , withRouter } from "react-router-dom";
import React , {useState} from "react";













const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [routeRedirect, setRedirect] = useState(false);

    

    const login = async (e) => {
        e.preventDefault();
        let user = await firebase.login(email, password);
        console.log(user);
        setRedirect(true);
       
    }

    const redirect = routeRedirect;
        if(redirect){
            return <Redirect to="/" />
        }

        


















    return (

        <Container fluid >

            <Row className="justify-content-center" >

                <div className="meio">
                    <div className="justify-content-center" >
                        <Row  >
                            <Col sm={6} className="esquerda">
                                <Form className="age" onSubmit={login}>
                                    <h1>Iniciar Sessão</h1>
                
                                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                                
                                    <span>ou use sua conta</span>
                                    <input type="email"  placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}required />
                                   
                                    <button className="buttonregisto" type="submit" value="login"> Iniciar Sessão</button>
                                </Form>
                            </Col>
                            <Col sm={6} className="direita">
                                <Form>

                                    <div class="overlay-panel overlay-left">

                                        <p>Insira seus dados pessoais e comece a<br></br> jornada connosco</p>
                                        <a className="buttonregisto" href="/Register">Criar conta</a>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>

            </Row>




        </Container>

    )
}


export default Login;