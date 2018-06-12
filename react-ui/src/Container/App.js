import React, { Component } from 'react';

import Radium from 'radium';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import SiteNavbar from '../Dumbbells/Navbar'
import MainPage from './MainPage'
import About from '../Dumbbells/About'







import './App.css';





class App extends Component {
  
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div> 
            <SiteNavbar/>
            <Switch>
              <Route path="/"  component={MainPage} exact/>
              <Route path="/about"  component={About} exact/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>


    );
  }
}

export default Radium(App);