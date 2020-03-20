import React from 'react';
import Carousel from "./Carousel";
import '../styles/Testimonials.scss';
import {TranslationContext} from '../contexts/TranslationContext'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Testimonials = ({testimonials}) => { 
    
    return (
        <TranslationContext.Consumer>
            {
                translation => (
                    <div className="container testimonials">
                        <h1>{translation.clientTestimonialTitle}</h1>              
                            <Carousel id="testimonials" autoHeightRefSelector=".testimonial-quote" autoHeightOffset="50" >
                                {testimonials.map((testimonial, index) => {
                                    const {quote, author, authorOccupation, projectUrl, avatar} = testimonial;
                                    return(
                                        <div key={index} className="testimonial">
                                            <blockquote className="testimonial-quote">
                                                {documentToReactComponents(quote.json,{})}                          
                                                <div className="testimonial-author"> 
                                                    – {author}
                                                    <span>{authorOccupation}</span>
                                                </div>
                                                <div className="website-link">{projectUrl}</div>
                                            </blockquote>
                                            <div className="testimonial-picture hide-on-med-and-down">
                                                <img src={avatar.file.url} alt="testimonial-avatar"></img>
                                            </div>
                                        </div>    
                                    )
                                })}
                            </Carousel> 
                    </div>
                )
            }
        </TranslationContext.Consumer>
        
    )  
}

export default Testimonials
