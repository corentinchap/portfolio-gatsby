import React, { Component } from 'react';
import ContactForm from './ContactForm';
import {TranslationContext} from '../contexts/TranslationContext'
import '../styles/Footer.scss';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
class Footer extends Component {
    
    render() {
        return (
            <TranslationContext.Consumer>
                {
                    translations => (
                        <footer className="footer">
                            <div className="footer--clip">
                            <div className="container">
                            <div className="row">
                                <div className="col center m12 l6">
                                <h3>{translations.socialMediaStalkTitle}</h3>
                                <div className="social-links">
                                <span className="social-link" data-cursor="action-open">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corentin-chapatte-684234160/" alt="linkedIn">
                                        
                                            <img className="social-icon" alt="LinkedIn" src={linkedin} />            
                                            <span className="social-text">
                                                +Corentin Chapatte
                                            </span>
                                        
                                    </a>
                                </span>
                            <span className="social-link" data-cursor="action-open">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/corentinchap" alt="github">
                                    
                                            <img className="social-icon" alt="Github" src={github}/>    
                                            <span className="social-text" >
                                                @corentinchap
                                            </span>
                                    
                                    </a>
                                </span>
                                </div>
                            
                                </div>
                                <div className="col m12 l6">
                                    <ContactForm title={translations.contactMeTitle}/>
                                </div>
                            </div>
                            </div>
                            <div className="footer--pattern"></div>
                            </div>
                    
                    </footer>
                    )
                }
            </TranslationContext.Consumer>
        )
    }

   
}

export default Footer;