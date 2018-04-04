import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import Home from './Pages/Home/Home';
import Omdb from './Pages/Omdb/Omdb';
import Weather from './Pages/Weather/Weather';
import Github from './Pages/Github/Github';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/omdb" component={Omdb} />
          <Route exact path ="/weather" component={Weather} />
          <Route exact path ="/github" component={Github} />
        </div>
      </Router>
    );
  }
}

export default App;
