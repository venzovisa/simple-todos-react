import React, { Component } from 'react'

class User extends Component {
    constructor(props){
        super(props);
        this.user = props.user;
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
                <div className="todoUser">by {this.user}</div>
        );
    }
}

export default User