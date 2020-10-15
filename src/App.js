import React from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Apartments from './components/Apartments'
import Main from './components/Main'
import NotFound from './components/NotFound';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap/dist/react-bootstrap'
import './scss/custom.css'

function App() {
  return (
    <>
    <div className="container-fluid">

    <NavBar/>
    <Switch>
      <Route path="/apartments" exact component={Apartments} />
      <Route path="/not-found" component={NotFound}/>
      <Route path="/" exact component={Main}/>
      <Redirect to="/not-found"/>
    </Switch>
    <Footer/>
    </div>
    </>
  );
}

export default App;
