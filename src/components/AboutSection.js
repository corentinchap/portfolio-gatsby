import React, { Component } from 'react';
import CursorAwareButton from './CursorAwareButton';
import '../styles/AboutSection.scss';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import freecodecamp from '../assets/freecodecamp.svg';
import codewars from '../assets/codewars.png';
const AboutSection = (props) => {
    
    const {name, position, linkedinUrl, githubUrl, codewarsUrl, freecodecampUrl, image} = props.person;

    const scrollToForm = () => {
        window.scrollBy({ 
            top: document.getElementById('root').scrollHeight, 
            left: 0, 
            behavior: 'smooth' 
          });
    }
    
    return (
        <div className="about-section">
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
                                        Get in touch
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