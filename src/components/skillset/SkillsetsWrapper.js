import React from 'react'
import styled from 'styled-components'
import {down} from 'styled-breakpoints'

const SkillsetsWrapper = styled.div.attrs(({
    className: 'container',
}))`
    padding-top: 100px;
    hr:last-child{
        display:none;
    }
    hr {
        border: 0;
        margin: 80px auto;
        width: 50%;
        height: 2px;
        background-image : -webkit-linear-gradient(left,hsla(0,0%,94.1%,0),${p => p.theme.secondary},#f0f0f0);
    }
`

const SkillsetImage = styled.div.attrs(p => ({
    className: 'skillsetImage valign-wrapper s12 m12 l6 col hide-on-med-and-down'
}))`
    img {
        width: 65%; 
        margin-left: auto
    }
    ${down('lg')}{
        img{
            margin-right:auto;
            margin-left:auto!important;
            transform: scale(.8);
        }
    }
`

const SkillsetText = styled.div.attrs(props => ({
    className: `m12 l6 col ${props.right ? "push-l6" : ""}`
}))`
    font-size: 1.2em;
    color: ${p => p.theme.fontColor};
`

const SkillsetWrapper = styled.div.attrs(({
    className: `row flex`
}))`
    padding-top: 30px;
    ${p => !p.invert ? 
        `flex-direction: row-reverse;
        .skillsetImage img{
            margin-left: unset;
        }
        ` : ""
    }
`

const SkillsetTitle = styled.h3`
    color: ${p => p.theme.secondary};
    font-weight: 600;
    font-family: Space Mono;
    padding-bottom: 20px;
`

const SkillsetTechs = styled.span.attrs(({
    "data-cursor": "hover"
}))`
    line-height: 50px;
    padding: 20px 15px;
    display: inline-block;
    img{
        width: auto;
        height: 45px;
        ${p => p.theme.main === 'dark' ? `
            filter: saturate(0) invert(1);
        ` : ``}
    }
`

export {SkillsetsWrapper, SkillsetText, SkillsetWrapper, SkillsetTitle, SkillsetImage, SkillsetTechs}