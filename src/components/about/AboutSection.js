import React, { Component, useEffect } from 'react';
import {TranslationContext} from '../../contexts/TranslationContext'
import {withTheme} from 'styled-components'
import LangSwitcher from '../LangSwitcher'
import {AboutSectionWrapper, AboutSectionClip, AboutPattern, ProfilePicture} from './AboutWrapper'
import AboutPresentation from './AboutPresentation'

const AboutSection = (props) => {
    
    const {name, position, linkedinUrl, githubUrl, codewarsUrl, freecodecampUrl, image} = props.person;
    const links = {linkedinUrl, githubUrl, codewarsUrl, freecodecampUrl};
  
    return (
        <TranslationContext.Consumer>
        {
            translations => (
                
                <AboutSectionWrapper>
                    <LangSwitcher currentLocale={translations.node_locale} />
                    <AboutSectionClip theme={props.theme} >
                    <div className="container">
                        <div className="row flex">
                            <div className="title valign-wrapper col m6">
                                <ProfilePicture>
                                    <img src={image.file.url} alt="avatar"></img>
                                </ProfilePicture>
                            </div>
                            <div className="content valign-wrapper col s12 m6">
                                <AboutPresentation 
                                    name={name} 
                                    position={position} 
                                    links={links} 
                                    getInTouchLabel={translations.getInTouchLabel}
                                />
                            </div>
                        </div>
                    </div>
                    <AboutPattern />
                    </AboutSectionClip>
                </AboutSectionWrapper>
            )
        }
        </TranslationContext.Consumer>
    )
    
}


AboutSection.defaultProps = {
    person: {
        name : "Michel", 
        position : "Stagière",
        linkedinUrl : "",
        githubUrl : "", 
        codewarsUrl : "", 
        freecodecampUrl : "",
        image: undefined
    }
}
export default AboutSection;