import React from "react"
import { FaCode, FaSketch, FaBusinessTime } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend developement",
    text: `I can develop a full frontend app for any type of projects using React JS library and all the main frameworks based on it:
    Create-react-app,
    Gatsby JS (static site generator),
    and Next JS (good for server side rendering).
    I can also use all the web traditional technologies (html, css, js, bootstrap… web views)
    `,
  },
  {
    id: 2,
    icon: <FaBusinessTime className="service-icon" />,
    title: "Backend developement",
    text: `I can build a full backend app for any type of projects using Node JS, Express and GraphQL, and I can connect it to database (SQL or NoSQL) using ORM or by traditional ways to manage it.`,
  },
  {
    id: 3,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I can design a powerful branding, a responsive layout and an effective web presence with a good UI/UX, for small to medium size businesses and websites.`,
  },
]
