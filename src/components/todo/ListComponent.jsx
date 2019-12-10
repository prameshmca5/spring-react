import {Link} from "react-router-dom";
import React, {Component} from 'react';
import WelcomeApiSerive from "../api/todo/welcomeApiSerive";
import Authenticate from "./Authenticate";

class ListComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoList : ['']
        }


    }
    render() {
        return(
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th><b>#</b></th>
                        <th><b>NAME</b></th>
                        <th><b>DESCRIPTION</b></th>
                        <th><b>DATE</b></th>
                        <th><b>STATUS</b></th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        this.state.todoList.map(
                            (todo, index) =>

                            <tr key={index}>
                                <td>{todo.id}</td>
                                <td>{todo.username}</td>
                                <td>{todo.description}</td>
                                <td>{todo.targetDate}</td>
                                <td>{todo.isDone}</td>
                            </tr>
                        )

                    }
                    </tbody>
                </table>
                Please Goback page: <Link to="/welcome">here.</Link>
            </div>
        );
    }

    componentDidMount() {
        this.gettodoMessage();
    }

    gettodoMessage(){
        debugger;
        console.log("Welcome todo triggered....");
        let username = Authenticate.isLogginUsername();
        console.log("welcome username ==>"+username);
        WelcomeApiSerive.getTodoserviceMessage(username)
            .then( response => this.handleSuccessResponds(response) )
            .catch(function (error) {
                console.log(error)
            })
    }

    handleSuccessResponds(resp){
        console.log(resp.data);
        resp.data.map((item, key) => console.log(item.id));
        this.setState(
            {
                todoList : resp.data

            }

        );
    }
}

export default ListComponent;