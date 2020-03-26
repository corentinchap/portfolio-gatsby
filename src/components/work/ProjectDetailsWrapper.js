import styled from 'styled-components'

const ProjectWrapper = styled.div.attrs(props => ({
    className: 'project-content',
}))`
    margin: 5px;
    padding: 0 15px 15px 15px;
    border-radius: 5px;

    .cta{
        width: 100%;
        display:flex;
        
        > div:nth-child(2){
            margin-left: 15px;
        }
    }
`

const ProjectTitle = styled.h1`
    &&{
        text-align: left;
        font-family: "Passion One";
        font-size: 2.3em;
        color: ${props => props.theme.secondary};
        margin-top: 20px;
    }
`

const ProjectTags = styled.div`
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    width:100%;
    span:first-child{
      font-weight: bold;
      padding-left: 0;
    }
      span {
          padding: 2px 0 0 15px;
          color: ${props => props.theme.primary};
      }
  }
`

const ProjectBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0 0 5px;

    p{
        font-size: 1.3em;
        &:last-child{
            float: right;
        }
      }
`
export {ProjectBody, ProjectTags, ProjectWrapper, ProjectTitle}