import React from 'react'
import Layout from './Layout'
import AboutSection from './AboutSection'
import Testimonials from './Testimonials'
import WorkSection from './WorkSection'
import Skillset from './Skillset'
import Footer from './Footer'
import {TranslationProvider} from '../contexts/TranslationContext'
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/App.scss'
import '../styles/Landing.scss'


let TranslationContext = undefined;

const App = (props) => {
  const {person, projects, testimonials, skills, translations} = props
  TranslationContext = React.createContext(translations)

  return (
    <Layout>
      <TranslationProvider translations={translations}>
        <AboutSection person={person} />
        <WorkSection projects={projects} />
        <Testimonials testimonials={testimonials} />
        <Skillset skills={skills} />
        <Footer />
      </TranslationProvider>  
    </Layout>
  )
  
}

export {App, TranslationContext }
