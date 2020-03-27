import React from 'react'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import freecodecamp from '../../assets/freecodecamp.svg'
import codewars from '../../assets/codewars.png'
import styled from 'styled-components'

const AboutSocialWrapper = styled.div`
    display: flex;
    padding-top: 18px;
    z-index: 1;

    img {
        margin-right: 15px;
        width: 30px;
        path {fill: #fff;}
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
                    <img  alt="LinkedIn" src={linkedin} />
                </a>
                <a title="GitHub the code sharing platform" target="_blank" rel="noopener noreferrer" href={githubUrl}>
                    <img alt="Github" src={github}/>
                </a>
                <a title="codewars coding game" target="_blank" rel="noopener noreferrer" href={codewarsUrl}>
                    <img alt="Codewars" style={{filter:'invert(1)'}} src={codewars}/>
                </a>
                <a title="freeCodeCamp training certifications" target="_blank" rel="noopener noreferrer" href={freecodecampUrl}>
                    <img alt="FreeCodeCamp" style={{filter:'invert(1)',height:'100%'}} src={freecodecamp}/>
                </a>
            
        </AboutSocialWrapper>
    )
}
export default AboutSocial