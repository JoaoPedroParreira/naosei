import React, {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'




import Teste from './pages/Teste/teste.js'
import Home from './pages/Home/Homepage.js'
import Presonagens from './pages/Presonagens/Presonagens.js'
import Creditos from './pages/Creditos/Creditos.js'
import Login from './pages/LoginRegister/Login.js'
import Register from './pages/LoginRegister/Register.js'
import Adventurer from './pages/Games/Theadventurer.js'




function App() {

  
  return (

    
    <BrowserRouter>
    <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/Presonagens' component={Presonagens} />
        <Route path='/Creditos' component={Creditos} />
        <Route path='/Teste' component={Teste} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/Adventurer' component={Adventurer} />
       
    </Switch>

</BrowserRouter>

  );

}

export default App;
