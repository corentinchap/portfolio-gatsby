import React from 'react'
import styled from 'styled-components'
import AboutSocial from './AboutSocial'
import CursorAwareButton from '../CursorAwareButton'

const AboutSummaryTitle = styled.div`
    font-size: 3.5em;
    font-family: Space Mono;
    color: ${props => props.theme.fontColor};
`
const AboutSummarySubtitle = styled.div`
    font-family: 'VT323', monospace;
    font-size: 2em;
    color: ${props => props.theme.primary};
`

const SocialContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const AboutPresentation = ({name, position, links, getInTouchLabel}) => {
    return (
        <div>
            <AboutSummaryTitle>
                {name}
            </AboutSummaryTitle>
            <AboutSummarySubtitle>
                {position}
            </AboutSummarySubtitle>

            <SocialContactWrapper>
                <AboutSocial links={links} />
                            
                <CursorAwareButton onClick={() => scrollToForm()} isInverted>
                    {getInTouchLabel}
                </CursorAwareButton>
               
            </SocialContactWrapper>
        </div>
    )
}
export default AboutPresentation