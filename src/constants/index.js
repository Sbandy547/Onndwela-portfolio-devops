import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  practitioner,
  foundation,
  azure,
  deloitte,
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "CI/CD Pipelines",
    icon: backend,
  },
  {
    title: "Automation",
    icon: frontend,
  },
  {
    title: "Cloud & Monitoring",
    icon: ux,
  },
  {
    title: "IT Support & Security",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'DevOps Engineer Intern',
    company_name: 'Empire Partner Foundation',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'March 2025 – Present',
    points: [
      'Designed and maintained CI/CD pipelines using GitHub Actions and Docker.',
      'Monitored infrastructure and application health using AWS CloudWatch.',
      'Collaborated with dev and ops teams to troubleshoot deployment issues.',
      'Automated routine infrastructure tasks, reducing manual errors.',
      'Conducted vulnerability assessments and implemented security improvements.',
    ],
  },
  {
    title: 'Volunteer IT Assistant',
    company_name: 'Faizel Electronics Solutions',
    icon: microverse,
    iconBg: '#333333',
    date: 'January 2024 – December 2024',
    points: [
      'Diagnosed and resolved hardware and software issues on laptops and desktops.',
      'Performed hardware repairs, upgrades, and component replacements.',
      'Installed and configured operating systems and essential software.',
      'Supported data backup, antivirus setup, and system optimisation.',
    ],
  },
  {
    title: 'Diploma – Information Technology Management',
    company_name: 'IIE Rosebank College',
    icon: kelhel,
    iconBg: '#333333',
    date: '2021 – 2023',
    points: [
      'Information Security, Database Management, Web Development.',
      'Enterprise Resource Planning, System Analysis & Design, Help Desk.',
    ],
  },
  {
    title: 'Matric – Physical Sciences & Mathematics',
    company_name: 'Tshivhase Secondary School',
    icon: dcc,
    iconBg: '#333333',
    date: '2015 – 2019',
  },
];

const projects = [
  {
    id: "project-1",
    name: "AWS Academy Cloud Foundations",
    description:
      "Completed AWS Academy Cloud Foundations, covering core AWS services, cloud concepts, security, and architecture.",
    image: foundation,
    repo: "#",
    demo: "https://www.linkedin.com/in/tshivhandekano-onndwela",
  },
  {
    id: "project-2",
    name: "AWS Certified Cloud Practitioner",
    description:
      "Earned the AWS Certified Cloud Practitioner credential, validating foundational cloud knowledge and AWS services.",
    image: practitioner,
    repo: "#",
    demo: "https://www.linkedin.com/in/tshivhandekano-onndwela",
  },
  {
    id: "project-3",
    name: "Azure Virtual Machine Deployment",
    description:
      "Hands-on experience creating virtual machines and deploying a web server on Microsoft Azure.",
    image: azure,
    repo: "#",
    demo: "https://www.linkedin.com/in/tshivhandekano-onndwela",
  },
  {
    id: "project-4",
    name: "Deloitte Technology Consulting",
    description:
      "Completed Deloitte's Technology Consulting Virtual Internship, gaining exposure to real-world consulting and tech strategy.",
    image: deloitte,
    repo: "#",
    demo: "https://www.linkedin.com/in/tshivhandekano-onndwela",
  },
];

export { services, technologies, experiences, projects };
