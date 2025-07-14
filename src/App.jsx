import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import emailjs from '@emailjs/browser';
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Code, 
  Palette, 
  Database, 
  Wrench,
  MapPin,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Send
} from 'lucide-react'
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(50)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',    
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  })
  
  const fullText = "Crafting scalable applications, solving complex problems, and optimizing performance."
  
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'CWRH3rmCTJn0J74Qr');
  }, [])

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1 // Only one text to loop through
      const fullTextValue = fullText
      
      if (!isDeleting && typedText === fullTextValue) {
        // Pause at the end before deleting
        setIsDeleting(true)
        setTypingSpeed(2000) // Pause before starting to delete
      } else if (isDeleting && typedText === '') {
        // Start typing again
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(150) // Speed when starting to type
      } else {
        // Typing or deleting
        setTypedText(prev => {
          let newText
          if (isDeleting) {
            newText = fullTextValue.substring(0, prev.length - 1)
          } else {
            newText = fullTextValue.substring(0, prev.length + 1)
          }
          return newText
        })
        setTypingSpeed(isDeleting ? 30 : 50) // Faster when deleting
      }
    }
    
    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, loopNum, typingSpeed])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const projects = [
    {
      title: "AI Interviewer",
      description: "AI-powered interview platform using FastAPI, OpenAI GPT-3.5, and Next.js to generate tailored behavioral and technical questions.",
      technologies: ["Next.js", "FastAPI", "React.js", "Tailwind CSS", "OpenAI API", "Render", "Vercel", "Git"],
      liveUrl: "https://ai-interviewer-tau.vercel.app/",
      githubUrl: "https://github.com/ambadkar06/ai-interviewer"
    },
    {
      title: "AI Music Generator",
      description: "Full-stack app with MusicGen API and WaveSurfer.js to generate and visualize audio from text prompts.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "WaveSurfer.js", "MusicGen API", "Web Audio API", "Git"],
      liveUrl: "https://ai-music-generator-roan.vercel.app/",
      githubUrl: "https://github.com/ambadkar06/ai-music-generator"
    },
    {
      title: "Flight Finder Pro",
      description: "Real-time flight search engine using React, SerpAPI, and a TypeScript/Node.js backend with token-based booking logic.",
      technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "REST APIs", "SerpAPI", "Tailwind CSS", "Vercel", "Git"],
      liveUrl: "https://flight-finder-pro.vercel.app/",
      githubUrl: "https://github.com/ambadkar06/FlighFinderPro"
    },
    {
      title: "Bank Loans Backend",
      description: "A Node.js backend powered by MongoDB Atlas and Prisma ORM for managing bank loan data. Features include secure API endpoints and scalable database architecture.",
      technologies: ["Node.js", "MongoDB", "Prisma", "JavaScript"],
      liveUrl: "",
      githubUrl: "https://github.com/ambadkar06/Bank-Loans-Backend",
    },
    {
      title: "Bank Loans UI",
      description: "A React.js frontend that connects to the Bank Loans backend, providing a dynamic user experience with real-time CRUD operations.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/ambadkar06/Bank-Loans-UI",
    },
    {
      title: "Music Records Database Design",
      description: "A hybrid relational-NoSQL database using SQL Server & Couchbase, designed with triggers, stored procedures, and scalable schema management.",
      technologies: ["SQL Server", "Couchbase", "Triggers", "Stored Procedures"],
      liveUrl: "",
      githubUrl: "https://github.com/ambadkar06/Music-Records-Database-Design",
    },
    {
      title: "Foodventeny",
      description: "A full-stack food ordering system designed for event-based food management, integrating React.js, Express.js, and MongoDB to provide seamless user interactions and order tracking.",
      technologies: ["SQL Server", "PHP", "JavaScript", "HTML", "CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/ambadkar06/Foodventeny",
    }
  ]

  const skills = [
    // Frontend
    { name: "React.js/Next.js", level: 90, category: "Frontend" },
    { name: "TypeScript/JavaScript", level: 92, category: "Frontend" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 88, category: "Frontend" },
    { name: "UI/UX Design", level: 85, category: "Frontend" },
    { name: "Web Audio API", level: 80, category: "Frontend" },
    
    // Backend
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Express.js", level: 85, category: "Backend" },
    { name: "Python", level: 82, category: "Backend" },
    { name: "FastAPI", level: 80, category: "Backend" },
    { name: "PHP", level: 75, category: "Backend" },
    { name: "RESTful APIs", level: 90, category: "Backend" },
    { name: "JWT Authentication", level: 85, category: "Backend" },
    
    // Database
    { name: "MongoDB", level: 88, category: "Database" },
    { name: "SQL Server", level: 85, category: "Database" },
    { name: "Prisma ORM", level: 82, category: "Database" },
    { name: "Couchbase", level: 75, category: "Database" },
    { name: "Database Design", level: 85, category: "Database" },
    { name: "Stored Procedures", level: 80, category: "Database" },
    
    // DevOps & Cloud
    { name: "Git/GitHub", level: 92, category: "DevOps" },
    { name: "Vercel/Render", level: 88, category: "DevOps" },
    { name: "CI/CD Pipelines", level: 85, category: "DevOps" },
    { name: "Azure DevOps", level: 80, category: "DevOps" },
    { name: "Docker", level: 75, category: "DevOps" },
    
    // AI & Data
    { name: "OpenAI Integration", level: 85, category: "AI & Data" },
    { name: "ETL Pipelines", level: 82, category: "AI & Data" },
    { name: "Data Visualization", level: 80, category: "AI & Data" },
    { name: "API Integration", level: 90, category: "AI & Data" },
    { name: "Redshift/Snowflake", level: 75, category: "AI & Data" }
  ]

  const experiences = [
    {
      title: "Software Engineer",
      company: "Kilwar LLC",
      period: "March 2025 - Present",
      description: "",
      achievements: [
        "Architected and deployed 17+ modular features enhancing delivery transparency and improving customer retention", 
        "Automated $50K+ in monthly transactions by integrating Stripe APIs and designing scalable MongoDB schemas", 
        "Executed 22+ REST API validations using Postman, Bitbucket, and JIRA",
        "Developing modular features using TypeScript across customer, driver, and admin portals for logistics platform.",
      ],
      skills: "TypeScript, React.js, Node.js, MongoDB, Stripe API, REST APIs, Postman, Bitbucket, JIRA, Agile"
    },
    {
      title: "Software Engineer",
      company: "Eventeny",
      period: "Aug 2024 - Feb 2025",
      description: "",
      achievements: [
        "Built a real-time event update system using PHP and JavaScript scaling to 8.7K+ concurrent users", 
        "Boosted dashboard load speed by 41% through SQL and MongoDB query optimization", 
        "Reduced release time by 47% by revamping Jenkins CI/CD pipelines",
        "Built real-time event systems and optimized backend performance for event management platform."
      ],
      skills: "PHP, JavaScript, Apache Kafka, Jenkins, RESTful APIs, SQL, MongoDB, OOP, CI/CD, Postman, JIRA"
    },
    {
      title: "Software Engineer Intern",
      company: "Volvo Group",
      period: "Jan 2024 - May 2024",
      description: "",
      achievements: [
        "Migrated 10+ legacy VBA reports to Python and integrated Azure Table Storage", 
        "Optimized SQL queries across MySQL and Oracle accelerating analytics for supply chain teams", 
        "Built modular Python scripts with pandas and pandasql to generate HTML-based summaries",
        "Migrated legacy systems and optimized data workflows for fleet management and analytics."
      ],
      skills: "Python, VBA Migration, SQL, REST APIs, ETL, Backend Development, Code Refactoring"
    },
    {
      title: "IT Intern",
      company: "Discount Tire",
      period: "May 2023 - Aug 2023",
      description: "",
      achievements: [
        "Automated CI/CD workflows using GitHub Actions and Azure DevOps reducing deployment time by 43%", 
        "Unified analytics across business units by integrating Python ETL pipelines with Redshift and Snowflake", 
        "Built 5+ microservices in Java and Python to support Pit Pass scheduling and real-time TPMS sensor tracking",
        "Automated deployment workflows and built microservices for in-store systems."
      ],
      skills: "GitHub Actions, Azure DevOps, Python, Redshift, Snowflake, Java, Microservices"
    },
    {
      title: "Full Stack Engineer",
      company: "Verzeo",
      period: "July 2020 - June 2022",
      description: "",
      achievements: [
        "Modernized a legacy PHP monolith by building Node.js microservices and 32+ reusable React components", 
        "Deployed JWT-secured REST APIs that handled 50K+ daily frontend-backend requests", 
        "Built Python and SQL ETL pipelines reducing manual reporting effort by 76%",
        "Modernized legacy systems and built scalable components for educational platform."
      ],
      skills: "Node.js, PHP, React.js, REST APIs, JWT, Python, SQL, ETL pipelines"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SA
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize transition-colors hover:text-blue-400"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
              Welcome to My Portfolio! 🎉
            </h1>
            <p className="text-lg md:text-xl mb-4">
              Hi, I'm <span className="text-blue-400 font-semibold">Sakshi Ambadkar</span>, a passionate Software Engineer with a Master's in Information Technology from Arizona State University.
            </p>
            <p className="text-lg md:text-xl text-orange-400 min-h-[2rem]">
              {typedText}
              <span className="animate-pulse inline-block ml-1 w-1 h-6 bg-orange-400">|</span>
            </p>
          </div>

          <div className="mb-12">
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              My journey into tech started with <span className="text-yellow-400 font-semibold">curiosity</span>—breaking things apart just to 
              understand how they worked. From tinkering with <span className="text-green-400 font-semibold">electronics</span> and 
              <span className="text-blue-400 font-semibold"> coding small scripts</span> to developing 
              <span className="text-purple-400 font-semibold"> scalable applications</span>, I've been 
              fascinated by problem-solving and innovation. Today, I build <span className="text-red-400 font-semibold">robust</span> and 
              <span className="text-cyan-400 font-semibold"> efficient</span> software solutions, merging creativity with logic.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              <Code className="mr-2" size={20} />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg"
              onClick={() => setIsContactModalOpen(true)}
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ambadkar06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/sakshi-ambadkar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin size={32} />
            </a>
            <a href="mailto:sakshiambadkar@gmail.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Mail size={32} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-8">
                <div className="w-64 h-64 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center text-6xl">
                  👩‍💻
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Software Engineer with over 3 years of experience in building scalable web applications, 
                microservices, and AI-powered tools. I've contributed to both startups and enterprise teams, modernizing legacy systems, 
                automating CI/CD pipelines, and developing real-time data workflows that process over 1M records daily.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical writing and mentoring.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">30+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">

                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-900/50 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Code className="mr-3 text-blue-400" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item" data-category={skill.category}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Wrench className="mr-3 text-orange-400" />
                Categories
              </h3>
              <div className="flex flex-col space-y-4">
                {['Frontend', 'Backend', 'Database', 'DevOps', 'AI & Data'].map((category, index) => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  return (
                    <Card 
                      key={index} 
                      className="bg-slate-800/50 border-slate-700 p-6 text-center hover:border-blue-500 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => {
                        // Find the first skill of this category
                        const skillItems = document.querySelectorAll('.skill-item');
                        let firstMatchingSkill = null;
                        
                        skillItems.forEach(item => {
                          if (item.getAttribute('data-category') === category) {
                            item.classList.add('highlight-skill');
                            if (!firstMatchingSkill) {
                              firstMatchingSkill = item;
                            }
                          } else {
                            item.classList.add('dim-skill');
                          }
                        });
                        
                        // Scroll to the first skill of this category
                        if (firstMatchingSkill) {
                          firstMatchingSkill.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center'
                          });
                        }
                      }}
                      onMouseLeave={() => {
                        document.querySelectorAll('.skill-item').forEach(item => {
                          item.classList.remove('highlight-skill');
                          item.classList.remove('dim-skill');
                        });
                      }}
                    >
                      <div className="text-3xl mb-2">
                        {category === 'Frontend' && <Palette className="mx-auto text-blue-400" />}
                        {category === 'Backend' && <Code className="mx-auto text-green-400" />}
                        {category === 'Database' && <Database className="mx-auto text-purple-400" />}
                        {category === 'DevOps' && <Wrench className="mx-auto text-orange-400" />}
                        {category === 'AI & Data' && <div className="mx-auto text-pink-400 text-3xl">🧠</div>}
                      </div>
                      <h4 className="text-white font-semibold">{category}</h4>
                      <p className="text-gray-400 text-sm mt-2">
                        {categorySkills.length} skills
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .highlight-skill {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
        }
        
        .dim-skill {
          opacity: 0.4;
          filter: grayscale(0.7);
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="relative">
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                <div className={`bg-slate-800/50 border border-slate-700 rounded-lg p-6`}>
                  
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 text-gray-400" size={16} />
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-blue-400 font-medium mb-3">{exp.company}</h4>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors cursor-pointer" onClick={() => window.location.href = 'mailto:sakshiambadkar6@gmail.com'}>
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">sakshiambadkar6@gmail.com</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <MapPin className="mx-auto mb-4 text-green-400" size={32} />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Available within USA</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors cursor-pointer" onClick={() => window.open('https://github.com/ambadkar06', '_blank')}>
              <Github className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">ambadkar06</p>
            </Card>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-lg"
            onClick={() => setIsContactModalOpen(true)}
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => {
                setIsContactModalOpen(false);
                // Reset form status when closing the modal
                setFormStatus({
                  message: '',
                  isError: false,
                  isSubmitting: false
                });
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Mail className="mr-2 text-blue-400" /> Get In Touch
            </h3>
            
            <form onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus({...formStatus, isSubmitting: true});
                
                // Simple validation
                if (!contactForm.name || !contactForm.email || !contactForm.message) {
                  setFormStatus({
                    message: 'Please fill out all required fields',
                    isError: true,
                    isSubmitting: false
                  });
                  return;
                }
                
                try {
                  // Using EmailJS service - this is a client-side email sending service
                  const templateParams = {
                    from_name: contactForm.name,
                    from_email: contactForm.email,
                    to_name: 'Sakshi',
                    message: `Email: ${contactForm.email}\n\n${contactForm.message}`,
                    subject: contactForm.subject || 'Portfolio Contact Form',
                  };
                  
                  // Send email using EmailJS
                  const response = await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_3b1sese', // Your EmailJS service ID
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_uhnvgo3', // Your EmailJS template ID
                    templateParams
                  );
                  
                  if (response.status === 200) {
                    // Show success message
                    setFormStatus({
                      message: 'Thank you for your message! I will get back to you soon.',
                      isError: false,
                      isSubmitting: false
                    });
                    
                    // Reset form
                    setContactForm({
                      name: '',
                      email: '',
                      message: ''
                    });
                  } else {
                    throw new Error('Failed to send email');
                  }
                } catch (error) {
                  console.error('Error:', error);
                  setFormStatus({
                    message: 'There was an error sending your message. Please try again later.',
                    isError: true,
                    isSubmitting: false
                  });
                }
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message *</label>
                  <textarea 
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                
                {formStatus.message && (
                  <div className={`p-3 rounded-md ${formStatus.isError ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2" size={16} />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2024 Sakshi Ambadkar. Built with React and lots of &hearts;
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
