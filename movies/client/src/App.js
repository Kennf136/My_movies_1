import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import MoviesList from './components/MoviesList';
import hey from './components/hey';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
     
      
      <Route exact path="/" component={MoviesList}/>
      <Route exact path="/wake-up" component={hey}/>
      </div>
      </Router>
    
    );
  }
}

export default App;
