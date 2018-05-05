import React, { Component } from 'react'

class Text extends Component {
    constructor(props){
        super(props);
        this.id = props.id;
        this.todo = props.todo;
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onEdit = this.onEdit.bind(this);
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

    handleChange(e){
        this.todo = e.target.value;
    }

    handleFormSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    onEdit(){
        document.getElementById(this.id).disabled = !document.getElementById(this.id).disabled;
    }

    render(){
        return (
            <div>
                <textarea disabled id={this.id} defaultValue={this.todo}></textarea>
                <button onClick={this.onEdit}>Edit</button>
            </div>
        );
    }
}

export default Text