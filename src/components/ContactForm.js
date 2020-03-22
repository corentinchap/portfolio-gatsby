import React, { Component } from 'react';
import CursorAwareButton from './CursorAwareButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faUserTie, faEnvelope, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {document} from 'browser-monads';
import * as emailjs from 'emailjs-com';


class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            full_name: '',
            email: '',
            message: '',        
            formInfo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount(){
        emailjs.init('user_u7rBTEXHRV1B8c677mrUM');
    }

    handleChange(event) {
        this.setState( {...this.state, [event.target.name]: event.target.value});
        
    }
    validateForm(){
        const full_name = document.querySelector('input[name="full_name"]');
        const email = document.querySelector('input[name="email"]');    
        const message = document.querySelector('textarea[name="message"]');    

        const emailRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
        
        if(full_name.value)
            full_name.classList.add('valid')
        
        if(email.value.match(emailRegex)) 
            email.classList.add('valid')
            
        if(message.value.length > 4)
            message.classList.add('valid')

        return (document.querySelectorAll('input.valid, textarea.valid').length === 3)

    }
    submitForm(e){
       
    if(this.validateForm()){
        
        emailjs.send('default_service','template_HMQ3hbU7',this.state).then((response) => {
            this.setState({
                formInfo: this.props.translations.contactFormSuccess
            })
        }, function(err){
            this.setState({
                formInfo: this.props.translations.contactFormBroken
            })
        })
    }
    else
    {
        this.setState({
            formInfo: this.props.translations.contactFormFillWarning
       })
    }

     e.preventDefault();

    }

  

    render() {

        return (
           
            <div className="row">
                <form className="col s12 contact-form">
                    <h3>{this.props.translations.contactMeTitle}</h3>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix"><FontAwesomeIcon icon={faUserTie} /></i>
                            <input name="full_name" placeholder="nom" id="full_name" type="text" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12" >
                            <i id="mail-icon" className="material-icons email prefix"><FontAwesomeIcon id={'email-icon'} icon={faEnvelope} /></i>
                            <input name="email" placeholder="email" id="email" type="email" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix"><FontAwesomeIcon icon={faPen} /></i>
                            <textarea name="message" placeholder="message" id="textarea1" onChange={this.handleChange} className="materialize-textarea"></textarea>
                        </div>
                        {this.state.formInfo &&
                        <div className="col s12 infos">
                            <i className="material-icons prefix"><FontAwesomeIcon icon={faInfoCircle} /></i>
                            <span>{this.state.formInfo}</span>
                        </div>
                        }

                        <div className="input-field col s12 m6 push-m6">
                            <CursorAwareButton onClick={e => this.submitForm(e)} defaultColor='#fff' activeColor="#fe9b34" footerFix={true} >
                                {this.props.translations.contactMeButtonLabel}
                            </CursorAwareButton>
                        </div>
                    </div>
                </form>
            </div>

        )
    }

   
}

export default ContactForm;