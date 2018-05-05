import React, { Component } from 'react'
import Avatar from "../Avatar/Avatar";
import Text from "../Text/Text";
import User from "../User/User";
import { Row, Col } from "reactstrap";

class Todo extends Component {
    constructor(props){
        super(props);
        this.item = props.item;
        this.onItemClick = props.onItemClick;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onItemClickHandler = this.onItemClickHandler.bind(this);
    }
    updateCount(){
        this.setState((prevState, props) => (
            {
                count: prevState.count + 1,
                number: this.state.number + this.properties.increment
            }
        ));
    }

    onItemClickHandler(){
        this.props.onItemClick(this.props.item.id);
    }

    componentDidMount(){}
    componentWillUnmount(){}
    componentDidUpdate(){}

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <Col xs="12" key={this.item.id} className="listItem">
                <Row>
                    <Col xs="12" sm="3">
                        <Avatar src={this.item.avatar !== null ? this.item.avatar : "/noavatar.png"}/>
                        <User user={this.item.user}/>
                    </Col>
                    <Col xs="12" sm="9" className="todoContent">
                        <Text todo={this.item.todo} id={this.item.id}/>
                    </Col>
                    <Col xs="12" className="todoNav" >

                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Todo