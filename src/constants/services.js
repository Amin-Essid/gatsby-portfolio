import React from "react"
import { FaCode, FaSketch, FaBusinessTime, } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I’m a full-stack web developer (MERN stack), my skills shine more in the front-end using React and Gatsby. I can easily integrate in a team and learn new technologies. I can also working alone on a project as a freelancer.`,
  },
  {
    id: 2,
    icon: <FaBusinessTime className="service-icon" />,
    title: "Freelancing",
    text: `I can build your custom website as you dream it (and connect it to headless CMS for you to manage its content).`,
  },
  {
    id: 3,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I can design a powerful branding, a responsive layout and an effective web presence with a good UI/UX, for small to medium size businesses and websites.`,
  },
]
