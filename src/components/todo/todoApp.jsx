import React, {Component} from 'react';
import '../counter/Counter.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthenticateRoute from "./AuthenticateRoute";
import LoginComponent from "./LoginComponent";
import ListComponent from "./ListComponent";
import HeaderComponent from "./HeaderComponent";
import FooderComponet from "./FooderComponet";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";


class TodoApp extends Component {
       render() {
        return (

            <div className="todoApps">
                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticateRoute path="/welcome/:name" component={WelcomeComponent}/>
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







export default TodoApp;
