import React, {useState} from 'react'
import Layout from './Layout'
import AboutSection from './about/AboutSection'
import Testimonials from './testimonials/Testimonials'
import WorkSection from './work/WorkSection'
import Skillsets from './skillset/Skillsets'
import Footer from './footer/Footer'
import {TranslationProvider} from '../contexts/TranslationContext'
import Helmet from 'react-helmet'
import 'materialize-css/dist/css/materialize.min.css'
import themeLight from '../themes/light'
import themeDark from '../themes/dark'
import { ThemeProvider } from 'styled-components'
import ToggleThemeButton from './utility/ToggleThemeButton'


let TranslationContext = undefined;

const App = (props) => {
  const {person, projects, testimonials, skills, translations, lang} = props
  TranslationContext = React.createContext(translations)

  const [currentTheme, setTheme] = useState(themeLight)

  return (
    <ThemeProvider theme={currentTheme}>
       <TranslationProvider translations={translations}>
        <Helmet htmlAttributes={{lang:lang}} >
          <meta name="theme-color" content={currentTheme.background} />  
        </Helmet>
        <Layout>
          <ToggleThemeButton currentTheme={currentTheme} toggleTheme={() => setTheme(currentTheme == themeDark ? themeLight : themeDark)} />
          <AboutSection person={person} />
          <WorkSection projects={projects} />
          <Testimonials testimonials={testimonials} />
          <Skillsets skills={skills} />
          <Footer />
        </Layout>
      </TranslationProvider>  
    </ThemeProvider>
  )
  
}

export {App, TranslationContext }
