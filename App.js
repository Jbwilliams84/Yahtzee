import React, { Component } from 'react';
import Die from './Die';
import "./App.css";
import RollDice from './RollDice';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <RollDice />
      </div>
    )
  }
}

export default App;