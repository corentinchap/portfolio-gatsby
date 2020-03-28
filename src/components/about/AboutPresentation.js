import React from 'react'
import styled from 'styled-components'
import AboutSocial from './AboutSocial'
import CursorAwareButton from '../CursorAwareButton'
import {down} from 'styled-breakpoints'

const SocialContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const AboutPresentationWrapper = styled.div`
    ${down('md')}{
        margin:auto;
        padding: 40px 0;
    }
    h1{
        font-size: 3.5em;
        font-family: Space Mono;
        color: ${props => props.theme.fontColor};
        text-shadow: 0px 3px 0px #b2a98f, 0px 14px 15px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 1px 6px 20px rgba(0,0,0,0.1);
        line-height:100%;
    }
    h2{
        font-family: 'VT323', monospace;
        font-size: 2em;
        color: ${props => props.theme.primary};
        line-height:100%;
    }
`

const AboutPresentation = ({name, position, links, getInTouchLabel}) => {
    const scrollToForm = () => {
        window.scrollBy({ 
            top: document.querySelector('body').scrollHeight, 
            left: 0, 
            behavior: 'smooth' 
          });
    }
    return (
        <AboutPresentationWrapper>
            <h1>{name}</h1>
            <h2>{position}</h2>

            <SocialContactWrapper>
                <AboutSocial links={links} />
                            
                <CursorAwareButton onClick={() => scrollToForm()} isInverted>
                    {getInTouchLabel}
                </CursorAwareButton>
               
            </SocialContactWrapper>
        </AboutPresentationWrapper>
    )
}
export default AboutPresentation