// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    // const [heheHeader, addCharacter] = useState(['']);
    // useEffect(() => {
    //     let lettersLogged = 0;
    //     setInterval(() => {
    //         if (lettersLogged < 100) {
    //             thatsMe.forEach((letter, idx) => {
    //                 setTimeout(() => {
    //                     addCharacter(heheHeader + letter);
    //                     lettersLogged++
    //                 }, idx * 25);
    //             })
    //         } else {
    //             return;
    //         }
    //     }, 250)    
    // })

    // const thatsMe = ["f ", "o ", "r ", "e ", "s ", "t ", "w ", "i ", "l ", "s ", "o ", "n "];
    // let lettersLogged = 0;

    // lol dont ask
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