import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import SEO from '../components/SEO'
const About = ({data:{about:{nodes}}}) => {
const {title, stack, image, info} = nodes[0]
  return <Layout>
    <SEO title='About' description='about me'/>
    <section className="about-page">
      <div className="section-center about-center">
        <div className="about-img">
          <Image fluid={image.childImageSharp.fluid} />
        </div>
        <article className="about-text">
          <Title title={title}/>
          {/* <div className="about-img">
              <Image fluid={image.childImageSharp.fluid} />
          </div> */}
          <p>{info}</p>
          <div className="about-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </article>
      </div>
      <Link to='/contact' className='btn center-btn'>
      contact me
    </Link>
    </section>

  </Layout>
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
