import React, { Component } from 'react';
//import LoadingBar from "./LoadingBar";

class Register extends Component {
    constructor(props){
        super(props);
        this.dataCollector = (e) => {
            this.setState({[e.target.name]: e.target.value})
        };
        this.register = (e) => {
            e.preventDefault();
            fetch('https://baas.kinvey.com/user/kid_Bkeqsz2af', {
                method: 'POST',
                headers: {
                    Authorization: 'Basic ' + btoa('kid_Bkeqsz2af:14c60c62a0264b6ab39e38892ac158e0'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then(res=>{
                return res.json()
            }).then(parsedJson=>{
                console.log(parsedJson)
            });
        }
    }
    render(){
        return(
                        <form onSubmit={e=>{this.register(e)}} id="registerForm" className="form-control">
                            <h2>Register </h2>
                            <label>Username:</label>
                            <input onChange={this.dataCollector} name="username" type="text"/>
                            <label>Password:</label>
                            <input onChange={this.dataCollector} name="password" type="password"/>
                            <input id="btnRegister" value="Register" type="submit"/>
                        </form>
        )
    }
}

export default Register