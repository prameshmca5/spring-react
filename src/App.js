import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComp from "./components/FirstComp";
import SecondComp from "./components/SecondComp";
import Counter from "./components/counter/Counter";

class App extends Component{
  render() {
    return (
        <div className="App">
          <header className="App-header">
              <Counter byinc={1}></Counter>
              <Counter byinc={-10}></Counter>
              <Counter byinc={100}></Counter>

          </header>
        </div>
    );
  }
}



export default App;




