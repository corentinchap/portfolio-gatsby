import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import AboutSection from '../components/AboutSection'
import WorkSection from '../components/WorkSection'
import { Redirect } from '@reach/router'
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/App.scss'
import '../styles/Landing.scss'

const RootIndex = () => <Redirect to={"/en"} />

export default RootIndex
