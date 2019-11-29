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
              <h2>Create and display for Application Header </h2>
              <Counter byinc={1} CounterMethod={this.increment} ></Counter>
              <Counter byinc={-10} CounterMethod={this.increment} ></Counter>
              <Counter byinc={100} CounterMethod={this.increment} ></Counter>

          </header>
        </div>
    );
  }
}



export default App;




