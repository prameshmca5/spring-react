import React, {Component} from 'react';
import {Link} from "react-router-dom";
import WelcomeApiSerive from '../api/todo/welcomeApiSerive';

class WelcomeComponent extends Component{
    constructor(props) {
        super(props);
        this.getwelcomeMessage = this.getwelcomeMessage.bind(this);
        this.state ={
            welcomeMessage : ''
        }
        this.handleSuccessResponds = this.handleSuccessResponds.bind(this);
    }


    render() {

        var pathname = this.props.match.params.name;
        return(
            <div>
                Please check that todo List in <Link to="/todos">here.</Link> <br/><br/>
                Get Message for welcome content .... {pathname}<br/>
                <button onClick={this.getwelcomeMessage} className="btn btn-warning">Get Welcome Message</button>
                <br/><br/>
                <div className="container">
                    <h4>Hello Mr/Ms {this.state.welcomeMessage}</h4>
                </div>
            </div>
        )
    }

    getwelcomeMessage(){
        console.log("Welcome message triggered....");
        WelcomeApiSerive.getWelcomeserviceMessage(this.props.match.params.name)
            .then( response => this.handleSuccessResponds(response) )
            .catch(function (error) {
                console.log(error)
            })
    }

    handleSuccessResponds(resp){
        debugger;
        this.setState(
            {
                welcomeMessage : resp.data.message
            }
        )
    }
}

export default WelcomeComponent;