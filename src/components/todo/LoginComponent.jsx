import React, {Component} from 'react';
import Authenticate from "./Authenticate";

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
            Authenticate.registerLoginSuccess(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
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
            <div className="form-group">
                <h2> Welcome Login Page</h2> <br/>
                {this.state.invalidmsg && <div>Invalid Login</div>}
                {this.state.successmsg && <div>Login Successful</div>}
                <label>User Name : </label><input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handlerChange}/><br/>
                <label>Password : </label><input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handlerChange} /><br/>
                <button className="btn btn-success" onClick={this.loginClicked}>LogIn</button>
            </div>
        );
    }
}

export default LoginComponent;