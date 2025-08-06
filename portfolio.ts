const header = {
  homepage: "https://portfolio.shejan.me",
  title: "SHEJAN.",
};

const about = {
  name: "Shejan Mahamud",
  role: "Full-stack Developer",
  description:
    "Specializing in NodeJS, NestJS, ExpressJS, MongoDB, PostgreSQL, and NextJS. I build scalable and performant web applications with modern frameworks, focusing on user experience.",
  resume: "/api/resume",
  social: {
    leetcode: "https://leetcode.com/u/shejan/",
    linkedin: "https://www.linkedin.com/in/md-shejanmahamud/",
    github: "https://github.com/ShejanMahamud",
    medium: "https://medium.com/@shejanmahamud",
  },
};

const projects = [
  {
    name: "ReCAPTZ",
    year: "2024",
    description:
      "A modern, customizable CAPTCHA component for React applications with TypeScript support. Features multiple CAPTCHA types, validation rules, and beautiful UI out of the box.",
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    sourceCode: "https://github.com/ShejanMahamud/recaptz",
    projectUrl: "https://www.npmjs.com/package/recaptz?activeTab=readme",
  },
  {
    name: "AuthFlow",
    year: "2024",
    description:
      "A production-ready, plug-and-play authentication & authorization API built with NestJS, PostgreSQL, Prisma, and PassportJS. Designed to eliminate repetitive auth boilerplate in your projects.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "PassportJS", "BullMQ", "AWS S3"],
    sourceCode: "https://github.com/ShejanMahamud/authflow",
    projectUrl: "https://authflow.shejan.me",
  },
];

const skills = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "NestJS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "PassportJS",
  "BullMQ",
  "React",
  "Redux",
  "Next.js",
  "Git",
];

const experience = [
  {
    name: "Front-End Developer",
    locations: [{ date: "June 2024 - Dec 2024", location: "Remote" }],

    description:
      "Design and develop user interfaces using React.js, Next.js, Redux, and Tailwind CSS.Fix bugs, integrate backend APIs with the front-end UI, and create complex user interfaces.",
    stack: ["Next.js", "React", "Redux", "TypeScript"],
  },
];

const contact = {
  email: "dev.shejanmahamud@gmail.com",
};

export { about, contact, experience, header, projects, skills };
