// ── PORTFOLIO DATA ──
// Centralised data source — edit here to update the entire portfolio

export const personal = {
  name: "Abhik Samanta",
  role: "Full Stack Developer",
  eyebrow: "Open to opportunities",
  description:
    "Building production-ready REST APIs and responsive web applications using Java, Spring Boot, Node.js, and React. Focused on scalable backend systems and elegant user experiences.",
  email: "abhiksamanta20@gmail.com",  
  phone: "+91 9800007300",
  github: "https://github.com/AbhikSamanta004",
  linkedin: "https://www.linkedin.com/in/abhik-samanta-59206b278/",
  linkedinHandle: "abhik-samanta-59206b278",
  githubHandle: "AbhikSamanta004",
};

export const heroStats = [
  { value: "20+",  label: "APIs Built" },
  { value: "10K+", label: "Requests/day" },
  { value: "300+", label: "DSA Problems" },
  { value: "9.57", label: "CGPA" },
];

export const navLinks = [
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

export const floatBadges = [
  { text: "☕ Java",        className: "fb1" },
  { text: "⚡ Spring Boot", className: "fb2" },
  { text: "⚛ React",       className: "fb3" },
  { text: "🐳 Docker",      className: "fb4" },
  { className: 'fb5', text: '🟢 Node.js' },
  { className: 'fb6', text: '🗄️ SQL' },
];

export const aboutText = [
  "I specialize in building scalable backend systems and responsive frontend applications. I enjoy designing efficient APIs, integrating databases, and working with asynchronous systems like Kafka.",
  "I like building products that are technically strong and user-friendly. My goal is to contribute to impactful engineering teams and keep growing as a full stack developer.",
];

export const kpis = [
  { value: "20+",  label: "Production REST APIs" },
  { value: "30%",  label: "Latency reduction" },
  { value: "10K+", label: "Requests/day" },
  { value: "9.57", label: "CGPA" },
];

export const coreTech = [
  "Java","Spring Boot","Node.js","React","PostgreSQL","Kafka",
  "Docker","REST APIs","Microservices","JWT","CI/CD","MongoDB",
  "Redis","AWS","TypeScript","Socket.IO","WebRTC",
];

export const skills = [
  { icon: "🔷", name: "Languages",            tags: ["Java","JavaScript","TypeScript"] },
  { icon: "⚙️", name: "Backend",              tags: ["Spring Boot","Node.js","Express","REST APIs","Microservices"] },
  { icon: "⚛️", name: "Frontend",             tags: ["React","HTML","CSS","Tailwind"] },
  { icon: "🗄️", name: "Databases",            tags: ["MySQL","PostgreSQL","MongoDB","Redis"] },
  { icon: "☁️", name: "Cloud & Distributed",  tags: ["Apache Kafka","Docker","AWS","CI/CD"] },
  { icon: "🛠️", name: "Tools & Testing",      tags: ["JUnit","Git","Maven","Swagger","Postman"] },
];

// Each bullet is an array of {hl, text} segments so Experience.jsx
// can render highlighted spans without JSX in the data file.
export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Innova Solutions",
    period: "May 2025 — Feb 2026",
    bullets: [
      [
        { hl:false, text:"Developed " },
        { hl:true,  text:"20+ REST APIs" },
        { hl:false, text:" using Java, Spring Boot and PostgreSQL serving " },
        { hl:true,  text:"10K+ requests/day" },
        { hl:false, text:", reducing response time by " },
        { hl:true,  text:"30%" },
        { hl:false, text:"." },
      ],
      [
        { hl:false, text:"Implemented Kafka-based async workflows reducing system latency by " },
        { hl:true,  text:"30%" },
        { hl:false, text:" and improving notification throughput." },
      ],
      [
        { hl:false, text:"Integrated " },
        { hl:true,  text:"JWT-based authentication" },
        { hl:false, text:" and RBAC security for secure multi-role access control." },
      ],
      [
        { hl:false, text:"Deployed services using " },
        { hl:true,  text:"Docker containers" },
        { hl:false, text:" with CI/CD pipelines." },
      ],
      [
        { hl:false, text:"Collaborated in Agile sprints with code reviews and technical documentation." },
      ],
    ],
  },
];

// Each project description is an array of {bold, text} segments.
export const projects = [
  {
    num: "01",
    name: "AI-Powered Doctor Appointment & Telemedicine Platform",
    descParts: [
      { bold:false, text:"Full-stack telemedicine platform for appointment booking, slot management, payment processing, and status tracking for " },
      { bold:true,  text:"1000+ simulated users" },
      { bold:false, text:". Real-time doctor-patient communication via Socket.IO and WebRTC. Secure backend with JWT, RBAC, Razorpay, Cloudinary, and AI-powered symptom analysis." },
    ],
    tags: ["React","Node.js","Express","MongoDB","Socket.IO","WebRTC","JWT","Razorpay"],
    links: [
      { label:"Live Demo", href:"https://pulse-point-wt2h.vercel.app/", variant:"solid", icon:true },
      { label:"GitHub",    href:"https://github.com/AbhikSamanta004",   variant:"ghost" },
    ],
  },
  {
    num: "02",
    name: "URL Shortener Platform",
    descParts: [
      { bold:false, text:"URL shortening platform using Spring Boot, React, and MySQL for generating and managing secure short links. JWT authentication, URL redirection, user dashboards, and click analytics. Optimized database indexing for fast lookup, containerized with Docker." },
    ],
    tags: ["Spring Boot","React","MySQL","JWT","Docker"],
    links: [
      { label:"View on GitHub", href:"https://github.com/AbhikSamanta004", variant:"solid" },
    ],
  },
];

export const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    university: "Chitkara University",
    meta: "Expected 2026 · Punjab, India",
    gpa: "9.57",
  },
];

export const achievements = [
  { icon:"🏆", title:"300+ DSA Problems",    desc:"Solved on LeetCode, Codeforces, and HackerRank. Strong algorithmic thinking and competitive programming skills." },
  { icon:"🤝", title:"Strong Collaboration", desc:"Excellent communication, teamwork, and problem-solving across cross-functional engineering teams." },
  { icon:"🌿", title:"NSS Volunteer",         desc:"National Service Scheme member contributing to community development and social impact initiatives." },
  { icon:"⭐", title:"9.57 CGPA",            desc:"Exceptional academic performance while simultaneously gaining real-world production engineering experience." },
];

export const contactLinks = [
  { icon:"📞", label:"Phone",    value:"+91 9800007300",           href:"tel:+919800007300" },
  { icon:"✉️", label:"Email",    value:"abhiksamanta20@gmail.com", href:"mailto:abhiksamanta20@gmail.com" },
  { icon:"💼", label:"LinkedIn", value:"abhik-samanta-59206b278",  href:"https://www.linkedin.com/in/abhik-samanta-59206b278/" },
  { icon:"🐱", label:"GitHub",   value:"AbhikSamanta004",          href:"https://github.com/AbhikSamanta004" },
];
