import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header}/>
          <Route path="/" component={Main}/>
        </div>
      </Router>
    );
  }
}
