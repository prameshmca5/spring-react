import React, {Component} from 'react';
import Authenticate from "./Authenticate";
import {Route, Redirect} from 'react-router-dom';

class AuthenticateRoute extends Component{
    render() {
        if(Authenticate.isLoggedInService()){
           return <Route {...this.props}/>
        }else {
            return <Redirect to="/login"/>
        }

    }
}

export default AuthenticateRoute;