import {Link} from "react-router-dom";
import React, {Component} from 'react';

class ListComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoList : [
                {fname: 'Ramesh' , lname : 'Pongi', age:22, targetDate: new Date()},
                {fname: 'kavin', lname : 'Kumar', age:24, targetDate: new Date()},
                {fname: 'Tamil', lname: 'Mani', age:24, targetDate: new Date()},
                {fname: 'lakshana', lname: 'Ramesh', age:1, targetDate: new Date()},
                {fname: 'Amutha', lname: 'Ganapathi', age:26, targetDate: new Date()}
            ]
        }

    }
    render() {
        return(
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th><b>#</b></th>
                        <th><b>FIRST NAME</b></th>
                        <th><b>LAST NAME</b></th>
                        <th><b>AGE</b></th>
                        <th><b>DATE</b></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todoList.map((todo, index) =>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{todo.fname.toString()}</td>
                                <td>{todo.lname}</td>
                                <td>{todo.age}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                    }
                    </tbody>

                </table>
                Please Goback page: <Link to="/welcome">here.</Link>

            </div>
        );
    }
}

export default ListComponent;