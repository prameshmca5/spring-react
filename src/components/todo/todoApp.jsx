import React, {Component} from 'react';
import '../counter/Counter.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

class TodoApp extends Component {
       render() {
        return (

            <div className="todoApps">
                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooderComponet></FooderComponet>
                </Router>
            </div>

            /*
            <div>
                <div className="login">
                    <LoginComponent />
                </div>
                <div>
                    <b>
                        <WelcomeComponent />
                    </b>
                </div>
            </div>
            */

        );
    }
}

class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar  navbar-expand-md navbar-dark bg-dark text-primary">
                    <div className="navbar-brand"><h3><b><a href="/"> Test Site</a></b></h3></div>
                    <ul className="navbar-nav">
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        <li className="nav-link"><Link to="/todos">Todos</Link></li>
                        <li className="nav-link"><Link to="/welcome">Welcome</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"><Link to="/login">Login</Link></li>
                        <li className="nav-link"><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooderComponet extends Component {
    render() {
        return(
             <footer className="footer">
                 All content Reserved for Ramesh.
             </footer>
        )
    }
}

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'ramesh',
            password: 'password',
            invalidmsg: false,
            successmsg: false
        };
        this.handlerChange = this.handlerChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    handlerChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    loginClicked(event){
        if(this.state.username==='ramesh' && this.state.password==='password') {
            console.log("Successful");
            this.props.history.push('/welcome')
           // this.setState({invalidmsg:false});
            //this.setState({successmsg: true});
        }else {
            console.log("Failed");
            this.setState({invalidmsg:true});
            this.setState({successmsg: false});
        }
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <h2> Welcome Login Page</h2> <br/>
                {this.state.invalidmsg && <div>Invalid Login</div>}
                {this.state.successmsg && <div>Login Successful</div>}
                User Name : <input type="text" name="username" value={this.state.username} onChange={this.handlerChange}/><br/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handlerChange} /><br/>
                <button onClick={this.loginClicked}>LogIn</button>
            </div>
        )
        ;
    }
}

class WelcomeComponent extends Component{
    render() {
        return(
           <div>
               Please check that todo List in <Link to="/todos">here.</Link>
           </div>
        )
    }
}

class ErrorComponent extends Component {
    render() {
        return (
            <div className="errorComp">
                Somthing is Wrong, Kindly Contact to Server Team and Rectified about that issue.

            </div>
        )
    }
}


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
                <table class="table table-hover">
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
                            <tr>
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
/*
function ShowInvalidCreditance(props) {
    if(props.invalidmsg){
        return <div>Invalid Login</div>
    }
    return null
}
function ShowSuccessMsg(props) {
    if(props.successmsg){
        return <div>Login Successful</div>
    }
    return null
}
*/

export default TodoApp;
