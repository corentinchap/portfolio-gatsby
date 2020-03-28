import React, {useState} from 'react'
import Cursor from './utility/Cursor'
import {window} from 'browser-monads'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import themeLight from '../themes/light'
import themeDark from '../themes/dark'
import Helmet from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Nanum Gothic';
    font-size: 100%;
  }
  .flex{
    display:flex;
    flex-wrap: wrap;
  }
  ::-webkit-scrollbar {
    width: 12px;

    &-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: rgb(76, 124, 232);
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
  }
`

const LayoutWrapper = styled.main`
  background: ${props => props.theme.background}
`


const Layout = ({children}) => {
//  const stored = localStorage.getItem('isDarkMode');
//  const [isDarkMode, setIsDarkMode] = useState(
//    stored === "true" ? true : false
//  )

  return (
    <ThemeProvider theme={themeLight} bp={{lg:"1440px", md: "1024px", sm: "874px"}}>
      <LayoutWrapper className="landing">
        <Helmet defaultTitle="Chapatte Co Portfolio">
          <meta name="description" content="This is the personal portfolio of a junior full-stack developer"></meta>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700|Space+Mono|VT323|Passion+One&display=swap')" />
        </Helmet>
      <GlobalStyle />   
        {children}
        <Cursor listenerElement={window} />
      </LayoutWrapper>
    </ThemeProvider>
   
  )
  
}

export default Layout
