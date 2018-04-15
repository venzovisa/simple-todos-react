import React, { Component } from 'react'

class Text extends Component {
    constructor(props){
        super(props);
        this.todo = props.todo;
    }
    updateCount(){
        this.setState((prevState, props) => (
            {
                count: prevState.count + 1,
                number: this.state.number + this.properties.increment
            }
        ));
    }

    componentDidMount(){}
    componentWillUnmount(){}
    componentDidUpdate(){}

    render(){
        return (
            <span>
                {this.todo}
            </span>
        );
    }
}

export default Text