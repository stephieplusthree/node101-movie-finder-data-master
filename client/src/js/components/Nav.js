import React from 'react';
import '../../css/App.css';
import { Link } from 'react-router-dom';
import netflixLogo from '../../img/netflix-logo.png';

function Nav() {
    return (
        <nav>
            <h3><img height="75" src={netflixLogo} /></h3>
            <ul className="left-link">
                <Link to="/fistPage">
                    <li>First Page</li>
                </Link>
                <Link to="/secondPage">
                    <li>Second Page</li>
                </Link>
                <Link to="/thirdPage">
                    <li>Third Page</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;