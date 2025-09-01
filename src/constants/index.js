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
  threejs,
  mathwork,
  eduskill,
  images,
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
    title: "Full Stack  Developer",
    company_name: "Seva Development Pvt Ltd.",
    icon: mathwork,
    iconBg: "#161329",
    date: "July 2021 - February 2023",
    points: [
      "Developed and maintained web and mobile applications, improving usability and performance.",
      "Designed and Integrated APIs for smooth data exchange and reporting",
      "Implemented version control(GIT/Github),CI/CD practices",
      "Colaborated witth designers and QA to ensure seamless user experience",
    ],
  },
  {
    title: "QA Engineer",
    company_name: "Seva Development Pvt Ltd..",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2019 - July 2021",
    points: [
      "Conducted manual and automated testing of web and mobile app to ensure realibilit and performance ",
      "Performed API testing on Swagger and Postman to ensure the relaibility and correctness of data process",
      "Helped the team to write Selenium scripts to automate the testing process resulting to dedcution of manual testing load",
      "Runned automated testing on shopify integrated system"
    ],
  },
//   {
//     title: "Data QA Engineer Intern",
//     company_name: "LIS Nepal Ltd.",
//     icon: edunet,
//     iconBg: "#161329",
//     date: "June 2023 - July 2023",
//     points: [
//       "Supported data warehousing processes by validating data pipelines and ETL workflows.",

// "Wrote and optimized SQL queries for data validation, reporting, and issue resolution.",

// "Developed AWS scripts to automate data quality checks and streamline testing processes.",

// "Collaborated with data engineers to identify and fix inconsistencies across large datasets.",
//     ],
//   },
];

export const projects = [
  {
    name: "Facial Recognition Attendance Managment System",
    description:
      "IOT based project devloped on python and Raspberry PI using machine learning to recognise the students face and do the attendance.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Raspberry PI", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
    ],
    youtubeId:"bTiCDams1nI?si=PQ9c9vDF0RAm16pe",
    source_code_link: "https://github.com/MANSURTHAPA/AttendanceManagementSystem.git",
  },
  {
    name: "Vehicle Assistance Fullstack website",
    description:
      "A vehicle assistance website devloped on React, Node.js,MongoDB that allows user to request for vehicle assistance and mehcanics to see the request and guide to location",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    youtubeId:"IKOigAiQkjY?si=BWiA2tQNFnm2xGWg",

  },
  {
    name: "Vehicle Assistance Mobile App",
    description:
      "A Kotlin Mobile App using MongoDB and Node JS that has two seperate functions for customers and mechanics that allows user to request for vehicle assistance and mehcanics to see the request and guide to location.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "Android App", color: "green-text-gradient" },
      { name: "Mobile", color: "pink-text-gradient" },
    ],
   youtubeId:"X2jwxMuyXM8?si=bMBVKVe2q3ApO7_y"
,
  },
  
  {
    name: "Static Jwellery Website",
    description:
      "A static jwellery website to showcase usage of basic html,css, and js",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: images,
    source_code_link: "https://github.com/MANSURTHAPA/static-jewelerywebsite.git",
  },
];
