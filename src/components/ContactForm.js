import React, { Component } from 'react';
import CursorAwareButton from './CursorAwareButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faUserTie, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import * as emailjs from 'emailjs-com';
import M from 'materialize-css';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            full_name: '',
            email: '',
            message: ''        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount(){
        emailjs.init('user_u7rBTEXHRV1B8c677mrUM');
    }

    handleChange(event) {
        this.setState( {...this.state, [event.target.name]: event.target.value});
        
    }
    validateEmail(){
        if(document.querySelector('input[name="full_name"]').classList.contains('valid') && document.querySelector('input[name="email"]').classList.contains('valid'))
        return true;
        
        return false
        
    }
    submitForm(e){
       e.preventDefault();
        
       if(!this.validateEmail()){
            M.toast({html: 'Please fill the form correctly', classes: 'warning'});
            return
        }

       emailjs.send('default_service','template_HMQ3hbU7',this.state).then(function(response){
           M.toast({html: 'I\'ll reach out to you asap, thanks for your time !', classes:'success'})
       }, function(err){
            M.toast({html: 'Oops, look like the form is broken, please send mail manually to info@chapatte.co !'})
       })

    }
    

    render() {

        return (
           
            <div className="row">
                <form className="col s12">
                    <h3>Drop me a message !</h3>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix"><FontAwesomeIcon icon={faUserTie} /></i>
                            <input name="full_name" id="full_name" type="text" onChange={this.handleChange} className="validate" />
                            <label htmlFor="full_name">Full name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12" >
                            <i id="mail-icon" className="material-icons email prefix"><FontAwesomeIcon id={'email-icon'} icon={faEnvelope} /></i>
                            <input name="email" id="email" type="email" onChange={this.handleChange} className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix"><FontAwesomeIcon icon={faPen} /></i>
                            <textarea name="message" id="textarea1" onChange={this.handleChange} className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Message content</label>
                        </div>

                        <div className="input-field col s12 m6 push-m6">
                            <CursorAwareButton onClick={e => this.submitForm(e)} defaultColor='#fff' activeColor="#fe9b34" footerFix={true} >
                                Contact me
                            </CursorAwareButton>
                        </div>
                    </div>
                </form>
            </div>

        )
    }

   
}

export default ContactForm;