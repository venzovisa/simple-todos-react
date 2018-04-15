import React from 'react';
import {Component} from "react";
import data from './data';

class Contact extends Component {
    constructor(props){
        super(props);
        this.name = props.name;
        this.id = props.id;
    }

    render(){
        return <div>
            {data.map((i, v) => renderContact(i, v))}
        </div>
    }
}

function renderContact(data, id){
    return (
        <div key={data.id}>
            {data.name} {data.id}
        </div>
    )
}


export default Contact;