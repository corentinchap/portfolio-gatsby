import React from 'react';
import styled from 'styled-components'
import {down} from 'styled-breakpoints'

const FooterWrapper = styled.footer`
    filter: drop-shadow( 0px -2px 11px #7b7b7b);
    padding-top: 100px;

    .footer--clip{
        background-color: ${p => p.theme.backgroundSecondary};
        padding-top: 100px;
        clip-path: polygon(0% 100%, 100% 100%, 100% 15%, 50% 0%, 0% 15%);
        ${down('md')}{
            padding-top:135px;
        }
        > div:first-child {
            margin-bottom: unset;
        }
    }
    .footer--pattern{
        width: 100%;
        height: 100%;
        top: 0;
        position: absolute;
        opacity: 0.05;
        z-index: 0;
        ${p => p.theme.pattern}
    }
`
const FooterTitle = styled.h3`
        color:${p => p.theme.secondary};
        font-size: 2em;
        font-family: Passion One;
        text-align: left;
        text-decoration: underline;
`

const ContactFormInfo = styled.div.attrs({
    className: "col s12"
})`
    span{
        position: relative;
        bottom: 4px;
        font-family: Space Mono;
        font-weight: bold;
        left: 6px;
        font-size: 1.2em;
    }
    color: white;
    background-color: ${p => p.theme.secondary};
`

const SocialLinkWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

const SocialLink = styled.div.attrs({
    "data-cursor":"action-open"
})`
    padding-top: 50px;
    display: inline-flex;
    position: relative;
    z-index: 1;
    .social-icon{
        height: 65px;
        float:left
    }
    .social-text {
        color: ${p => p.theme.fontColor};
        font-family: vt323;
        text-align: left;
        font-size: 1.2em;
        line-height: 65px;
        margin-left: 15px;
    }
`

const ContactFormWrapper = styled.form.attrs({
    className: "col s12"
})`
    position: relative;
    z-index: 1;

    .input-field .prefix {
        color: ${p => p.theme.fontColor};
    }
    input, textarea{
        color: ${p => p.theme.fontColor};
    }
`

export {FooterWrapper, FooterTitle, ContactFormInfo, SocialLink, SocialLinkWrapper, ContactFormWrapper}