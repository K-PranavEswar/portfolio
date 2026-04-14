import nasaCert from '../certificates/nasa.png'
import pythonCert from '../certificates/python.png'
import mernCert from '../certificates/mern.png'
import phpCert from '../certificates/php.png'
import fullstackCert from '../certificates/fullstack.png'

// Your project images
import brotracksImg from '../projects/brotrack.png'
import disasterReliefImg from '../projects/relieflink.png'
import medinetImg from '../projects/medinet.png'

// ----------------------------------------------------------------------
// ICONS IMPORT (Using react-icons)
// ----------------------------------------------------------------------
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython, FaPhp, FaFigma, FaGitAlt, FaLinux } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer, SiExpress, SiMongodb, SiFlask, SiMysql } from 'react-icons/si'

export const profile = {
  name: 'K PRANAV ESWAR',
  role: 'Software Developer | MERN Stack | Penetration Tester',
  location: 'Trivandrum, Kerala',
  email: 'pranavartist1@gmail.com',
  phone: '+91 9074261433',
  linkedin: 'linkedin.com/in/k-pranav-eswar1',
  github: 'https://github.com/K-PranavEswar',
  instagram: 'https://www.instagram.com/equizzle_arts',
  photo: '/pranav.png',
}

export const aboutText =
  'As an MCA student and aspiring MERN Stack Developer with a strong understanding of full-stack development and modern web technologies, I specialize in building dynamic and scalable web applications using React.js, Node.js, Express, and MongoDB, focusing on performance and user experience. Alongside development, I have a keen interest in the offensive side of cybersecurity, particularly penetration testing, where I enjoy identifying vulnerabilities and strengthening system security.'

export const stats = [
  { value: '19+', label: 'Core Skills' },
  { value: '05', label: 'Training Paths' },
  { value: '06', label: 'Featured Builds' }, 
  { value: '60', label: 'FPS Target' },
]

export const skills = [
  'HTML', 'CSS', 'BOOTSTRAP', 'React.js', 'Node.js', 
  'Express.js', 'NEXT js', 'MongoDB', 'Python', 'Flask', 
  'PHP', 'MySQL', 'Three.js', 'Framer Motion', 'Tailwind CSS', 
  'REST APIs', 'JWT', 'Authentication & Authorization', 'UI/UX', 'Figma'
]

export const skillCategories = [
  {
    title: 'Frontend',
    accent: '#ff3147',
    skills: [
      { name: 'HTML', level: 92, icon: <FaHtml5 color="#E34F26" /> },
      { name: 'CSS', level: 90, icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'BOOTSTRAP', level: 84, icon: <FaBootstrap color="#7952B3" /> },
      { name: 'React.js', level: 88, icon: <FaReact color="#61DAFB" /> },
      { name: 'NEXT js', level: 76, icon: <SiNextdotjs color="#ffffff" /> },
      { name: 'Tailwind CSS', level: 86, icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'Three.js', level: 72, icon: <SiThreedotjs color="#ffffff" /> },
      { name: 'Framer Motion', level: 78, icon: <SiFramer color="#0055FF" /> },
    ],
  },
  {
    title: 'Backend',
    accent: '#2dd4bf',
    skills: [
      { name: 'Node.js', level: 84, icon: <FaNodeJs color="#339933" /> },
      { name: 'Express.js', level: 82, icon: <SiExpress color="#ffffff" /> },
      { name: 'MongoDB', level: 82, icon: <SiMongodb color="#47A248" /> },
      { name: 'Python', level: 86, icon: <FaPython color="#3776AB" /> },
      { name: 'Flask', level: 70, icon: <SiFlask color="#ffffff" /> },
      { name: 'PHP', level: 76, icon: <FaPhp color="#777BB4" /> },
      { name: 'MySQL', level: 78, icon: <SiMysql color="#4479A1" /> },
    ],
  },
  {
    title: 'UI/UX & Tools',
    accent: '#60a5fa',
    skills: [
      { name: 'Figma', level: 76, icon: <FaFigma color="#F24E1E" /> },
      { name: 'Git', level: 82, icon: <FaGitAlt color="#F05032" /> },
      { name: 'Linux Basics', level: 78, icon: <FaLinux color="#FCC624" /> }
    ],
  },
]

export const timeline = [
  {
    id: 1,
    role: 'Advanced Python',
    company: 'ICT Academy of Kerala',
    duration: 'Mar 2026 - Present',
    location: 'Thiruvananthapuram, Kerala, India · On-site',
    description: 'Worked on advanced Python programming, Jupyter workflows, backend scripting, automation, and real-world project problem solving.',
    tech: ['Python', 'Jupyter', 'Automation', 'APIs'],
  },
  {
    id: 2,
    role: 'Penetration Tester',
    company: 'RedTeam Hacker Academy',
    duration: 'Feb 2026 - Present',
    location: 'Trivandrum, Kerala, India · On-site',
    description: 'Performed ethical hacking labs, vulnerability assessments, OWASP testing, and real-world penetration testing workflows.',
    tech: ['Ethical Hacking', 'Burp Suite', 'Nmap', 'C#'],
  },
  {
    id: 3,
    role: 'FULL STACK PHP',
    company: 'Trinity Technologies and Software Solutions Pvt Ltd',
    duration: 'Jan 2025 - Mar 2025',
    location: 'Thiruvananthapuram, Kerala, India · On-site',
    description: 'Built secure PHP full-stack applications with AJAX, Bootstrap, admin dashboards, and MySQL-based systems.',
    tech: ['PHP', 'AJAX', 'Bootstrap', 'MySQL'],
  },
  {
    id: 4,
    role: 'MeRN Stack Development',
    company: 'Luminar Technolab',
    duration: 'Feb 2025',
    location: 'Kochi, Kerala, India · Remote',
    description: 'Developed modern MERN applications with reusable React components, JWT authentication, and REST APIs.',
    tech: ['React.js', 'MongoDB', 'Express', 'Node.js'],
  },
  {
    id: 5,
    role: 'FULL STACK JAVA',
    company: 'ICT Academy of Kerala',
    duration: 'May 2024 - Jun 2024',
    location: 'Thiruvananthapuram, Kerala, India · On-site',
    description: 'Worked on Java full-stack concepts, SQL integration, backend services, and enterprise application development.',
    tech: ['Java', 'JavaScript', 'Node.js', 'SQL'],
  },
]

export const projects = [
  {
    title: 'BroTracks',
    subtitle: 'Smart School Transport Tracking System',
    tags: ['PHP', 'GPS', 'Realtime'],
    gradient: 'from-red-500 via-rose-900 to-black',
    image: brotracksImg,
    copy: 'A safety-first transport command center for live school bus tracking, route visibility, and parent confidence.',
    sourceCode: 'https://github.com/K-PranavEswar/brotracks',
  },
  {
    title: 'Disaster Relief Resource Tracker',
    subtitle: 'Emergency inventory and allocation grid',
    tags: ['PHP', 'Maps', 'Emergency Response', 'Resource Management'],
    gradient: 'from-red-700 via-zinc-900 to-black',
    image: disasterReliefImg,
    copy: 'A rapid-response tracker for relief resources, location-aware distribution, and operational clarity during crisis windows.',
    sourceCode: 'https://github.com/K-PranavEswar/relieflink',
  },
  {
    title: 'MEDINET',
    subtitle: 'GPS Accident Emergency Support',
    tags: ['PHP', 'Emergency', 'Maps', 'Healthcare'],
    gradient: 'from-rose-600 via-red-950 to-zinc-950',
    image: medinetImg,
    copy: 'A GPS-assisted emergency support concept that accelerates accident response and keeps critical care signals visible.',
    sourceCode: 'https://github.com/K-PranavEswar/medinet',
  },
]

export const certifications = [
  {
    id: 1,
    title: 'NASA SPACE APPS CHALLENGE',
    issuer: 'NASA',
    issued: 'Oct 2025',
    expires: 'Oct 2025',
    image: nasaCert,
  },
  {
    id: 2,
    title: 'Python (Basic) Certificate',
    issuer: 'HackerRank',
    issued: 'Mar 2025',
    image: pythonCert,
  },
  {
    id: 3,
    title: 'Workshop on MernStack Development',
    issuer: 'Luminar Technolab',
    issued: 'Feb 2025',
    expires: 'Feb 2025',
    image: mernCert,
  },
  {
    id: 4,
    title: 'FULL STACK PHP',
    issuer: 'Trinity Technology',
    issued: 'Nov 2024',
    expires: 'Mar 2025',
    image: phpCert,
  },
  {
    id: 5,
    title: 'Full Stack Development Certification',
    issuer: 'ICT Academy of Kerala',
    issued: 'May 2024',
    expires: 'Jun 2024',
    image: fullstackCert,
  },
]

export const education = [
  {
    degree: 'MCA',
    institution: 'Lourdes Matha College of Science and Technology',
    years: '2025 - 2027',
    specialization: 'Master of Computer Applications',
    subjects: ['Advanced Web Engineering', 'Data Structures', 'Database Systems', 'Software Architecture'],
    grade: 'Pursuing',
    logo: 'LMCST',
  },
  {
    degree: 'BCA',
    institution: 'Christ College Vizhinjam',
    years: '2022 - 2025',
    specialization: 'Computer Science',
    subjects: ['Programming', 'Web Development', 'Operating Systems', 'DBMS'],
    grade: '7.9',
    logo: 'CCV',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Chinmaya Vidyalaya, Attukal',
    years: '2020 - 2022',
    specialization: 'Computer Science Stream',
    subjects: ['Computer Science', 'Mathematics', 'Physics', 'English'],
    grade: '6.6',
    logo: 'HSE',
  },
]