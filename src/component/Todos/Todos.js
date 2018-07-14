import React from 'react'
import { Component } from 'react'
import Todo from "../Todo/Todo";
import { Row, Col } from 'reactstrap';

//const TextAreaValidation = props => (<div className="alert alert-danger">Warning! Too short. Min value is 10 letters or more.</div>)
//{this.handleSubmit === true ? <TextAreaValidation />: ""}

class Todos extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        //this.onEditText = this.onEditText.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.newName = "newName";
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
                },
                {
                    "id": 4,
                    "user": "Harry",
                    "password": "1234",
                    "avatar": null,
                    "todo": "Its good to be here"
                }
            ],
            formName: '',
            formPassword: '',
            formTodo: '',
            deleteByName: ''
        }
    }


    // updateCount(){
    //     this.setState((prevState, props) => (
    //         {
    //             count: prevState.count + 1,
    //             number: this.state.number + this.properties.increment
    //         }
    //     ));
    // }
    componentDidMount(){
       // console.log("componentDidMount")
    }
    componentWillUnmount(){
       // console.log("componentWillUnmount")
    }
    componentDidUpdate(){
       // console.log("componentDidUpdate");
    }

    // onEditText(){
    //     let newData = this.state.data.slice();
    //     newData[0].todo1 = "Sample text";
    //     console.log(newData);
    //     this.setState(prevData => ({
    //         prevData: newData
    //     }));
    //     console.log(this.state.data);
    // }

    renderItem(item, id){
        return <Todo key={id} item={item} onEditText={this.onEditText}/>
    }

    inputHandler(e){
        // Passing input value via input name attribute
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.deleteByName);
    }

    handleSubmit(event){
        // add new ID via last item
        event.preventDefault();
        console.log("Form submitted");
        let dataLength = this.state.data.length;
        let newID = dataLength > 0 ? this.state.data[dataLength-1].id+1 : 1;
        let newItem= {
            "id": newID,
            "user": this.state.formName,
            "password": this.state.formPassword,
            "avatar": null,
            "todo": this.state.formTodo
        };
        //console.log(newItem);
        if (this.state.formTodo.length < 10) {console.log ("Too short!")}
        else {
            this.setState((prevState) => ({data: prevState.data.slice().concat(newItem)}));
        }

       //console.log(this.state.data);
       //console.log("data length " + this.state.data.length);
       //console.log(event);
    }

    handleEdit(e) {
        e.preventDefault();
        this.setState(function(prevState) {
            let newState = prevState.data.slice();
            newState.shift();
            //newState.data.map((v, i) => {
        //         if (v.user === "Venzo") v.user ="Kremena";
        // });
            //console.log(newState.data);
            return {data: newState}
        });
        //console.log(this.state.data);
    }

    handleDelete(e) {
        e.preventDefault();
        this.setState(function(prevState) {
            let newState = prevState.data.slice();
            let filteredData = newState.filter(element =>  element.user.toLowerCase() !== this.state.deleteByName);
            console.log(filteredData);
            //newState.data.map((v, i) => {
            //         if (v.user === "Venzo") v.user ="Kremena";
            // });
            //console.log(newState.data);
            return {data: filteredData}
        });
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
                    <form onSubmit={this.handleEdit} className="form-control">
                        <input placeholder="Name" type="text" name="formName" onChange={this.inputHandler} value={this.state.formName} />
                        <input type="submit" value="EDIT" className="btn btn-primary" />
                    </form>
                    <form onSubmit={this.handleDelete} className="form-control">
                        <input placeholder="Name" type="text" name="deleteByName" onChange={this.inputHandler} value={this.state.deleteByName} />
                        <input type="submit" value="DELETE" className="btn btn-primary" />
                    </form>
                </Col>
                <Col xs="12">
                        {this.state.data.map((value, index) => this.renderItem(value, index))}
                </Col>
            </Row>
        );
    }
}

export default Todos