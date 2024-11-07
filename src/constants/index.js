import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  webDeveloper,
  plura,
  videoEdit,
  eyewings,
  devoverflow,
  threejs,
  avatar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "",
    icon: webDeveloper,
    iconBg: "#383E56",
    date: "",
    points: [
      "Specializing in MERN stack development, we craft dynamic and scalable web applications. From MongoDB to React, our expertise spans the entire MERN technology stack, ensuring seamless integration and top-notch performance. Elevate your digital presence with our MERN development services – where innovation meets efficiency.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Video Edit",
    company_name: "",
    icon: videoEdit,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Crafting captivating visual narratives through expert video editing. Elevate your content with seamless transitions, dynamic storytelling, and polished aesthetics. From raw footage to a compelling final cut, our video editing services bring your vision to life, leaving a lasting impact on your audience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I appreciate your work , I didn't think you can build excellent webapps and websites.",
    name: "Rahul Mishra",
    designation: "HOD of BCA",
    company: "Agra College",
    image: avatar,
  },
  {
    testimonial:
      "Harsh was a dedicated and quick-learning intern who made a positive impact on our team. Their skills and proactive approach were impressive, and we’re confident they’ll excel in future roles.",
    name: "Mayank Arora",
    designation: "Founder",
    company: "SoarX",
    image: avatar,
  },
];

const projects = [
  {
    name: "Eye Wings",
    description:
      "This is the e-commmerce website which has crud functioning dashboard of a admin , technologies used in this projects are mongoDB , express.js , react.js , node.js , scss.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: eyewings,
    source_code_link: "https://github.com/Harsh7895/Eyewings-Frontend",
  },
  {
    name: "DevOverFlow",
    description:
      "Created a dynamic Q&A platform similar to Stack Overflow, featuring interactive design, and SEO optimization",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: devoverflow,
    source_code_link: "https://github.com/Harsh7895/devoverflow_nextjs",
  },
  {
    name: "Plura SAAS Platform",
    description:
      "Currently building a SAAS platform where a person or agency can build their website effectienly without having the knowledge of coding and host them on our platform",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: plura,
    source_code_link: "https://github.com/Harsh7895/buildSite",
  },
];

export { services, technologies, experiences, testimonials, projects };
