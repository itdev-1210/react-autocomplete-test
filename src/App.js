import React, { Component } from 'react';
import './App.css';
import UserName from './components/userName'
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserName />
      </BrowserRouter>
    );
  }
}

export default App;
