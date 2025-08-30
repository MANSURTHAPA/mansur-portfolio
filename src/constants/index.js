import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "IT support",
    company_name: "Opal Community Care",
    icon: eduskill,
    iconBg: "#161329",
    date: "April 2024 - June 2025",
    points: [
      "Resolved IT support requests with a 95% SLA compliance rate, reducing downtime for community care staff",
"Supported rollout and adoption of telehealth systems, enabling more efficient client consultations.",

"Streamlined user onboarding by standardizing Active Directory setup, cutting setup time by 30%.",

"Delivered tailored IT training to non-technical staff, improving system adoption and reducing repeat issues.",
    ],
  },
  {
    title: "Administration Officer",
    company_name: "Opal Community Care",
    icon: eduskill,
    iconBg: "#161329",
    date: "March 2023 - May 2024",
    points: [
      "Processed payroll and staff rosters with 100% accuracy, ensuring compliance with award rates and staffing requirements.",

"Improved efficiency of admissions and client records management by streamlining documentation workflows.",

"Acted as the first point of contact for families and staff, delivering clear communication and excellent customer service.",

"Supported management with reporting, scheduling, and compliance documentation, improving audit readiness.",
    ],
  },
  {
    title: "Software Developer & Tester",
    company_name: "Seva Development Pvt Ltd.",
    icon: mathwork,
    iconBg: "#161329",
    date: "February 2020 - January 2023",
    points: [
      "Developed and maintained web and mobile applications, improving usability and performance.",

"Designed and executed test plans, identifying and fixing defects early in the cycle.",

"Implemented automation testing on Shopify platform, reducing manual testing effort.",

"Collaborated within an Agile team to deliver projects on time and within scope.",
    ],
  },
  {
    title: "Data QA Engineer Intern",
    company_name: "LIS Nepal Ltd.",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Supported data warehousing processes by validating data pipelines and ETL workflows.",

"Wrote and optimized SQL queries for data validation, reporting, and issue resolution.",

"Developed AWS scripts to automate data quality checks and streamline testing processes.",

"Collaborated with data engineers to identify and fix inconsistencies across large datasets.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
