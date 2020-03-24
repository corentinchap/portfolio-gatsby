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
        color: white;
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
`

const LangSwitcher = ({currentLocale}) => {
    return (
        <LangSwitcherWrapper>
            <div className="input-field">
                <div className="select-wrapper">
                <FontAwesomeIcon size={"2x"} icon={faGlobeEurope} color="white" />
                <svg className="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                <select value={currentLocale === 'en-US' ? '/en' : '/fr'} onChange={(e) => navigate(e.target.value)} tabIndex="-1">
                    <option value="/en">English</option>
                    <option value="/fr">Francais</option>
                </select>
                </div>
            </div>
        </LangSwitcherWrapper>
    )
}
export default LangSwitcher;