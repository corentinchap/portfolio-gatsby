import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {App} from '../components/App'

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
        allContentfulTestimonial(filter: {node_locale: {eq: "fr-CH"}}) {
          nodes {
            author
            authorOccupation
            avatar {
              file {
                url
              }
            }
            projectUrl
            quote {
              json
            }
          }
        }
        allContentfulSkill(filter: {node_locale: {eq: "fr-CH"}}) {
          nodes {
            title
            description {
              json
            }
            image {
              file {
                url
              }
              title
            }
            technologies {
              file {
                url
              }
              title
            }
          }
        }
        contentfulTranslations(node_locale: {eq: "fr-CH"}) {
          clientTestimonialTitle
          contactMeButtonLabel
          contactMeTitle
          getInTouchLabel
          skillsetTitle
          socialMediaStalkTitle
          workSectionTitle
          contactFormSuccess
          contactFormBroken
          contactFormFillWarning
          node_locale
        }
      }
      
`) 

    return (
        <App 
          person={data.contentfulPerson} 
          projects={data.allContentfulProject.nodes} 
          testimonials={data.allContentfulTestimonial.nodes} 
          skills={data.allContentfulSkill.nodes}
          translations={data.contentfulTranslations}  
        />    
    )
}
export default IndexFR