import React, { Component } from 'react';

import Masthead from './static/Masthead'
import Error404 from './static/Error404';
import Home from './home/Home'
import Footer from './static/Footer';
import Rocket from  './rockets/Rocket';
import Capsule from './capsules/Capsule';
import Launches from './launches/Launches';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <React.Fragment>
      <Masthead />
      
      
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/rockets" component={Rocket} exact />
      <Route path="/capsules" component={Capsule} exact />
      <Route path="/launches" component={Launches} exact />
      <Route  component={Error404}  />

      </Switch>
      < Footer/>
      
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
