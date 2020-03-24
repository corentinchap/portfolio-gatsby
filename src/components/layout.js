import React, {useEffect} from 'react'
import Cursor from './Cursor'
import {window} from 'browser-monads'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'


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

const themeLight = {
  main: "light",
  background: "#fff",
  backgroundSecondary: '#1e1d28',
  primary: "#174ffc",
  fontColor: "#fff",
  secondary: '#fe9b34',
  pattern: ` background-color:silver;
      background-image:
      radial-gradient(circle at 100% 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
      radial-gradient(circle at 0    150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
      radial-gradient(circle at 50%  100%, white 10%, silver 10%, silver 23%, white 23%, white 30%, silver 30%, silver 43%, white 43%, white 50%, silver 50%, silver 63%, white 63%, white 71%, transparent 71%, transparent),
      radial-gradient(circle at 100% 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent),
      radial-gradient(circle at 0    50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent);
      background-size: 100px 50px;`

}

const themeDark = {
  main: "dark",
  background: "#fff",
  backgroundSecondary: '#1e1d28',
  fontColor: "#000",
  primary: "#174ffc",
  secondary: '#fe9b34',
  pattern: `background: linear-gradient(315deg, transparent 75%, #5557d4 0)-10px 0,
  linear-gradient(45deg, transparent 75%, #5557d4 0)-10px 0,
  linear-gradient(135deg, #332ba7 50%, transparent 0) 0 0,
  linear-gradient(45deg, #1b376a 50%, #163256 0) 0 0 #163256;
  background-size: 20px 20px;`

}

const Layout = ({children}) => {
 
  return (
    <ThemeProvider theme={themeLight}>
      <LayoutWrapper className="landing">
      <GlobalStyle />   
        {children}
        <Cursor listenerElement={window} />
      </LayoutWrapper>
    </ThemeProvider>
   
  )
  
}

export default Layout
