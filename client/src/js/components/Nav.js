import React, { useState, useEffect} from 'react';
import '../../css/App.css';
import { Link } from 'react-router-dom';
import netflixLogo from '../../img/netflix-logo.png';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-white">
            <a className="navbar-brand" href="#"><img height="75" src={netflixLogo} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <Link to="/home">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                    </Link>
                    <Link to="/tvShows">
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV Shows</a>
                        </li>
                    </Link>
                    <Link to="/movies">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Movies</a>
                        </li>
                    </Link>
                    <Link to="/latest">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Latest</a>
                        </li>
                    </Link>
                    <Link to="/myList">
                        <li className="nav-item">
                            <a className="nav-link" href="#">My List</a>
                        </li>
                    </Link>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <Link to="/firstPage">
                        <li className="nav-link"><i class="fa fa-search"></i></li>
                    </Link>
                    <Link to="/firstPage">
                        <li className="nav-link"><i class="fa fa-bell"></i></li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
    const style = ({
        container: {
            padding: "100px",
            color: "white",
            background: "black",
            marginTop: "60px",
            position: "fixed",
            height: "68px",
            width: "100%",
            justifyContent: "space-between",
        }, 
        icon: {
            marginLeft: "60px",
        }
    })
};

export default Nav;