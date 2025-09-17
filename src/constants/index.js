
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  postgresql,
  solidity,
  iis,
  pytorch,
  scikitlearn,
  project1,
  project2,
  project3,
  mysql,
  nestjs,
  aws,
  mui,
  
  nextjs,
  python,
  typescript,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/LOGOS.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI & Machine Learning Developer",
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
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "IIS Server",
    icon: iis,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Scikit-Learn",
    icon: scikitlearn,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "ARS Tunisie",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2025 - present",
    points: [
      "Designed and developed a full-stack web application for real-time operational monitoring using React.js, Node.js, and PostgreSQL.",
      "Implemented intelligent modules for document management (GED), electronic correspondence (GEC), claims handling, and financial transaction tracking.",
      "Collaborated with cross-functional teams to align with business requirements and delivered a solution 98% compliant with specifications.",
      "Integrated dashboards with dynamic reporting and KPIs for performance analysis across departments, teams, and individuals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "ARS Dashboard",
    description:
      "Real-time operational monitoring web application for ARS Tunisia insurance company. Features intelligent document management (GED), electronic correspondence (GEC), claims handling with AI analysis, and financial transaction tracking with dynamic dashboards and KPIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "white-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/khiari-mohamed",
  },
  {
    name: "Fashion Ecommerce",
    description:
      "A modern ecommerce platform for fashion and clothing. Features product catalog, shopping cart, user authentication, order management, and secure payment processing for a seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/khiari-mohamed",
  },
  {
    name: "Neural Network Crop Classification",
    description:
      "An AI-powered crop classification system using deep learning neural networks. Built with PyTorch for model training and NumPy for data processing, this project accurately identifies and classifies different crop types from agricultural images.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
      {
        name: "jupyter",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/khiari-mohamed",
  },
];

export { services, technologies, experiences, testimonials, projects };
