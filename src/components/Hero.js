import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFixed
const query = graphql`
  {
    skillsMap: file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fixed(width: 600, height: 490) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    myPhoto: file(relativePath: { eq: "myphoto.png" }) {
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
    skillsMap: {
      childImageSharp: { fixed: fixedSkillsMap },
    },
    myPhoto: {
      childImageSharp: { fluid: fluidMyPhoto },
    },
  } = useStaticQuery(query)
  // const {
  //   myPhoto: {
  //     childImageSharp: { fluid: fluidMyPhoto },
  //   },
  // } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <div className="hero-profile">
              <div className="hero-profile_pic">
                <Image fluid={fluidMyPhoto} />
              </div>
              <div className="hero-profile_info">
                <h1>I'm Ameen</h1>
                <h4>
                  fullstack web developer <br />
                  and UI/UX designer
                </h4>
              </div>
            </div>
            <p className="hero-description">
              I can talk about myself all the day. But I will just repeat what
              Patrick Winston said : ‘Your success in life will be determined
              largely by your ability to speak, your ability to write, and the
              quality of your ideas’. <br />
              For the last one you can see{" "}
              <Link to="/projects">my projects</Link> to be sure that I got the
              knowledge, the skills and the quality of ideas. And if you want to
              really know me, and check my ability to write you can read what i
              wrote <Link to="/about">about me</Link>. Finally if you want to
              test my super power of speaking and communication feel free to{" "}
              <Link to="/contact">contact me</Link>.
            </p>
            <h4 style={{ fontSize: "1rem" }}>Email: ameenessid@gmail.com</h4>
            {/* , <Link to ='/codingChalenges'>my coding challenges</Link> */}
            {/* <Link to ='/blogs'>my blogs</Link> */}
            {/* and  <a href='#'>my Github</a> */}
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <div className="hero-img">
          <Image fixed={fixedSkillsMap} />
        </div>
      </div>
    </header>
  )
}

export default Hero
