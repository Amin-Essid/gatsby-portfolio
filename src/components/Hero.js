import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {
    file: {
      childImageSharp: {fluid}
    }
  } = useStaticQuery(query);
  return <header className='hero'>
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
            <h1>I'm Ameen</h1>
            <h4>fullstack web developer and UI/UX designer</h4>
            <p className='hero-description'>I can talk about myself all the day. But I will just repeat what Patrick Winston said : ‘Your success in life will be determined largely by your ability to speak, your ability to write, and the quality of your ideas’. <br/>
            For the last one you can see <Link to ='/projects'>my projects</Link>, <Link to ='/codingChalenges'>my coding challenges</Link> and  <a href='#'>my Github</a> to be sure that I got the knowledge, the skills and the quality of ideas. And if you want to check my ability to write you can read what i wrote <Link to ='/about'>about me</Link> and <Link to ='/blogs'>my blogs</Link>. Finally if you want to test my super power of speaking and communication feel free to <Link to ='/contact'>contact me</Link>. 
            </p>
            <Link to ='/contact' className='btn'>
              contact me
            </Link>
            <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className='hero-img' />
    </div>
  </header>
}

export default Hero
