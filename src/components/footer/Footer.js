import React, { Component } from 'react';
import ContactForm from './ContactForm';
import {TranslationContext} from '../../contexts/TranslationContext'
import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
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
                                <div className="col center s12 m12 l6">
                                    <FooterTitle>{translations.socialMediaStalkTitle}</FooterTitle>
                                    <SocialLinkWrapper>
                                        <SocialLink>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corentin-chapatte-684234160/" alt="linkedIn">
                                                    <LinkedIn alt="LinkedIn" className="social-icon" />          
                                                    <span className="social-text">
                                                        +Corentin Chapatte
                                                    </span>
                                            </a>
                                        </SocialLink>
                                        <SocialLink>
                                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/corentinchap" alt="github"> 
                                                    <GitHub alt="GitHub" className="social-icon" />  
                                                    <span className="social-text" >
                                                        @corentinchap
                                                    </span>
                                            </a>
                                        </SocialLink>
                                    </SocialLinkWrapper>
                                </div>
                                <div className="col s12 m12 l6">
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