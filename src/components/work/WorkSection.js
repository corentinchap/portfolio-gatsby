import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import Carousel from '../carousel/Carousel';
import {TranslationContext} from '../../contexts/TranslationContext'
import {WorkSectionWrapper} from './WorkSectionWrapper'
import {Title} from '../utility/Headings'

const WorkSection = ({projects}) => {
  
    return (
        <TranslationContext.Consumer>
            {
            translation => (
                <WorkSectionWrapper className="container">
                    <Title>{translation.workSectionTitle}</Title>
                        <Carousel id="project-carousel" autoHeightRefSelector={".project-content"} autoHeightOffset="50" >
                            {projects.map((project,i) => {
                                return ( 
                                    <ProjectDetails key={project.title} project={project} />     
                                );
                            })}
                        </Carousel>                                   
                        
                </WorkSectionWrapper>
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
