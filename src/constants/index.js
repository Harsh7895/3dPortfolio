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
    meta,
    webDeveloper,
    tesla,
    videoEdit,
    eyewings,
    xcrypto,
    videoHub,
    threejs,
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
      title: "React Native Developer",
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
      title: "React Native Developer",
      company_name: "",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
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
      designation: "HOD",
      company: "Agra College",
      image: "https://th.bing.com/th/id/OIP.i7iZTzaojAdtoDQ-hw4MiwHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients",
      name: "Deepak",
      designation: "Manager",
      company: "Design&Develop Corp",
      image: "https://th.bing.com/th?id=OIP.j-ZDO15Aepp6VJ-KxOKILAAAAA&w=203&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
  ];
  
  const projects = [
    {
      name: "Eye Wings",
      description:
        "This is the e-commmerce website which has crud functioning dashboard of a admin , technologies used in this projects are mongoDB , express.js , react.js , node.js , scss.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
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
      name: "Xcrypto",
      description:
        "This is api based react app which has the api of crypto currencies , and has graphs to determine the increase and decrease in rates.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: xcrypto,
      source_code_link: "https://github.com/Harsh7895",
    },
    {
      name: "VIdeo Hub",
      description:
      "This is the sample description about the project details. This is the app to stream some videos and upload a video.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: videoHub,
      source_code_link: "https://github.com/Harsh7895",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };