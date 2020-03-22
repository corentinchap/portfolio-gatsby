import React, { useState } from 'react';

import ProjectDetails from './ProjectDetails';
import Carousel from './Carousel';
import {TranslationContext} from '../contexts/TranslationContext'

const WorkSection = ({projects}) => {
    const [selectedProject, setSelectedProject] = useState(0);
   
    const onProjectClick = (index) => {
        setSelectedProject(index)
    }
  
    return (
        <TranslationContext.Consumer>
            {
            translation => (
                <div className="work-section container">
                    <h1>{translation.workSectionTitle}</h1>
                    <div className="project-details">
                        <Carousel id="project-carousel" autoHeightRefSelector={".project-content"} autoHeightOffset="25" >
                            {projects.map((project,i) => {
                                return ( 
                                    <ProjectDetails key={project.title} project={project} />     
                                );
                            })}
                        </Carousel>                                   
                    </div>    
                </div>
            )}
        </TranslationContext.Consumer>
            
    )
    
}
WorkSection.defaultProps = {
    projects:[
        {
            titre: "default",
            tags: ["",""],
            url: "",
            gitUrl: "",
            description: undefined
        },
        {
            titre: "default",
            tags: ["",""],
            url: "",
            gitUrl: "",
            description: undefined
        }
    ]
        
    
}
export default WorkSection;
