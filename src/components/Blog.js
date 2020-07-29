// import React from "react"
// import PropTypes from "prop-types"
// import Image from "gatsby-image"
// import { Link } from "gatsby"
// const Blog = ({id, title, image, date, category, slug, desc}) => {
//   return <Link className='blog' key={id} to={`/blogs/${slug}`}>
//     <article>
//       {
//         image &&
//         <Image fluid={image.childImageSharp.fluid} className='blog-img' />
//       }
//       <div className="blog-card">
//         <h4>{title}</h4>
//         <p>{desc}</p>
//         <div className="blog-footer">
//           <p>{category}</p>
//           <p>{date}</p>
//         </div>
//       </div>
//       </article>
//   </Link>
// }

// Blog.propTypes = {
//   id: PropTypes.string.isRequired, 
//   title: PropTypes.string.isRequired, 
//   image: PropTypes.object.isRequired, 
//   date: PropTypes.string.isRequired, 
//   category: PropTypes.string.isRequired, 
//   slug: PropTypes.string.isRequired, 
//   desc: PropTypes.string.isRequired
// }

// export default Blog