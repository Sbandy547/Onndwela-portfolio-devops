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
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
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
    title: "Freelance Web Developer",
    icon: frontend,
  },
  {
    title: "CI/CD Pipelines",
    icon: backend,
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
    title: 'Freelance Web Developer',
    company_name: 'Self-Employed',
    icon: frontend,
    iconBg: '#1a1a2e',
    date: 'March 2026 – Present',
    points: [
      'Design and develop professional websites for businesses and entrepreneurs.',
      'Built and manage jobsready.co.za — a job listing platform.',
      'Provide end-to-end solutions: design, development, hosting, and maintenance.',
      'Help clients establish a strong online presence to grow their business.',
    ],
  },
  {
    title: 'DevOps Engineer Intern',
    company_name: 'Empire Partner Foundation',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'March 2025 – February 2026',
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
    id: 'project-1',
    name: 'JobsReady',
    description:
      'A professional job listing platform connecting job seekers with employers across South Africa. Built, deployed, and actively managed by Tshivhandekano Onndwela.',
    tags: ['Web Development', 'Job Platform', 'Full Stack'],
    url: 'https://jobsready.co.za',
  },
];

export { services, technologies, experiences, projects };
