import React from 'react'
import Helmet from 'react-helmet'
import Layout from './Layout'
import AboutSection from './AboutSection'
import Testimonials from './Testimonials'
import WorkSection from './WorkSection'
import Skillset from './Skillset'
import Footer from './Footer'
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/App.scss'
import '../styles/Landing.scss'

const App = (props) => {
  const {person, projects, testimonials, skills} = props
  return (
    <Layout>
      <AboutSection person={person} />
      <WorkSection projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Skillset skills={skills} />
      <Footer />
    </Layout>
  )
  
}

export default App
