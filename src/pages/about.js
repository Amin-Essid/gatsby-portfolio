import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import SEO from '../components/SEO'
const About = ({data:{about:{nodes}}}) => {
const {title, stack, image} = nodes[0]
  return <Layout>
    <SEO title='About' description='about me'/>
    <section className="about-page">
      <div className="section-center about-center">
        <div className="about-img">
          <Image fluid={image.childImageSharp.fluid} />
        </div>
        <article className="about-text">
          <Title title={title}/>
          {/* <p>{info}</p> */}
          <p>Hi again, as you know my name is Ameen, and I’m 23 years old, from Tunisia. I can tell you that I’m passionate about coding and solving problems, and that I enjoy learning new technologies, and that you can trust me to get the work done. But nothing is more powerful than a story, so I will tell mine. <br/>
I really believe that the best way to really know someone is to know what motivates him, and what is his biggest desire and dream and why he keeps moving in life. <br/>
I’m living in a small town in the north of Tunisia. I was always curios about how things work, and that curiosity led me to discover coding. To be honest, everybody in my small town was poor so I hadn’t had any computer until I went to college, so I had just read about coding on my small phone and I wrote some lines of code there but I never compiled it. <br/>
When I finished my high school I wanted to be an engineer in computer science. But as I said we couldn’t afford it especially that my sister is going to be a doctor and our family couldn’t afford the cost of our studies in two expensive fields. So I had to make a hard choice, I went to study education science in college (only 3 years of study in the nearest and a guaranteed job as a teacher when I finish). <br/>
I almost gave up about my passion in coding back then, but buying my first laptop made me back to that path again. But as you know life happens, I had few hard years in college that I couldn’t follow my goals as I wanted. And that continued until I graduated and went back to my small town to teach in the same school that I had studied in it when I was a kid. <br/>
I found out that nothing has changed, some of the windows and the doors of the classrooms are still broking, the kids still walk miles in the winter to go to school without any means of transport. And the most important thing that they are still very poor that they can’t even afford buying the necessary books to study, and the number of dropouts is still very high among them. <br/>
After some thinking I decided to took the responsibility and bear the burden of change. I decided to build a platform that can help the children of my school and other schools in Africa to keep learning and provides the minimum to them. I’m not going to lie, it’s really hard but it’s my purpose in life. <br/>
For the last year I’ve learned everyday and I’ve coded and built cool projects with different technologies. And I really think that I’m ready to work in a professional environment to sharp my skills and to get closer to my purpose. I really believe that I can get the work done and add value to your team. <br/>
Let’s aim to the highest star that we can see. <br/>
Let’s change the world :)</p>
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
