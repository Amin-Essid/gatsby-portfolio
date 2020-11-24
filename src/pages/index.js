import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
// import Jobs from "../components/Jobs"
// import Skills from "../components/Skills"
import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="Home" description="our home page" />
      <Hero />
      <Services />
      {/* <Jobs/> */}
      {/* <Skills/> */}
      <Projects projects={projects} title="my projects" showLink />
      {/* <Blogs blogs={blogs} title='latest blogs' showLink /> */}
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(
      sort: { order: ASC, fields: projectID }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        github
        id
        description
        title
        url
        projectID
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
