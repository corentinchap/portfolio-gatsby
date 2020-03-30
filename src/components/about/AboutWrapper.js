import React from 'react';
import styled from 'styled-components'
import {down} from 'styled-breakpoints'

const AboutSectionWrapper = styled.div`
${p => console.log(p)}
    filter:drop-shadow(${p => p.theme.shadow});

`

const AboutSectionClip = styled.div`
    background-color: ${props => props.theme.backgroundSecondary};
    position: relative;
    clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%);
    padding: 7em 0;
`

const AboutPattern = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    opacity: 0.05;
    z-index: 0;
    ${props => props.theme.pattern}
`

const ProfilePicture = styled.div.attrs({
    className: "hide-on-med-and-down"
})`
    width: 420px;
    padding: 50px 0;
    img{width:100%;padding:15px;height:100%}
    ${down('md')}{
        margin:auto;
    }
`

export {AboutSectionWrapper, AboutSectionClip, AboutPattern, ProfilePicture}