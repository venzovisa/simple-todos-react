import React, { Component } from 'react'
import Avatar from "../Avatar/Avatar";
import User from "../User/User";
import { Row, Col } from "reactstrap";

class Todo extends Component {
    constructor(props){
        super(props);
        this.item = props.item;
        this.onItemClick = props.onItemClick;
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onEditText = this.props.onEditText;
        this.onItemClickHandler = this.onItemClickHandler.bind(this);
    }
    // updateCount(){
    //     this.setState((prevState, props) => (
    //         {
    //             count: prevState.count + 1,
    //             number: this.state.number + this.properties.increment
    //         }
    //     ));
    // }

    onItemClickHandler(){
        this.props.onItemClick(this.props.item.id);
    }

    componentDidMount(){}
    componentWillUnmount(){}
    componentDidUpdate(){}


    onClickEdit(e){
        //document.getElementById(this.item.id).disabled = !document.getElementById(this.item.id).disabled;
        this.props.onEditText(e.target.value);
    }

    render(){
        return (
                <Row className="listItem">
                    <Col xs="12" sm="3">
                        <Avatar src={this.item.avatar !== null ? this.item.avatar : "/noavatar.png"}/>
                        <User user={this.item.user}/>
                    </Col>
                    <Col xs="12" sm="9" className="todoContent">
                            <textarea disabled id={this.item.id} defaultValue={this.item.todo}></textarea>
                            <button onClick={this.onClickEdit} value={"This is button value"}>Edit</button>
                    </Col>
                    <Col xs="12" className="todoNav" >

                    </Col>
                </Row>
        );
    }
}

export default Todo