import React, { Component, useEffect } from 'react';
import CursorAwareButton from './CursorAwareButton'
import '../styles/AboutSection.scss'
import {TranslationContext} from '../contexts/TranslationContext'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import freecodecamp from '../assets/freecodecamp.svg'
import codewars from '../assets/codewars.png'
import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import M from 'materialize-css'
import { redirectTo, navigate } from '@reach/router'

const AboutSection = (props) => {
    
    const {name, position, linkedinUrl, githubUrl, codewarsUrl, freecodecampUrl, image} = props.person;

    const scrollToForm = () => {
        window.scrollBy({ 
            top: document.querySelector('body').scrollHeight, 
            left: 0, 
            behavior: 'smooth' 
          });
    }

  
    return (
        <TranslationContext.Consumer>
        {
            translations => (
                
                <div className="about-section">
                    <LangSwitcher currentLocale={translations.node_locale} />
                    <div className="about-section--clip">
                    <div className="container">
                        <div className="row flex">
                            <div className="title valign-wrapper col m6">
                            <div className="profile-picture">
                                <img src={image.file.url} alt="avatar"></img>
                            </div>
                            </div>
                            <div className="content valign-wrapper col s12 m6">
                                <div className="summary">
                                    <div className="summary-text">
                                        {name}
                                    </div>
                                    <div className="summary-subtext">
                                        {position}
                                    </div>
                                    <div className="social-contact">
                                        <div className="social" data-cursor="hover">
                                            <a title="boring but useful social media" target="_blank" rel="noopener noreferrer" href={linkedinUrl} alt="linkedIn">
                                                <img  alt="LinkedIn" src={linkedin} />
                                            </a>
                                            <a title="GitHub the code sharing platform" target="_blank" rel="noopener noreferrer" href={githubUrl}>
                                                <img alt="Github" src={github}/>
                                            </a>
                                            <a title="codewars coding game" target="_blank" rel="noopener noreferrer" href={codewarsUrl}>
                                                <img alt="Codewars" style={{filter:'invert(1)'}} src={codewars}/>
                                            </a>
                                            <a title="freeCodeCamp training certifications" target="_blank" rel="noopener noreferrer" href={freecodecampUrl}>
                                                <img alt="FreeCodeCamp" style={{filter:'invert(1)',height:'100%'}} src={freecodecamp}/>
                                            </a>
                                        </div>
                                        <div className="contact wrap">                
                                            <CursorAwareButton onClick={() => scrollToForm()} defaultColor={"#fff"} activeColor={"#174ffc"} >
                                               {translations.getInTouchLabel}
                                            </CursorAwareButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-pattern"></div>
                    </div>
                </div>
            )
        }
        </TranslationContext.Consumer>
    )
    
}
const LangSwitcher = ({currentLocale}) => {
    useEffect(() =>{
        let elems = document.querySelectorAll('select');
        let instances = M.FormSelect.init(elems, {})
    })

    return (
        <div className="lang-switcher--wrapper">
            <div className="input-field">
                <div className="select-wrapper">
                    <FontAwesomeIcon size={"2x"} icon={faGlobeEurope} color="white" />
                <svg className="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                <select value={currentLocale === 'en-US' ? '/en' : '/fr'} onChange={(e) => navigate(e.target.value)} tabIndex="-1">
                    <option value="/en">English</option>
                    <option value="/fr">Francais</option>
                </select>
                </div>
            </div>
        </div>
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