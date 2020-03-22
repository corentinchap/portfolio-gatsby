import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import CursorAwareButton from './CursorAwareButton';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class ProjectDetails extends Component {  
  
    render() {
        const {title, tags, description, url, gitUrl}  = this.props.project;
         return(
            <div className="project-content">
                <div className="project-title">
                    <h1>{title}</h1>
                </div>
                <div className="project-tags">
                    <span>technologies used : </span>
                    {tags.map((item, i) => {
                        return(<span key={i}>{item}</span>)
                    })}
                
                </div>
                <div className="project-body"> 
                    {documentToReactComponents(description.json,{})}
                </div>
                <div className="cta">  
                    {url && 
                    <CursorAwareButton 
                        defaultColor={"#1e1d28"} 
                        activeColor={"#fe9b34"}
                        onClick={() => window.open(url, "_blank")} 
                        icon={<FontAwesomeIcon  icon={faExternalLinkAlt} />} 
                    >
                    <div className="inner-text">website</div>
                    </CursorAwareButton>  }       
                    
                    {gitUrl && 
                    <CursorAwareButton 
                        activeColor={"white"} 
                        defaultColor={"#fe9b34"} 
                        onClick={() => window.open(gitUrl, "_blank")} 
                        icon={<FontAwesomeIcon  icon={faCodeBranch} />} 
                    >          
                        <div className="inner-text">code</div>
                    </CursorAwareButton>}         

                </div>
            </div>
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