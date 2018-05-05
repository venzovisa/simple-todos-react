import React from 'react'
import { Component } from 'react'
import Todo from "../Todo/Todo";
import { Button, Row, Col } from 'reactstrap';

const TextAreaValidation = props => (<div className="alert alert-danger">Warning! Too short. Min value is 10 letters or more.</div>)

class Todos extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.state = {
            data: [
                {
                    "id": 1,
                    "user": "Ivan",
                    "password": "1234",
                    "avatar": "https://media.mmo-champion.com/images/news/2018/february/WoWIcon01.jpg",
                    "todo": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                {
                    "id": 2,
                    "user": "Peter",
                    "password": "1234",
                    "avatar": "https://media.mmo-champion.com/images/news/2018/february/WoWIcon11.jpg",
                    "todo": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "id": 3,
                    "user": "George",
                    "password": "1234",
                    "avatar": null,
                    "todo": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                }
            ],
            formName: "",
            formPassword:"",
            formTodo:""
        }
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

    renderItem(item, id){
        return <Col xs="12" key={id}>
                <Todo item={item}/>
            </Col>
    }

    inputHandler(e){
        // Passing input value via input name attribute
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event){
        // add new ID via last item
        event.preventDefault();
        console.log("Form submitted");
        let newID = this.state.data[this.state.data.length-1].id+1;
        let newItem= {
            "id": newID,
            "user": this.state.formName,
            "password": this.state.formPassword,
            "avatar": null,
            "todo": this.state.formTodo
        };
        if (this.state.formTodo.length < 10) {return true}
        else {
            this.setState({data: this.state.data.concat(newItem)});
        }
       console.log(this.state.data);
       console.log("data length " + this.state.data.length);
       console.log(event);
    }

    render(){
        return (
            <Row>
                <Col xs="12">
                    <form onSubmit={this.handleSubmit} className="form-control">
                        <input placeholder="Name" type="text" name="formName" onChange={this.inputHandler} value={this.state.formName} />
                        <input placeholder="Password" type="password" name="formPassword" onChange={this.inputHandler} value={this.state.formPassword}/>
                        <textarea name="formTodo" onChange={this.inputHandler} value={this.state.formTodo}/>
                        <input type="submit" value="ADD" className="btn btn-primary" />
                    </form>
                    {this.handleSubmit === true ? <TextAreaValidation /> : ""}
                </Col>
                <Col xs="12">
                    <Row>
                        {this.state.data.map((value, index) => this.renderItem(value, index))}
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Todos