import React from 'react';
import '../assets/css/Navbar.css';
function Navbar(){
    return(
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <h3>ArtVista</h3>
                </div>
                <div className="nav-bar">
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">Roadmap</a>
                <a href="">Editor</a>
                <a href="">Add to Chrome</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar