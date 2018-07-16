import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import MoviesList from './components/MoviesList';
import OneMovie from './components/OneMovie';
import MovieSearch from './components/MovieSearch';
import login from './components/login';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      
      <Route exact path="/" component={login}/>
      <Route exact path="/search" component={MovieSearch}/>
      <Route exact path="/movies" component={MoviesList}/>
      <Route exact path="/:movieId" component={OneMovie}/>
      </div>
      </Router>
    
    );
  }
}

export default App;
