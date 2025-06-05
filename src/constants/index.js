import {
  portfolio,
  enterkey,
  nsic,
  jspiders,
  homiefix,
  worknexus,
  chatbot,
  ponjesly,
  bapuji,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiSpringboot,
  SiReact,
  SiPython,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiVite,
  SiIntellijidea,
  SiEclipseide,
} from "react-icons/si";

import { DiCss3, DiJava} from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

export const resumeLink =
  "https://drive.google.com/file/d/1DjJ8Qg71MBQRO_tvdNdNMImM7U8D35ho/view?usp=drive_link";
export const repoLink = "https://github.com/shajai63?tab=repositories";

export const callToAction = "https://www.linkedin.com/in/shajaisj63/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: ponjesly,
    title: "Ponjesly College of Engineering",
    degree: "Bachelor of Technology",
    duration: "Aug 2019 - May 2023",
    content1: "Major: Information Technology",
    content2: "CGPA: 7.5/10",
  },
  {
    id: "education-2",
    icon: bapuji,
    title: "Bapuji Memorial Higher Secondary School",
    degree: "HSC",
    duration: "Jun 2018 - May 2019",
    content1:
      "Major: Biology, Physics, Chemistry, Mathematics",
    content2: "Percentage: 64%",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-4",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        id: "db-1",
        icon: SiMysql,
        name: "MySQL",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-0",
        icon: SiSpringboot,
        name: "Spring Boot",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiIntellijidea,
        name: "Intellijidea",
      },
      {
        id: "t-2",
        icon: SiEclipseide,
        name: "Eclipse IDE",
      },
      {
        id: "t-3",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "EnterKey Solutions, Nagercoil",
    logo: enterkey,
    link: "https://enterkeysolutions.com",
    positions: [
      {
        title: "Java FullStack Developer",
        duration: "Oct 2024 - Present",
        content: [
          {
            text: "Working as a Java Fullstack Developer, building and maintaining scalable web applications using Spring Boot, React.js and MySQL.",
            link: "",
          },
        ],
      },
    ],
  },

  {
    organisation: "JSpiders, Bangalore",
    logo: jspiders,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Java FullStack Developement",
        duration: "Aug 2023 - Apr 2024",
        content: [
          {
            text: "Trained as a Java Fullstack Developer with expertise in Spring Boot, React.js, and MySQL",
            link: "",
          },
          {
            text: "Built end-to-end web applications with RESTful APIs and responsive user interfaces.",
            link: "",
          },
          {
            text: "Focused on real-time project development, code management, and frontend-backend integration.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "NSIC Technical Services Centre, Chennai",
    logo: nsic,
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Web Developer Intern",
        duration: "May 2022 - Jun 2022",
        content: [
          {
            text: "Worked as a Web Developer Intern, focusing on building responsive websites using HTML, CSS, JavaScript, and Bootstrap.",
            link: "",
          },
          {
            text: "Gained hands-on experience in creating user-friendly interfaces and improving website performance",
            link: "",
          },
          {
            text: "Collaborated with the team to develop and maintain front-end components for real-time projects.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "HomieFix",
    github: "https://github.com/shajai63?tab=repositories",
    link: "https://admin.homiefix.in/",
    image: homiefix,
    content:
      "Developed the HomieFix web app to connect users with home service providers, using React.js for the frontend and Spring Boot for the backend.",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiSpringboot,
        name: "Springboot",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "Mysql",
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    id: "project-2",
    title: "Worknexus",
    github: "https://github.com/shajai63?tab=repositories",
    link: "e",
    image: worknexus,
    content:
      "Simple and secure way to interact with remote MCP Servers in Trusted Execution Environments (TEEs). Built at ETHGlobal Trifecta Hackathon.",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiSpringboot,
        name: "Springboot",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "Mysql",
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    id: "project-3",
    title: "Chatbot",
    github: "https://github.com/shajai63?tab=repositories",
    link: "e",
    image: chatbot,
    content:
      "Developed a Chatbot web application using Spring Boot, React, MySQL, and Bootstrap for seamless user interaction and dynamic responses.",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiSpringboot,
        name: "Springboot",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "Mysql",
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    id: "project-4",
    title: "Portfolio",
    github: "https://github.com/shajai63?tab=repositories",
    link: "https://shajai63.github.io/Portfolio/",
    image: portfolio,
    content: "Created a personal portfolio website using React, Bootstrap, and Vite to showcase my projects and skills.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/shajaisj63/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/shajai63",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sjshajai56@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/__.shajai.__/",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Shajai SJ",
  githubUsername: "shajai63",
  tagLine:
    "Java FullStack Developer | EnterKey Solutions",
  intro:
    "Software Developer from India who is either busy improving his craft or pondering over the next big idea.",
};
