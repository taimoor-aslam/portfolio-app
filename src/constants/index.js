import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  aws,
  docker,
  aurora,
  zaytrics,
  threejs,
  kinfolk,
  dfsarmy,
  noblequote,
  // aws,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Aurora solutions",
    icon: aurora,
    iconBg: "#383E56",
    date: "Oct 2021 - Present",
    points: [
      "Developed new user-facing features using React",
      "Built reusable components for future use",
      "Orchestrated daily stand-up meetings with clients to ensure transparent communication, providing a forum for progress updates, addressing concerns, and aligning project goals",
      "Trained and lead 2 junior developers",
      "Translated designs and wire-frames into high quality code",
      "Optimized applications for maximum speed",
      "Modified existing software to correct errors, upgrade interfaces and improve performance",
      "Created RESTful APIs and integrating third-party APIs to enhance functionality and connectivity of applications",
      "Used version control systems (e.g., Git) to manage and track changes in source code collaboratively",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Zaytrics Pvt Ltd.",
    icon: zaytrics,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Oct 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Taimoor proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Taimoor does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Taimoor optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kinfolk",
    description:
      "Web based employee enablement platform on a mission to unite People Ops, hiring managers and Enablement teams to onboard, train, and develop people in one collaborative hub.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: kinfolk,
    source_code_link: "https://app.kinfolkhq.com/",
  },
  {
    name: "DFS Army",
    description:
      "Web based platform which provides the ultimate combination of tools and advice designed to level the playing field in Daily Fantasy Sports and allow average Joes to compete with the pros.",
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
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: dfsarmy,
    source_code_link: "https://www.dfsarmy.com/",
  },
  {
    name: "Noble Quote",
    description:
      "A swiftly growing entity specializing in top-tier automotive vehicle service contracts across the USA. With extensive expertise in the automotive industry, They provide tailored, outstanding products to meet client needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: noblequote,
    source_code_link: "https://noblequote.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
