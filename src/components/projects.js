import { useState } from 'react';
import { projects } from '../assets/data/siteData';



export default function Projects(...props) {
    const [selectedProject, changeProjectView] = useState(projects[0])


    function HeroDisplay() {
        

        return (
            <section id="projects">
                <h3 className="sec-title">Projects from the archive...</h3>
                <div className="project-view">
                    <img className="display-img" src={selectedProject.image} alt={selectedProject.imageAlt}></img>
                    <div className="proj-info">
                        <article>{selectedProject.title}
                            <div className="proj-abst">Abstract:
                                <p>{selectedProject.description}</p>
                                <div>
                                    <p>Deployment date:</p>
                                    <span>{selectedProject.deploymentDate}</span>

                                </div>
                                <div>
                                    <p>Technologies used:</p>
                                    <span>{selectedProject.techUsed}</span>
                                </div>

                            </div>
                            <div className="proj-links">
                                <a href={selectedProject.repo}>Visit repository</a>
                                <a href={selectedProject.page}>Visit site</a>
                            </div>
                        </article>


                    </div>
                </div>
            </section>
        )
    }



    function LilGuys() {
        function changeView(key) {
            changeProjectView(projects[key])
        }

        return projects.map((item, key) => (
            <button
                className="proj-buttons"
                onClick={() => changeView(key)}>
                {item.title}
            </button>
        ))
    }


    return (
        <div>
            <HeroDisplay />
            <p><strong>Bootcamp assignments:</strong></p>
            <LilGuys />
        </div>
    )
}