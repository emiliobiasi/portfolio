import company1 from "../../public/c1.jpeg";
import company2 from "../../public/c2.jpeg";
import company3 from "../../public/c3.jpeg";
import company4 from "../../public/c4.jpeg";

import project1 from "../../public/project1.jpeg";
import project2 from "../../public/project2.jpeg";
import project3 from "../../public/project3.jpeg";
import project4 from "../../public/project4.jpeg";

import socioclub from "../../public/socioclub.png";
import pivaseguros from "../../public/piva-seguros.png";
import projectinbio from "../../public/projecinbio.png";
import vacuumcleaner from "../../public/vacuumcleaner.png";

import yourclub from "../../public/yourclub-logo.png";
import dpaschoal from "../../public/dpaschoal.png";
import pivaseguroslogo from "../../public/pivaseguros-logo.png";

export const PROFILE = {
  name: "Emílio Biasi",
  city: "Campinas, São Paulo 🇧🇷",
  greet: "Nice to Meet you!",
};

export const PROJECTS = [
  {
    name: "ProjectInBio",
    image: projectinbio,
    url: "https://github.com/emiliobiasi/project-in-bio",
  },
  {
    name: "SocioClub",
    image: socioclub,
    url: "https://github.com/emiliobiasi/socioclubmobile",
  },
  {
    name: "VacuumCleaner",
    image: vacuumcleaner,
    url: "https://github.com/emiliobiasi/VacuumCleaner",
  },
  {
    name: "Piva Seguros",
    image: pivaseguros,
    url: "https://github.com/emiliobiasi/pivaseguros",
  },
];

// export const SKILLS = [
//   "Python, Java, TypeScript, JavaScript",
//   "Next.js, React, React Native, Tailwind CSS",
//   "SQL (PostgreSQL), NoSQL (MongoDB), Firebase",
//   "Power BI, Web Scraping, Web Design (Figma)",
//   "POO, Stripe API, PagBank API",
//   "BigQuery, C++, Kotlin",
// ];

export const SKILLS = [
  // Linha 1: "Python, Java, TypeScript, JavaScript"
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/python.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/java.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/typescript.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/javascript.svg",
  },

  // Linha 2: "Next.js, React, React Native, Tailwind CSS"
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/nextdotjs.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/react.svg",
  },
  {
    // React Native não tem ícone específico,
    // então costumamos reutilizar o React ou algum outro placeholder
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/react.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/tailwindcss.svg",
  },

  // Linha 3: "SQL (PostgreSQL), NoSQL (MongoDB), Firebase"
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/postgresql.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/mongodb.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/firebase.svg",
  },

  // Linha 4: "Power BI, Web Scraping, Web Design (Figma)"
  {
    name: "Power BI",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/powerbi.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/figma.svg",
  },

  // Linha 5: "POO, Stripe API, PagBank API"
  {
    name: "Stripe API",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/stripe.svg",
  },
  {
    // “PagBank” vem da mesma empresa de “PagSeguro”
    // e existe em Simple Icons
    name: "PagBank API",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/pagseguro.svg",
  },

  // Linha 6: "BigQuery, C++, Kotlin"
  {
    // Não há ícone "BigQuery" oficial, usei "googlecloud" como aproximação
    name: "BigQuery",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/googlecloud.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/cplusplus.svg",
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.4.0/icons/kotlin.svg",
  },
];

export const EXPERIENCES = [
  {
    img: yourclub,
    year: "01/2024 - Present",
    role: "Full-Stack Developer",
    company: "YourClub.io",
    description: `As a Full-Stack Developer at YourClub.io, I manage databases with Firebase, develop web and mobile interfaces using React, Next.js, and React Native, and implement backend solutions in JavaScript, focusing on scalability and efficiency. I also perform payment integrations via APIs (PagSeguro and Stripe), optimizing transactions and user experience.`,
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Firebase",
    ],
  },
  {
    img: pivaseguroslogo,
    year: "06/2024 - Present",
    role: "Full-Stack Developer, Tech Lead, and Project Manager",
    company: "Freelancer (Piva Seguros)",
    description: `Currently developing an authenticated control panel focused on form control and management. I handle the complete setup of the application, with a frontend in TypeScript, React, and Tailwind, a backend in JavaScript, and database modeling in SQLite.`,
    technologies: ["TypeScript", "Next.js", "Tailwind", "SQLite", "Firebase"],
  },
  {
    img: dpaschoal,
    year: "01/2023 - 12/2023",
    role: "Full-Stack Developer",
    company: "DPaschoal",
    description: `Participated in the development of a course creation platform for employee training at DPaschoal, where I learned and applied knowledge in web development and project management. Worked with technologies like React, TypeScript, Node, MySQL, and Azure, contributing to the creation of a robust and efficient solution.`,
    technologies: ["React", "TypeScript", "Node", "MySQL", "Azure"],
  },
];
