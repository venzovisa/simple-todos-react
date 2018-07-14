import React, { Component } from 'react';
import reqHandler from "./../utils/reqHandler";
import LoadingBar from "./LoadingBar";
//import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            logged: false
        };
        this.dataCollector = (e) => {
            console.log(e);
          this.setState({[e.target.name]: e.target.value})
        };
        this.Login = (e) => {
            e.preventDefault();
            this.setState({loading: true});
            console.log(this.state);
            reqHandler.login(this.state).then(res => {
                this.setState({loading: false, logged: true});
                console.log(this.state);
                console.log(res);
                localStorage.setItem('token', res._kmd.authtoken);
            });
            fetch("https://baas.kinvey.com/appdata/kid_Bkeqsz2af/todos/5af004ff8ad21e249a7d1693").then(res => {
                return res.json()
            }).then(parsedJSON => {
                console.log(parsedJSON)
            });
        }
    }

    render(){
        return(
            <div>
                <form id="loginForm" className="form-control" onSubmit={this.Login}>
                    <h2>Sign In {this.state.loading && <LoadingBar />}</h2>
                    <label>Username:</label>
                    <input onChange={this.dataCollector} name="username" type="text"/>
                    <label>Password:</label>
                    <input onChange={this.dataCollector} name="password" type="password"/>
                    <input id="btnLogin" value="Sign In" type="submit"/>
                </form>
            </div>
        )
    }
}

export default Login