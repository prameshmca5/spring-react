import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            numbers  :[1, 2, 3, 4, 5],
            listItems : {}

        }
         this.increment = this.increment.bind(this);
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <li>{number}</li>
        );

    }

    componentDidMount() {
       /* this.setState(
            { numbers: [9,8,7,6,5,4] }
        )*/
    }



    render() {
        return(
            <div>
                {/*{this.state.numbers.map(data =>{console.log(data)})}*/}
                <button onClick={this.increment}>+{this.props.byinc}</button>
                <span className="counter">{this.state.counter}</span>

            </div>
        );


    }
    increment() {
        //alert("Hello Welcome test");
        // console.log("welcome for increment counter...")
        console.log(`Increment from parent ==> ${this.props.byinc}`)
        this.setState({
            counter: this.state.counter + this.props.byinc
        });

    }

}
Counter.defaultProps = {
    byinc: 1
}


Counter.p = {
    byinc: 1
}


export default Counter

