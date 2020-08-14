import React from 'react';
import logo from '../../img/logo.jpg';
import wallpaper from '../../img/wallpaper.jpg';


function Home() {
    return (
        <div className="jumbotron jumbotron-fluid bg-transparent" style={mystyle.container}>
            <div className="info" style={mystyle.info}>
                <img alt="logo" src={logo} />
                <p style={mystyle.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <button type="button" className="btn btn-danger btn-lg" style={mystyle.btn}><i className="fa fa-play" style={mystyle.icon}></i>Play</button>
                <button type="button" className="btn btn-danger btn-lg" style={mystyle.btn}><i className="fa fa-info-circle" style={mystyle.icon}></i>More Info</button>
            </div>
        </div>
    );
}

const mystyle = ({
    container: {
    position: "relative",
    backgroundImage: `url(${wallpaper})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "115vh",
    top: "0",
    color: "white",
    letterSpacing: "0.4px",
    fontWeight: "500",
    },
    info: {
        paddingTop: "200px",
        paddingLeft: "60px",
        maxWidth: "500px",
        color: "white",
    },
    description: {
        paddingTop: "50px",
        paddingBottom: "100px",
    },
    icon: {
        marginRight: "10.5px"
    },
    btn: {
        marginBottom: "100px"
    }
})
export default Home;