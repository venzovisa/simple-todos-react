import React, { Component } from 'react'

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0, number: 1};
        this.properties = {increment: 5};
        this.name = props.name;
    }
    updateCount(){
        this.setState((prevState, props) => (
            {
                count: prevState.count + 1,
                number: this.state.number + this.properties.increment
            }
        ));
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    render(){
        console.log(this.state);
        return (
            <div>
                <button onClick={this.updateCount.bind(this)}>
                Clicked {this.state.count} </button>
                Number: {this.state.number}
            </div>
        );
    }
}

export default Button