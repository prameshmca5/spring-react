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


export default LoginComponent;