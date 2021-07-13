import { useState } from 'react';
import { projects } from '../assets/data/projectsData';



export default function Projects(props) {
    const [selectedProject, changeProjectView] = useState(projects[1])


    function HeroImg() {
        return (
            <section id="projects">
                <h3>Projects:</h3>
                <div className="project-view">
                    <img className="display-img" src={selectedProject.image} alt={selectedProject.imageAlt}></img>
                    <div className="info">
                        <div>Project title:
                            <p>{selectedProject.title}</p>
                        </div>
                        <div>Deployment date:
                            <p>{selectedProject.deploymentDate}</p>
                        </div>
                        <div>Project description:
                            <p>{selectedProject.description}</p>
                        </div>
                        <div>Technologies
                            <p>{selectedProject.techUsed}</p>
                        </div>
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
            onClick={() => changeView(key)}>{item.title}</button>
            
        ))

    }


    return (
        <div>
            <HeroImg />
            <LilGuys />

        </div>
    )
}