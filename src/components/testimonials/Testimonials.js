import React from 'react';
import Carousel from "../carousel/Carousel";
import {TranslationContext} from '../../contexts/TranslationContext'
import {TestimonialsWrapper, TestimonialQuoteWrapper} from './TestimonialsWrapper'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {Title} from '../utility/Headings'

const Testimonials = ({testimonials}) => { 
    
    return (
        <TranslationContext.Consumer>
            {
                translation => (
                    <TestimonialsWrapper>
                        <Title>{translation.clientTestimonialTitle}</Title>              
                            <Carousel id="testimonials" autoHeightRefSelector=".testimonial-quote" autoHeightOffset="50" >
                                {testimonials.map((testimonial, index) => 
                                    <TestimonialQuote key={index} {...testimonial} />         
                                )}
                            </Carousel> 
                    </TestimonialsWrapper>
                )
            }
        </TranslationContext.Consumer>
        
    )  
}

const TestimonialQuote = ({quote, author, authorOccupation, projectUrl, avatar}) =>{
    return(
        <TestimonialQuoteWrapper>
        <blockquote className="testimonial-quote col s12 m10">
            {documentToReactComponents(quote.json,{})}                          
            <div className="testimonial-author"> 
                – {author}
                <span>{authorOccupation}</span>
            </div>
            <a href={projectUrl} data-cursor="hover" className="website-link">{projectUrl}</a>
        </blockquote>
        <div className="testimonial-picture col m2 hide-on-med-and-down">
            <img src={avatar.file.url} alt="testimonial-avatar"></img>
        </div>
        </TestimonialQuoteWrapper>
    )
}


export default Testimonials
