import React from 'react'
import {Link} from 'react-router-dom';
import Logout from './../auth/Logout';

let Header = () => {
    return (
        <header>
            <span className="logo">logo</span>
            <div id='profile'><span>pesho</span>|<Link to="/" onClick={Logout}>Logout</Link></div>
        </header>
    )
};

export default Header