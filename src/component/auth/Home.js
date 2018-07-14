import React, { Component } from 'react';
import Login from "./Login";
import Register from "./Register";

class Home extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section id="viewWelcome">
                <div className="welcome">
                    <div className="signup">
                        <Login/>
                        <Register/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home