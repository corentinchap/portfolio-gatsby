import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import CursorAwareButton from '../CursorAwareButton'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from 'styled-components'

const ProjectContent = styled.div.attrs(props => ({
    className: 'project-content'
}))`
    margin: 5px;
    padding: 0 15px 15px 15px;
    border-radius: 5px;

    .cta{
        width: 100%;
        display:flex;
        
        > div:nth-child(2){
            margin-left: 15px;
        }
    }
`

const ProjectTitle = styled.h1`
    &&{
        text-align: left;
        font-family: "Passion One";
        font-size: 2.3em;
        color: ${props => props.theme.secondary};
    }
`

const ProjectTags = styled.div`
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    width:100%;
    span:first-child{
      font-weight: bold;
      padding-left: 0;
    }
      span {
          padding: 2px 0 0 15px;
          color: ${props => props.theme.primary};
      }
  }
`

const ProjectBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;

    p{
        font-size: 1.2em;
        &:last-child{
            float: right;
        }
      }
`

class ProjectDetails extends Component {  
  
    render() {
        const {title, tags, description, url, gitUrl}  = this.props.project;
         return(
            <ProjectContent>

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
            </ProjectContent>
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