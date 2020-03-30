import React from 'react'
import styled from 'styled-components'

const ThemeSwitchSVG = styled.svg.attrs({
    viewBox: "0 0 500 500",
    xmlns:"http://www.w3.org/2000/svg",
    version: "1.1"
  })`
    position: absolute;
    width: 7px;
    height: 7px;
    opacity: 1;
    -webkit-transition: opacity 200ms ease, width 200ms ease, height 200ms ease, -webkit-transform 400ms ease;
    transition: opacity 200ms ease, width 200ms ease, height 200ms ease, -webkit-transform 400ms ease;
    transition: transform 400ms ease, opacity 200ms ease, width 200ms ease, height 200ms ease;
    transition: transform 400ms ease, opacity 200ms ease, width 200ms ease, height 200ms ease, -webkit-transform 400ms ease;
  
    circle{
      fill: var(--bg-planet-bright);
      -webkit-transition: fill 400ms ease;
      transition: fill 400ms ease;
    }
    &:first-child {
      transform: translate(1.8em, 0.35em);
    }
    &:nth-child(2) {
      transform: translate(2.8em, 0.7em);
    }
    &:nth-child(3) {
      transform: translate(3.2em, 1.8em);
    }
    &:nth-child(4) {
      transform: translate(2.8em, 2.8em);
    }
    &:nth-child(5) {
      transform: translate(1.8em, 3.2em);
    }
    &:nth-child(6) {
      transform: translate(0.7em, 2.8em);
    }
    &:nth-child(7) {
      transform: translate(0.35em, 1.8em);
    }
    &:nth-child(8) {
      transform: translate(0.7em, 0.7em);
    }
  `
  
  const ToggleLabelWrapper = styled.div.attrs({
    //   "data-cursor": 'hover'
  })`
    display:flex;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
  `
  
  const StyledCheckbox = styled.input.attrs({
    type: 'checkbox'
  })`
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  
    &:checked{
      &+.planet{
        --bg-planet-bright: #D7D7D8;
  
        &::after {
          opacity: 1;
          transform: translate(0.6em, -0.5em);
        }
      }
  
      &~.elements {
        transform: rotate(180deg);
  
        svg {
          &:first-child {
            transform: translate(2em, 1em);
            opacity: 0;
          }
          &:nth-child(2) {
            transform: translate(3em, 1.5em);
            opacity: 0;
          }
          &:nth-child(3) {
            transform: translate(3em, 2em);
            opacity: 0;
          }
          &:nth-child(4) {
            transform: translate(3em, 2em);
            opacity: 0;
          }
          &:nth-child(5) {
            transform: translate(1.9em, 2.6em);
            width: 0.3em;
            height: 0.3em;
            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
          &:nth-child(6) {
            transform: translate(1.4em, 2.5em);
            width: 0.3em;
            height: 0.3em;
            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
          &:nth-child(7) {
            transform: translate(1.1em, 1.6em);
            width: 0.7em;
            height: 0.7em;
            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
          &:nth-child(8) {
            width: 0.45em;
            height: 0.45em;
            transform: translate(1.7em, 2.1em);
            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
        }
    }
  `
  
  const Elements = styled.div.attrs({
    className: 'elements'
  })`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: -webkit-transform 400ms ease;
    transition: -webkit-transform 400ms ease;
    transition: transform 400ms ease;
    transition: transform 400ms ease, -webkit-transform 400ms ease;
  
  `
  
  const Planet = styled.div.attrs({
    className:"planet"
  })`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    background:
      radial-gradient(3.75em, 99%, transparent 100%);
    background-color: var(--bg-planet-bright);
    background-repeat: no-repeat;
    position: relative;
    will-change: background;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
  
    /* Safari transition issue */
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  
    &:after{
      content: "";
            background-color: var(--bg-planet-shadow);
            width: 2rem;
            height: 2rem;
            position: absolute;
            border-radius: 50%;
            will-change: opacity, transform, background-color;
            opacity: 0;
            transform: translate(2em, -2em);
            -webkit-transition: opacity 400ms ease, background-color 400ms ease, -webkit-transform 400ms ease;
            transition: opacity 400ms ease, background-color 400ms ease, -webkit-transform 400ms ease;
            transition: opacity 400ms ease, transform 400ms ease, background-color 400ms ease;
            transition: opacity 400ms ease, transform 400ms ease, background-color 400ms ease, -webkit-transform 400ms ease;
    }
  `
  
  const ToggleLabel = styled.label`
    cursor: pointer;
    padding: 1rem;
    position: relative;
    font-size: unset;
  
    /* To make outline on mobile invisible */
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  `
  
  const ToggleThemeButton = ({toggleTheme}) => {
    const bgSwitch = (e) => {
      e.target.classList.toggle('bg-dark');
      toggleTheme();
    }
    return(
      <ToggleLabelWrapper>
        <ToggleLabel>
          <StyledCheckbox onChange={(e) => bgSwitch(e)} />
          <Planet />
          <Elements>
            <ThemeSwitchSVG>
              <circle cx="250" cy="250" r="200" />
            </ThemeSwitchSVG>
            <ThemeSwitchSVG>
              <circle cx="250" cy="250" r="200" />
            </ThemeSwitchSVG>
            <ThemeSwitchSVG>
              <circle cx="250" cy="250" r="200" />
            </ThemeSwitchSVG>
            <ThemeSwitchSVG>
              <circle cx="250" cy="250" r="200" />
            </ThemeSwitchSVG>
            <ThemeSwitchSVG>
              <circle cx="250" cy="250" r="200" />
            </ThemeSwitchSVG>
            <ThemeSwitchSVG>
              <circle cx="250" cy="250" r="200" />
            </ThemeSwitchSVG>
            <ThemeSwitchSVG>
              <circle cx="250" cy="250" r="200" />
            </ThemeSwitchSVG>
            <ThemeSwitchSVG>
              <circle cx="250" cy="250" r="200" />
            </ThemeSwitchSVG>
          </Elements>
        </ToggleLabel>
      </ToggleLabelWrapper>
      
    )
  }

export default ToggleThemeButton