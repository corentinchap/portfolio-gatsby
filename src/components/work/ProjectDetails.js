import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import CursorAwareButton from '../CursorAwareButton'
import {ProjectWrapper, ProjectTitle, ProjectTags, ProjectBody} from './ProjectDetailsWrapper'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class ProjectDetails extends Component {  
  
    render() {
        const {title, tags, description, url, gitUrl}  = this.props.project;
         return(
            <ProjectWrapper>

                <ProjectTitle>{title}</ProjectTitle>
                
                <ProjectTags>
                    <span>technologies used : </span>
                    {tags.map((item, i) => {
                        return(<span key={i}>{item}</span>)
                    })}
                
                </ProjectTags>
                <ProjectBody> 
                    {documentToReactComponents(description.json,{})}
                </ProjectBody>
                <div className="cta">  
                    {url && 
                    <CursorAwareButton
                        fontColor={"#fe9b34"} 
                        activeColor={"black"} 
                        onClick={() => window.open(url, "_blank")} 
                        icon={<FontAwesomeIcon  icon={faExternalLinkAlt} />} 
                    >
                    <div className="inner-text">website</div>
                    </CursorAwareButton>  }       
                    
                    {gitUrl && 
                    <CursorAwareButton
                        fontColor={"white"} 
                        activeColor={"#fe9b34"}
                        onClick={() => window.open(gitUrl, "_blank")} 
                        icon={<FontAwesomeIcon  icon={faCodeBranch} />} 
                    >          
                        <div className="inner-text">code</div>
                    </CursorAwareButton>}         

                </div>
            </ProjectWrapper>
        )
    }
    
}

ProjectDetails.defaultProps = {
    project:{
        name: "default Project",
        tags:[
            "default tag"
        ],
        description: "default description",
        url: "",
        gitUrl: ""
    }
}

export default ProjectDetails;