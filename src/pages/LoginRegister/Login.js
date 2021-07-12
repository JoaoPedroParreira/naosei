import React from 'react'
import Login1 from '../../components/ComponetLogin.js'
import Nav from '../../components/Navtbar.js'
import { Container, Row, Col, Button } from 'react-bootstrap'



function Login  () {
    return (
        <div>
      
          <Nav/>
            <div className="fundo">


            <Login1/>

            </div>
       


     </div>
     
    );
}
export default Login;