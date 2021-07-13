import { Link } from 'react-router-dom';


export default function Header(props){
    return (
        <header>
        <div className="">
            <div id="header-disp">

                <span className="hello-i-am">Forest Wilson</span>
            </div>
            
            <div id="nav">
                <Link className="nav-links" id='aboutMeButton' to='/aboutMe'>
                    <h4>About Me</h4>
                </Link>

                <Link className="nav-links" id='projectsButton' to='/projects'>
                    <h4>Projects</h4>
                </Link>

                <Link className="nav-links" id='blogButton' to='/blog'>
                    <h4>Blog</h4>
                </Link>

                <Link className="nav-links" id='contactMeButton' to="/contactMe">
                    <h4>Contact Me</h4>
                </Link>

                <Link className="nav-links" id='resumeButton' to="/resume">
                    <h4>Resume</h4>
                </Link>
            </div>
        </div>
    </header>
    )

}