import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Contact from './contacts';
import Button from './button';
import Todos from './Todos';

window.num = 5;

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: (new Date()).toLocaleTimeString()};
    }
    render(){
        return (<p>It is {this.state.time} o'clock</p>);
    }
    componentDidMount(){
        this.timer = setInterval(this.tick.bind(this), 1000);
    }
    ComponentDidUnMount(){
        clearInterval(this.timer);
        window.num++;
    }
    tick(){
        this.setState({ time: (new Date()).toLocaleTimeString()});
    }
}

function incrementNum (){
    window.num++
}

let myElement = <div>
    <h1>Hello world</h1>
    <Clock/>
    <button onClick={incrementNum()}>Increment</button>
    <p>Value store in memory: {window.num}</p>
    <Contact/>
    <Button>
    </Button>
    <Button />
    <Todos/>
</div>;

render(myElement, document.getElementById('root'));
registerServiceWorker();
