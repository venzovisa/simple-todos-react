import React from 'react'
import { Component } from 'react'
import Avatar from './Avatar';
import User from './User';
import Text from './Text';

class Todos extends Component {
    constructor(props){
        super(props);
        this.todo = props.todo;
        this.id = props.id;
        this.todoList = {
            data: [
                {
                    "id": 1,
                    "user": "Ivan",
                    "avatar": "https://media.mmo-champion.com/images/news/2018/february/WoWIcon01.jpg",
                    "todo": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                {
                    "id": 2,
                    "user": "Peter",
                    "avatar": "https://media.mmo-champion.com/images/news/2018/february/WoWIcon11.jpg",
                    "todo": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "id": 3,
                    "user": "George",
                    "avatar": null,
                    "todo": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                }
            ]
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
        console.log(item);
        return <li key={item.id} className="listItem">
            <Avatar src={item.avatar !== null ? item.avatar : "/noavatar.png"}/>
            <div className="todoContent">
                <Text todo={item.todo}/>
                <div><textarea disabled>Sample update</textarea></div>
                <User user={item.user}/>
            </div>
            <div className="todoNav">
                <button>Edit</button>
            </div>
        </li>
    }

    handleSubmit(){

    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <ul>
                    {this.todoList.data.map((value, index) => this.renderItem(value, index))}
                </ul>
            </div>
        );
    }
}

export default Todos