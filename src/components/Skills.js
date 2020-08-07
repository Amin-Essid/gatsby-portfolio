import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
{
    allStrapiSkills {
        nodes {
          domain
          id
          largeImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          smallImage {
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

const Skills = () => {
  const data = useStaticQuery(query)
  const {allStrapiSkills: {nodes: skills}} = data;
  const [value, setValue] = React.useState(0);
  const {largeImage, smallImage} = skills[value]; 
  return <section className="section">
    <Title title='skills'/>
    <div className="skills-center">
      <div className="skill-container">
        {skills.map((item, index) => {
          return (<button 
              key={index} 
              onClick={()=> setValue(index)}
              className={`skill-btn ${index === value && 'active-btn'}`}>
                {item.domain}
            </button>)
          })}
      </div>
      <article className='skill-info'>   
        <Image fluid={largeImage.childImageSharp.fluid} className='skill-largeImage'/>
        <Image fluid={smallImage.childImageSharp.fluid} className='skill-smallImage'/>
      </article>
    </div>
    <Link to='/contact' className='btn center-btn'>
    contact me</Link>
  </section>
}

export default Skills
