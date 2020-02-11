import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import App from '../components/App'

const IndexFR = () => {
    const data = useStaticQuery(graphql`
    query HomeQueryFR {
        contentfulPerson(node_locale: {eq: "fr-CH"}) {
          id
          codewarsUrl: codewars
          email
          freeCodeCampUrl: freeCodeCamp
          githubUrl: github
          linkedInUrl: linkedIn
          name
          position
          image {
            file {
              url
            }
          }
        }
        allContentfulProject(filter: {node_locale: {eq: "fr-CH"}}) {
          nodes {
            description {
              json
            }
            gitUrl
            tags
            title
            url
            node_locale
          }
        }
      }
      
`) 

    return (
        <App person={data.contentfulPerson} projects={data.allContentfulProject.nodes} />
    )
}
export default IndexFR