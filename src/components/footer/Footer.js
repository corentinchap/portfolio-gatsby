import React, { Component } from 'react';
import ContactForm from './ContactForm';
import {TranslationContext} from '../../contexts/TranslationContext'
import '../../styles/Footer.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import styled from 'styled-components';
import {FooterWrapper, FooterTitle, SocialLinkWrapper, SocialLink} from './FooterWrapper'


class Footer extends Component {
    
    render() {
        return (
            <TranslationContext.Consumer>
                {
                    translations => (
                        <FooterWrapper>
                            <div className="footer--clip">
                            <div className="container row">
                                <div className="col center m12 l6">
                                    <FooterTitle>{translations.socialMediaStalkTitle}</FooterTitle>
                                    <SocialLinkWrapper>
                                        <SocialLink>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corentin-chapatte-684234160/" alt="linkedIn">
                                                    <img className="social-icon" alt="LinkedIn" src={linkedin} />            
                                                    <span className="social-text">
                                                        +Corentin Chapatte
                                                    </span>
                                            </a>
                                        </SocialLink>
                                        <SocialLink>
                                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/corentinchap" alt="github"> 
                                                    <img className="social-icon" alt="Github" src={github}/>    
                                                    <span className="social-text" >
                                                        @corentinchap
                                                    </span>
                                            </a>
                                        </SocialLink>
                                    </SocialLinkWrapper>
                                </div>
                                <div className="col m12 l6">
                                    <ContactForm translations={translations}/>
                                </div>
                            </div>
                            
                            <div className="footer--pattern"></div>
                            </div>
                    
                    </FooterWrapper>
                    )
                }
            </TranslationContext.Consumer>
        )
    }

   
}

export default Footer;