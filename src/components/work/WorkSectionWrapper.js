import React from 'react';
import styled from'styled-components'

const WorkSectionWrapper =  styled.div`
    padding-top: 60px;
    h1{
        color: ${props => props.theme.primary};
        font-family: vt323;
        margin: 20px 0 30px 0;
    }
`

export {WorkSectionWrapper}