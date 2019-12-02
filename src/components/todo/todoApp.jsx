import React, {Component} from 'react';
import '../counter/Counter.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class TodoApp extends Component {
       render() {
        return (

            <div className="todoApps">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome" component={WelcomeComponent}/>
                        <Route path={"/todos"} component={ListComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
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
        debugger;
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
           <div>Welcome Component</div>
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

    }
    render() {
        return(
          <div>List Component Created.</div>
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
