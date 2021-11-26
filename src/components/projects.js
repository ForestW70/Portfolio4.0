import { useState } from 'react';
import { projects } from '../assets/data/siteData';

const buttonMasher = (max) => {
    console.log(Math.floor(Math.random() * max));
    let radii = [];
    for (let i = 0; i < 9; i++) {
        let rInt = (Math.floor(Math.random() * max))
        radii.push(rInt)
    }
    console.log(radii)
    return radii;
}


export default function Projects() {
    // big project state 
    const [selectedProject, changeProjectView] = useState(projects[0])
    const [buttonWarp, changeWarp] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    // display big project
    function HeroDisplay() {

        return (
            <section id="projects">
                <h3 className="sec-title">Projects from the archive...</h3>

                <div className="project-view">
                    <img className="display-img" src={selectedProject.image} alt={selectedProject.imageAlt}></img>

                    <div className="proj-info">
                        <article>
                            <h1 className="proj-title">{`"${selectedProject.title}"`}</h1>

                            <div className="proj-abst">
                                <h4 className="desc-title">Abstract:</h4>
                                <p>{selectedProject.description}</p>

                                <div className="proj-specs">
                                    <h6 className="spec-title">Deployment date:</h6>
                                    <h6 className="spec-title">Technologies used:</h6>
                                    <span>{selectedProject.deploymentDate}</span>
                                    <span>{selectedProject.techUsed}</span>
                                </div>
                            </div>

                            <div className="proj-links">
                                <a
                                    href={selectedProject.repo}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    style={{
                                        "borderRadius": `${buttonWarp[0]}px ${buttonWarp[1]}px ${buttonWarp[2]}px ${buttonWarp[3]}px`
                                    }}
                                >
                                    Visit repository
                                </a>

                                {selectedProject.page ?
                                    <a
                                        href={selectedProject.page}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        style={{
                                            "borderRadius": `${buttonWarp[4]}px ${buttonWarp[5]}px ${buttonWarp[6]}px ${buttonWarp[7]}px`
                                        }}
                                    >
                                        Visit site
                                    </a>
                                    :
                                    <a
                                        href={selectedProject.demo}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        style={{
                                            "borderRadius": `${buttonWarp[4]}px ${buttonWarp[5]}px ${buttonWarp[6]}px ${buttonWarp[7]}px`
                                        }}>
                                        View demo
                                    </a>
                                }
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        )
    }

    // display all projects buttons, click event for state.
    function LilGuys() {
        function changeView(key) {
            let radii = buttonMasher(key * 2);
            changeWarp(radii)
            changeProjectView(projects[key]);
        }

        return projects.map((item, key) => (
            <button
                className="proj-buttons"
                key={key}
                onClick={() => changeView(key)}>
                {item.title}
            </button>
        ))
    }

    // return project page
    return (
        <div>
            <HeroDisplay />
            <p><strong>Project list:</strong></p>
            <LilGuys />
            {/* <Reversy /> */}
        </div>
    )
}