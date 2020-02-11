import React, { useState } from 'react';

import ProjectDetails from './ProjectDetails';
import Carousel from './Carousel';

const WorkSection = ({projects}) => {
    const [selectedProject, setSelectedProject] = useState(0);
   
    const onProjectClick = (index) => {
        setSelectedProject(index)
    }
  
    return (
            <div className="work-section container">
                <h1>What I do</h1>
                <div className="project-details">
                    <Carousel id="project-carousel" autoHeightRefSelector={".project-content"} autoHeightOffset="25" >
                        {projects.map((project,i) => {
                            return ( 
                                <React.Fragment key={i}>
                                    <ProjectDetails project={project} ></ProjectDetails>
                                </React.Fragment>
                            );
                        })}
                    </Carousel>                                   
            </div>
            
        </div>
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
