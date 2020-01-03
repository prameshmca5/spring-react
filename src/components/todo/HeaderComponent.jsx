import {Link} from "react-router-dom";
import Authenticate from "./Authenticate";
import React, {Component} from 'react';


class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar  navbar-expand-md navbar-dark bg-dark text-primary">
                    <div className="navbar-brand"><h3><b><a href="/"> Test Site</a></b></h3></div>
                    <ul className="navbar-nav">
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        <li className="nav-link"><Link to="/todos">Todos</Link></li>
                        <li className="nav-link"><Link to="/welcome/:name">Welcome</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"><Link to="/login">Login</Link></li>
                        <li className="nav-link"><Link to="/logout" onClick={Authenticate.logout}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;