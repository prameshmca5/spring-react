import React, { Component } from 'react';

import './App.css';
import './Boostrap.css';
import TodoApp from "./components/todo/todoApp";
class App extends Component{
    render() {
        return (
            <div className="App">
                <TodoApp></TodoApp>
            </div>
        );
    }
}

export default App;




