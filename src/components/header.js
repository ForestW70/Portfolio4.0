import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
        <header>
            <div className="">
                <div id="header-disp">
                    
                    <span className="hello-i-am">ForestWilson</span>
                </div>

                <div id="nav">
                    <Link className="nav-links" id='aboutMeButton' to='/about'>
                        <h4>About Me</h4>
                    </Link>

                    <Link className="nav-links" id='projectsButton' to='/archive'>
                        <h4>Projects</h4>
                    </Link>

                    <Link className="nav-links" id='blogButton' to='/blog'>
                        <h4>Blog</h4>
                    </Link>

                    <Link className="nav-links" id='resumeButton' to="/resume">
                        <h4>Resume</h4>
                    </Link>
                </div>
            </div>
        </header>
    )

}