import React from 'react';
import '../styles/Skillset.scss';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {TranslationContext} from '../contexts/TranslationContext'

const Skillsets = ({skills}) => {

    return (
        <TranslationContext.Consumer>
            {
                translations => (
                    <div className="skillsets container">
                        <h1 style={{marginBottom: 15}}>{translations.skillsetTitle}</h1>    
                            {
                                skills.map((skill, i) => 
                                    <Skillset skill={skill} index={i} key={i}/>     
                                )       
                            }
                    </div>
                )
            }
        </TranslationContext.Consumer>
            

    )
}

const Skillset = (props) => {
    const {title, description, technologies, image} = props.skill;
    let i = props.index;
    return (
        <>
        <div className="skillset row flex">       
            <div className={'skillset-text s12 m6 l6 col ' + (i%2 === 0  ? 'push-l6' : '')}>
                <h4>{title}</h4>
                {documentToReactComponents(description.json,{})}   
                <div className="techs">      
                    {technologies && technologies.map((tech, i) => <span data-cursor="hover" key={i}><img alt={tech.title} title={tech.title} src={tech.file.url}></img></span>)}                            
                </div>
            </div>
            <div className={'skillset-image valign-wrapper s12 m6 l6 col hide-on-small-only ' + (i%2 === 0 ? 'pull-l6' : '')}>
                <img className={i%2 === 0 ? 'left' : 'right'} src={image.file.url} alt={title}></img>
            </div>                        
        </div>   
        <hr />  
        </>  
    )
}
export default Skillsets;