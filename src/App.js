import React from 'react';
import './App.css';
import { Router } from "@reach/router"
import RandomJoke from './Components/RandomJoke';
import SearchJokes from './Components/SearchJokes';
import HomePage from './Components/HomePage';
import Header from './Components/Header'



function App() {
  return (
    <div className="App">
      <Header  />
      <Router>
      <HomePage path ='/' />
      <RandomJoke path='/random' />
      <SearchJokes path='/search' />
      </Router>
    </div>
  );
}

export default App;
