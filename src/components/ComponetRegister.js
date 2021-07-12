import { Container, Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Registercss from "../styles/Register.css";
import firebase from "../fire";
import {Redirect , withRouter } from "react-router-dom";
import React , {useState} from "react";



const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [routeRedirect, setRedirect] = useState(false);

    const signin = async(e) => {
        e.preventDefault();
        let user = await firebase.signin(email, password);
        console.log(user)
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
                    <div className="teste" >
                        <Row >
                            <Col sm={6}  className="esquerda">
                                <Form className="age" onSubmit={signin}>
                                
                                    <h1>Criar um conta</h1>
                                    
                                    <span>use um email para criar conta</span>

                                    
                                    <input type="email"  placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}required  />
                                    
                            
                                    <button className="buttonregisto" type="submit" value="Create Accout">Inscrever-se</button>
                                
                                </Form>
                            </Col>
                            <Col sm={6} className="direita">
                                <Form>

                                    <div className="overlay-panel overlay-left">

                                        <p>Insira seus dados pessoais e comece a <br></br>jornada connosco</p>
                                        <a className="buttonregisto" href="/Login">Iniciar Sessão</a>
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


export default Register;