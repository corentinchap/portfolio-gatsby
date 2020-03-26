import React from 'react'
import styled from 'styled-components'


const TestimonialsWrapper = styled.div.attrs(props => ({
  className: 'container',
}))`
    padding-top: 100px;
    position: relative;
    &:before, &:after {
      content: '"';
      position: absolute;
      transform: scale(12);
      z-index: 2;
      color: ${props => props.theme.secondary};
      font-style: normal;
      font-family: Passion One;
    }
    &:before {
      transform: scale(12) rotate(180deg);
      left: 8px;
      top: 175px;
    }
    &:after {   
      right: 295px;
      bottom: 50px;
    }

    blockquote {
      border-left: 3px solid ${props => props.theme.primary};
    }
  }
`
const TestimonialQuoteWrapper = styled.div.attrs({
  className: "row"
})`
   overflow: hidden;
   height: 100%;
   .testimonial-picture{
        img{
          max-height: 300px;
        }
   }
   &:focus{
    outline:0;
   }
   .testimonial-quote {
    
    font-size: 1.3em;
    align-self: flex-start;
    padding: 10px 30px 60px 30px;
    font-style: italic;
    position: relative;  
    
    .website-link {
      float: right;
      right: 25px;
      text-decoration: underline;
    }
    .testimonial-author{
      left: 25px;
      span{
        font-size: 0.8em;
        padding-left: 12px;
        font-weight: 300;
      }
    }
    .testimonial-author, .website-link {
      position: absolute;
      color: ${p => p.theme.backgroundSecondary};
      display: inline-block;
      font-family: Nanum Gothic;
      font-style: italic;
      font-size: 16px;
      font-weight: 600;
      bottom: -40px;
    }
    
`

export {TestimonialsWrapper, TestimonialQuoteWrapper}