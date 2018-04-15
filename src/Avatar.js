import React, { Component } from 'react'

class Avatar extends Component {
    constructor(props){
        super(props);
        this.src = props.src;
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
            <span className="todoAvatar">
                <img src={this.src} width="150px" alt="User avatar" />
            </span>
        );
    }
}

export default Avatar