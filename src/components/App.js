import React from 'react'
import Layout from './Layout'
import AboutSection from './about/AboutSection'
import Testimonials from './testimonials/Testimonials'
import WorkSection from './work/WorkSection'
import Skillsets from './skillset/Skillsets'
import Footer from './footer/Footer'
import {TranslationProvider} from '../contexts/TranslationContext'
import Helmet from 'react-helmet'
import 'materialize-css/dist/css/materialize.min.css'



let TranslationContext = undefined;


const App = (props) => {
  const {person, projects, testimonials, skills, translations, lang} = props
  TranslationContext = React.createContext(translations)

  return (
    <Layout>
      <Helmet htmlAttributes={{lang:lang}} />
      <TranslationProvider translations={translations}>
        <AboutSection person={person} />
        <WorkSection projects={projects} />
        <Testimonials testimonials={testimonials} />
        <Skillsets skills={skills} />
        <Footer />
      </TranslationProvider>  
    </Layout>
  )
  
}

export {App, TranslationContext }
