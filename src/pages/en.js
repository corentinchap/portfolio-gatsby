import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import App from '../components/App'

const IndexEN = () => {
    const data = useStaticQuery(graphql`
    query HomeQueryEN {
        contentfulPerson(node_locale: {eq: "en-US"}) {
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
        allContentfulProject(filter: {node_locale: {eq: "en-US"}}) {
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
export default IndexEN