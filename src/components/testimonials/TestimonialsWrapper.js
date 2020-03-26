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
const TestimonialQuoteWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   overflow: hidden;
   height: 100%;
   .testimonial-picture{
        width:22%;
        img{
          max-height: 300px;
        }
   }
   &:focus{
    outline:0;
   }
   .testimonial-quote {
    color: #1e1e28;
    font-size: 1.1em;
    align-self: flex-start;
    padding: 10px 30px 60px 30px;
    font-style: italic;
    position: relative;
    width: 77%;
    
    
    .website-link {
      float: right;
      bottom: 0;
      right: 25px;
    }
    .testimonial-author{
      bottom:0;
      left: 25px;
      span{
        font-size: 0.8em;
        padding-left: 12px;
        font-weight: 300;
      }
    }
    .testimonial-author, .website-link {
      position: absolute;
      display: inline-block;
      font-family: Nanum Gothic;
      font-style: italic;
      padding-top: 40px;
      font-size: 16px;
      font-weight: 600;
    }
    
`

export {TestimonialsWrapper, TestimonialQuoteWrapper}