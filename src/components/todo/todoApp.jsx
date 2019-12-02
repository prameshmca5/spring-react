import React, {Component} from 'react';
import '../counter/Counter.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class TodoApp extends Component {
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
        //this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
       // this.handlerPasswwordChange = this.handlerPasswwordChange.bind(this);
    }

    handlerChange(event){

        //this.setState({[event.target.name]: event.target.value});
        this.setState({[event.target.name]: event.target.value});



    }

    loginClicked(event){
        if(this.state.username==='ramesh' && this.state.password==='password') {
            console.log("Successful");
            this.setState({invalidmsg:false});
            this.setState({successmsg: true});
        }else {
            console.log("Failed");
            this.setState({invalidmsg:true});
            this.setState({successmsg: false});
        }
        console.log(this.state);
    }

   /* handlerUsernameChange(event){
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value});
    }

    handlerPasswwordChange(event){
        console.log(event.target.value);
        this.setState({password: this.state.password});
    }*/
    render() {
        return (
            <div>
              {/*  <Router>
                    <Route path="/" component={TodoApp}/>
                    <Route path="/login" component={TodoApp}/>
                    <Route path="/welcome" component={WelcomeComponent}/>

                </Router>*/}
                <h2> Welcome Login Page</h2> <br/>
                {this.state.invalidmsg && <div>Invalid Login</div>}
                {this.state.successmsg && <div>Login Successful</div>}
                User Name : <input type="text" name="username" value={this.state.username} onChange={this.handlerChange}/><br/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handlerChange} /><br/>
                <button onClick={this.loginClicked}>LogIn</button>

                <div>
                    <b>
                        <WelcomeComponent />
                    </b>
                </div>
            </div>

        );
    }
}

class WelcomeComponent extends Component{
    render() {
        return(
           <div>Welcome Component</div>
        )
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
