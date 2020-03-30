import React from 'react'
import Github from '../../assets/github.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Freecodecamp from '../../assets/freecodecamp.svg'
import Codewars from '../../assets/codewars.svg'
import styled from 'styled-components'
import Image from 'gatsby-image'

const AboutSocialWrapper = styled.div`
    display: flex;
    padding-top: 18px;
    z-index: 1;

    svg {
        margin-right: 15px;
        width: 30px;
        height: 30px;
        path {
            fill: ${p => p.theme.fontColor};
            stroke: ${p => p.theme.fontColor};
        }
    }
    &-contact{
        display: flex;
        justify-content: space-between;
        .cursor-button {
            margin-top: 17px;
        }
    }
`


const AboutSocial = (links) => {
    const {linkedinUrl, githubUrl, codewarsUrl, freecodecampUrl} = links;
    return(
        <AboutSocialWrapper data-cursor="hover">
            
                <a title="boring but useful social media" target="_blank" rel="noopener noreferrer" href={linkedinUrl} alt="linkedIn">
                    <LinkedIn />
                </a>
                <a title="GitHub the code sharing platform" target="_blank" rel="noopener noreferrer" href={githubUrl}>
                    <Github />
                </a>
                <a title="codewars coding game" target="_blank" rel="noopener noreferrer" href={codewarsUrl}>
                    <Codewars />
                </a>
                <a title="freeCodeCamp training certifications" target="_blank" rel="noopener noreferrer" href={freecodecampUrl}>
                    <Freecodecamp />
                </a>
            
        </AboutSocialWrapper>
    )
}
export default AboutSocial