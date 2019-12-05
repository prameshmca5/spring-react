import React, {Component} from 'react';
import '../counter/Counter.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import AuthenticateRoute from "./AuthenticateRoute";
import LoginComponent from "./LoginComponent";
import ListComponent from "./ListComponent";
import HeaderComponent from "./HeaderComponent";
import FooderComponet from "./FooderComponet";

class TodoApp extends Component {
       render() {
        return (

            <div className="todoApps">
                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticateRoute path="/welcome" component={WelcomeComponent}/>
                        <AuthenticateRoute path="/todos" component={ListComponent}/>
                        <AuthenticateRoute path="/logout" component={LogoutComponent}/>
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


class WelcomeComponent extends Component{
    render() {
        return(
           <div>
               Please check that todo List in <Link to="/todos">here.</Link>
           </div>
        )
    }
}

class LogoutComponent extends Component{
    render() {
        return(
            <div>
                <h2>Thank you for using this site.. bye bye..</h2>
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


export default TodoApp;
