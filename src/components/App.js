import React from 'react'
import Helmet from 'react-helmet'
import Layout from './Layout'
import AboutSection from './AboutSection'
import WorkSection from './WorkSection'
import { Redirect } from '@reach/router'
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/App.scss'
import '../styles/Landing.scss'

const App = (props) => {
  const {person, projects} = props


  
 console.log(projects)
  return (
    <Layout>
      <AboutSection person={person} />
      <WorkSection projects={projects} />
    </Layout>
  )
  
}

export default App
