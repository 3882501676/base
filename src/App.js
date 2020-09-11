import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from "react-router-dom";
import history from "./Util/history.js";

import { Home } from './Components/Pages'
import { Wrapper } from './Components/Containers/Wrapper/index.js'

import './Assets/css/index.css';


function App() {
  return (

        <Router history={history}>

          <Switch>
          
              <Wrapper>
          
                  <Route exact path={"/"} component={Home} />
          
              </Wrapper>
          
          </Switch>
        
        </Router>      

  );
}

export default App;

