import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Todos from './component/Todos/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Jumbotron} from "reactstrap";
import {BrowserRouter} from "react-router-dom";
import {Route, Link, NavLink, Switch, Redirect} from "react-router-dom";

window.num = 5;
window.logged = false;

const Home = props => (
    <h1>Home page</h1>
);

const About = props => (
    <div>
        <h1>About page</h1>
        <Route path={props.match.url + "/contact"} component={Contact}/>
    </div>
);

const Contact = props => {
    if (!window.logged) return (<Redirect to="/"/>);
    return (
    <h1>Contact page</h1>)
};

const NotFound = props => {
    return (
        <h1>404 Not Found!</h1>)
};

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

const App =  <BrowserRouter>
            <Container>
                <Row>
                    <Col xs="12">
                        <Jumbotron>
                            <h1 className="display-3">Simple TODO List</h1>
                            <p className="lead">Based on ReactJS / Reactstrap</p>
                            <hr className="my-2" />
                            <NavLink to="/" className="btn btn-primary" activeClassName="btn-danger">Home</NavLink>
                            <NavLink to="/about" className="btn btn-primary" activeClassName="btn-danger">About</NavLink>
                            <NavLink to="/about/contact" className="btn btn-primary" activeClassName="btn-danger">Contact</NavLink>
                        </Jumbotron>
                    </Col>
                    <Col xs="12">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Col>
                </Row>
                <Todos/>
            </Container>
        </BrowserRouter>;

render(App, document.getElementById('root'));
registerServiceWorker();
