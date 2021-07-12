import { Link } from 'react-router-dom';


export default function Header(props){
    return (
        <header>
        <div class="">
            <div id="header-disp">

                <span class="hello-i-am">Forest Wilson</span>
            </div>
            
            <div id="navDirectory">
                <Link className="links navLinks" id='aboutMeButton' to='/aboutMe'>
                    <h4>About Me</h4>
                </Link>

                <Link className="links navLinks" id='projectsButton' to='/projects'>
                    <h4>Projects</h4>
                </Link>

                <Link className="links navLinks" id='contactMeButton' to="/contactMe">
                    <h4>Contact Me</h4>
                </Link>

                <Link className="links navLinks" id='resumeButton' to="/resume">
                    <h4>Resume</h4>
                </Link>
            </div>
        </div>
    </header>
    )

}