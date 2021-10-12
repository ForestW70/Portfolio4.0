// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    const hi = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
    
    return (
        <header>
            <div className="">
                <div id="header-disp">
                    <span className="forest">FOREST WILSON</span>
                    <span className="hello-i-am">{hi}</span>
                </div>

                {/* navbar links */}
                <div id="nav">
                    <Link className="nav-links" id='aboutMeHead' to='/about' >
                        <h4>About Me</h4>
                    </Link>

                    <Link className="nav-links" id='projectsHead' to='/archive'>
                        <h4>Projects</h4>
                    </Link>

                    <Link className="nav-links" id='resumeHead' to="/resume">
                        <h4>Resume</h4>
                    </Link>
                </div>
            </div>
        </header>
    )
}