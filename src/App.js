import React from 'react';
import './App.css';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Video from './pages/Video.js';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/video/:video" component={Video}/>
      <Route component={Home}/>
    </Switch>
  );
}

export default App;
