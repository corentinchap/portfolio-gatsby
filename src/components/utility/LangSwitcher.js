import React from 'react';
import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons'
import { navigate } from '@reach/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const LangSwitcherWrapper = styled.div`
    position: absolute;
    right: 50px;
    select{
        display: inline;
        background-color: transparent;
        font-size: 25px;        
        font-family: VT323;

        option{
            font-size: 25px;
            color: #174ffc;
            font-family: VT323;
        }
    }
    .select-wrapper{
        display: flex;
        z-index: 1;
        align-items: center;
    }
    svg[data-icon]{
        position: relative;
        z-index: 1;
        margin-right: 10px;
    }
    ${p => p.theme.main === "dark" ? 
    `
        select {color: white;}
        svg.caret {
            fill: white;
        }
    ` : `
        svg[data-icon]{
            filter: invert(1);
        }
        select{
            border-color: ${p.theme.fontColor};
        }
    `}
`

const LangSwitcher = ({currentLocale}) => {
    return (
        <LangSwitcherWrapper>
            <div className="input-field">
                <div className="select-wrapper">
                <FontAwesomeIcon size={"2x"} icon={faGlobeEurope} color="white" />
                <select value={currentLocale === 'en-US' ? '/' : '/fr'} onChange={(e) => navigate(e.target.value)} tabIndex="-1">
                    <option value="/">English</option>
                    <option value="/fr">Francais</option>
                </select>
                </div>
            </div>
        </LangSwitcherWrapper>
    )
}
export default LangSwitcher;