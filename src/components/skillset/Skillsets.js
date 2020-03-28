import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {TranslationContext} from '../../contexts/TranslationContext'
import {
    SkillsetsWrapper, 
    SkillsetTitle, 
    SkillsetWrapper, 
    SkillsetText, 
    SkillsetImage,
    SkillsetTechs
} from "./SkillsetsWrapper"
import {Title} from '../utility/Headings'
const Skillsets = ({skills}) => {

    return (
        <TranslationContext.Consumer>
            {
                translations => (
                    <SkillsetsWrapper>
                        <Title>{translations.skillsetTitle}</Title>    
                            {
                                skills.map((skill, i) => 
                                    <Skillset skill={skill} key={i} invert={i%2 === 0}/>     
                                )       
                            }
                    </SkillsetsWrapper>
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
        <SkillsetWrapper invert={props.invert}>       
            <SkillsetText primary={(i%2 === 0)}>
                <SkillsetTitle>{title}</SkillsetTitle>
                {documentToReactComponents(description.json,{})}   
                <div className="techs">      
                    {technologies && technologies.map((tech, i) => 
                        <SkillsetTechs key={i}>
                            <img alt={tech.title} title={tech.title} src={tech.file.url}></img>
                        </SkillsetTechs>
                        )
                    }                            
                </div>
            </SkillsetText>
            <SkillsetImage>
                <img src={image.file.url} alt={title}></img>
            </SkillsetImage>                        
        </SkillsetWrapper>   
        <hr />  
        </>  
    )
}
export default Skillsets;