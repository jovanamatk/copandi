import React from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Apartments from './components/Apartments'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap/dist/react-bootstrap'

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route path="/apartments" component={Apartments}/>
      <Redirect to="/apartments"/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
