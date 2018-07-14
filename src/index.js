import React from 'react';
import { Component } from 'react'
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Todos from './component/Todos/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Jumbotron} from "reactstrap";
import {BrowserRouter} from "react-router-dom";
import {Route, NavLink, Switch, Redirect} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/auth/Home';

window.num = 5;
window.logged = false;
window.wrappedBlogPost = "This is wrapped blog post data";
window.wrappedComment = "This is wrapped comment data";

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            blogPost: window.wrappedBlogPost
        };
    }

    componentDidMount() {}
    componentWillUnmount() {}
    handleChange() {}

    render() {
        return (<div>{this.state.blogPost}</div>)
    }
}

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            commentList: window.wrappedComment
        };
    }

    componentDidMount() {}
    componentWillUnmount() {}
    handleChange() {}

    render() {
        return (<div>{this.state.commentList}</div>)
    }
}

const WrappedComment = withSubscription(
    CommentList, window.wrappedComment
);

const WrappedBlogPost = withSubscription(
    BlogPost, window.wrappedBlogPost
);

function withSubscription(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData
            };
        }

        componentDidMount() {}

        componentWillUnmount() {}

        handleChange() {
            this.setState({
                data: selectData
            });
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent data={this.state.data} />;
        }
    };
}

const HomePage = () => (
    <h1>Home page</h1>
);

const About = props => (
    <div>
        <h1>About page</h1>
        <Route path={props.match.url + "/contact"} component={Contact}/>
    </div>
);

const Contact = () => {
    if (!window.logged) return (<Redirect to="/"/>);
    return (
    <h1>Contact page</h1>)
};

const NotFound = () => {
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
       // this.timer = setInterval(this.tick.bind(this), 1000);
    }
    // ComponentDidUnMount(){
    //     clearInterval(this.timer);
    //     window.num++;
    // }
    // tick(){
    //     this.setState({ time: (new Date()).toLocaleTimeString()});
    // }
}

 class App extends Component {
    constructor(){
        super();
        this.state = {
            token: ''
        }
    }

    componentDidMount(){
        if (localStorage.getItem('token')){
            this.setState({token:localStorage.getItem('token')})
        }
        console.log(this.state);
    }

    render () {
        return (
            <BrowserRouter>
                <Container>
                    <Row>
                        <Col xs="12">
                            <Header />
                            <Jumbotron>
                                <Clock/>
                                <h1 className="display-3">Simple TODO List</h1>
                                <p className="lead">Based on ReactJS / Reactstrap / Kinvey API</p>
                                <hr className="my-2" />
                                <NavLink to="/" className="btn btn-primary" activeClassName="btn-danger">Home</NavLink>
                                <NavLink to="/about" className="btn btn-primary" activeClassName="btn-danger">About</NavLink>
                                <NavLink to="/about/contact" className="btn btn-primary" activeClassName="btn-danger">Contact</NavLink>
                            </Jumbotron>
                            {console.log(this.state)}
                            {this.state.token === '' ? <Home/> : <h2>User logged</h2> }
                        </Col>
                        <Col xs="12">
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/about" component={About}/>
                                <Route component={NotFound}/>
                            </Switch>
                            <WrappedBlogPost/>
                            <WrappedComment/>
                        </Col>
                    </Row>
                    <Todos/>
                </Container>
            </BrowserRouter>
        )
    }
 }

render(<App />, document.getElementById('root'));
registerServiceWorker();
