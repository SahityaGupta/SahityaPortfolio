"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, Info, Mail, Linkedin, Github, X } from "lucide-react"

type ProjectDetails = {
  title: string
  category: string
  brief: string
  impact: string
  description: string
  tech: string[]
  highlights: string[]
  image: string
}

type ExperienceDetails = {
  title: string
  company: string
  period: string
  location: string
  brief: string
  achievements: string[]
  skills: string[]
}

export default function NetflixPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)
  const [selectedExperience, setSelectedExperience] = useState<ExperienceDetails | null>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (selectedProject || selectedExperience) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject, selectedExperience])

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const experiences = [
    {
      title: "Software Developer 2",
      company: "ElectricPe",
      period: "October 2025 – Present",
      location: "Bengaluru",
      brief: "Leading cloud infrastructure transformation and backend architecture.",
      achievements: [
        "Architected complete GCP-to-AWS EKS migration with zero downtime",
        "Achieved $110K+ annual cost savings through cloud optimization",
        "Implemented AWS STS security measures preventing $22K breach",
        "Developed Redis-backed inventory systems reducing costs by 70%",
      ],
      skills: ["AWS EKS", "Kubernetes", "Docker", "Redis", "DynamoDB", "Terraform", "Security"],
    },
    {
      title: "Software Developer",
      company: "ElectricPe",
      period: "June 2023 – October 2025",
      location: "Bengaluru",
      brief: "Built scalable backend systems serving millions of users.",
      achievements: [
        "Built referral platform scaling to 1M+ users",
        "Handled 300+ location pings/second with 99.9% accuracy",
        "Deployed containerized microservices serving 6,500+ users",
        "Launched EV Trip Planner with 1K+ daily active users",
      ],
      skills: ["Spring Boot", "Java", "Microservices", "WebSockets", "MySQL", "Apache Solr"],
    },
    {
      title: "Software Development Intern",
      company: "ElectricPe",
      period: "December 2022 – June 2023",
      location: "Bengaluru",
      brief: "Developed backend APIs and mobile features for EV charging platform.",
      achievements: [
        "Developed backend REST APIs for EV charging platform",
        "Built mobile features using Java, Kotlin, and Flutter",
        "Collaborated on production deployments and system design",
      ],
      skills: ["Java", "Kotlin", "Flutter", "REST APIs", "MySQL"],
    },
  ]

  const projects = [
    {
      title: "Cloud Migration Engine",
      category: "System",
      brief: "Zero-downtime migration of critical infrastructure from GCP to AWS EKS.",
      description: "Zero-downtime GCP-to-AWS migration with complete infrastructure redesign",
      impact: "$110K+ Annual Savings",
      tech: ["AWS EKS", "Kubernetes", "Docker", "Terraform", "Redis", "DynamoDB"],
      highlights: [
        "Built with scalability in mind using microservices patterns.",
        "Optimized for high-throughput and low-latency response times.",
        "Deployed via automated CI/CD pipelines.",
      ],
      image: "/cloud-migration-servers-infrastructure-aws-kuberne.jpg",
    },
    {
      title: "Real-time Location Tracker",
      category: "Backend",
      brief: "High-frequency tracking system processing 300+ location pings per second.",
      description: "High-frequency tracking system processing 300+ pings per second",
      impact: "99.9% Accuracy",
      tech: ["Java", "WebSockets", "Redis", "Microservices", "Spring Boot"],
      highlights: [
        "Real-time bidirectional communication using WebSockets.",
        "Redis caching layer for sub-millisecond response times.",
        "Horizontally scalable microservices architecture.",
      ],
      image: "/real-time-location-tracking-map-gps-technology.jpg",
    },
    {
      title: "Viral Referral Platform",
      category: "Backend",
      brief: "Community platform with viral growth mechanics reaching 1M+ users.",
      description: "Community platform with viral growth mechanics",
      impact: "1M+ Users, 90K+ Referrals",
      tech: ["Spring Boot", "BranchIO", "WhatsApp API", "MySQL", "Java"],
      highlights: [
        "Integrated BranchIO deep linking for seamless user acquisition.",
        "WhatsApp Business API for automated messaging campaigns.",
        "MySQL database optimized for high-read workloads.",
      ],
      image: "/social-network-community-referral-mobile-app.jpg",
    },
    {
      title: "EV Trip Planner",
      category: "Mobile",
      brief: "Intelligent route planning with charging station mapping for electric vehicles.",
      description: "Intelligent route planning with charging station mapping",
      impact: "1K+ Daily Users",
      tech: ["Google Maps API", "Apache Solr", "Kotlin", "Flutter", "Spring Boot"],
      highlights: [
        "Google Maps integration for real-time route optimization.",
        "Apache Solr for fast geospatial search capabilities.",
        "Cross-platform mobile app built with Flutter.",
      ],
      image: "/electric-vehicle-ev-charging-station-map-route-pla.jpg",
    },
    {
      title: "Subscription Management System",
      category: "Backend",
      brief: "6-tier EV subscription model with automated billing and user management.",
      description: "6-tier EV subscription model with automated billing",
      impact: "6,500+ Active Subscribers",
      tech: ["Microservices", "Kubernetes", "DynamoDB", "AWS Lambda", "Node.js"],
      highlights: [
        "Serverless architecture using AWS Lambda for cost efficiency.",
        "DynamoDB for scalable NoSQL data storage.",
        "Event-driven billing automation.",
      ],
      image: "/subscription-pricing-tiers-payment-billing-dashboa.jpg",
    },
  ]

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Kotlin", "Python", "Dart", "SQL", "C++", "PHP"],
    },
    {
      category: "Backend & Frameworks",
      skills: ["Spring Boot", "Microservices", "REST APIs", "OCPP Protocol", "WebSockets"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "EKS", "Lambda", "EC2", "CI/CD"],
    },
    {
      category: "Databases & Caching",
      skills: ["DynamoDB", "Redis", "Apache Solr", "MySQL", "PostgreSQL"],
    },
    {
      category: "Tools & Integration",
      skills: ["Git", "Mosquitto", "Pub/Sub", "Google Maps", "BranchIO", "Grafana", "Zipkin"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-sm shadow-lg"
            : "bg-gradient-to-b from-black via-black/60 to-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <h1 className="text-netflix-red text-4xl font-black tracking-tight hover:scale-105 transition-transform cursor-pointer">
              SG
            </h1>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-gray-300 transition-colors duration-200">
                About
              </a>
              <a href="#experience" className="hover:text-gray-300 transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="hover:text-gray-300 transition-colors duration-200">
                Projects
              </a>
              <a href="#skills" className="hover:text-gray-300 transition-colors duration-200">
                Skills
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="mailto:Sahitya.gupta03@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 hover:text-netflix-red transition-all">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/sahitya-gupta" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 hover:text-netflix-red transition-all">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://github.com/SahityaGupta" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 hover:text-netflix-red transition-all">
                <Github className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-cloud-computing-infrastructure-servers-di.jpg')] bg-cover bg-center opacity-30 scale-110" />
        </div>
        <div className="container mx-auto px-6 z-20 max-w-5xl">
          <div className="space-y-8 animate-fade-in-up">
            <Badge className="bg-netflix-red/90 text-white hover:bg-netflix-red px-4 py-1.5 text-sm font-semibold shadow-xl border-0">
              Full-Stack Software Engineer
            </Badge>
            <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter text-balance drop-shadow-2xl">
              SAHITYA GUPTA
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed text-pretty font-light">
              Building scalable cloud infrastructure and backend systems serving 1M+ users. Delivered $120K+ cost
              savings and zero-downtime migrations.
            </p>
            <div className="flex flex-wrap gap-5 pt-6">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-200 text-black gap-2 px-8 py-6 text-base font-bold rounded-md shadow-2xl hover:scale-105 transition-all"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="h-6 w-6" fill="black" />
                View Projects
              </Button>
              <Button
                size="lg"
                className="bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-sm text-white gap-2 px-8 py-6 text-base font-semibold rounded-md border border-white/30 hover:border-white/60 transition-all"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Info className="h-6 w-6" />
                More Info
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 pt-8">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "$110K+", label: "Cost Savings" },
                { value: "1M+", label: "Users" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-4xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Professional Experience</h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(experienceRef, "left")}
                className="hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all rounded-full w-10 h-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(experienceRef, "right")}
                className="hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all rounded-full w-10 h-10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div
            ref={experienceRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[420px] bg-netflix-gray/80 backdrop-blur-sm border-0 hover:bg-netflix-gray hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group snap-center rounded-lg overflow-hidden"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="p-8 space-y-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/0 group-hover:from-netflix-red/10 to-transparent transition-all duration-300" />
                  <div className="space-y-3 relative z-10">
                    <Badge className="bg-netflix-red/20 text-netflix-red border border-netflix-red/30 px-3 py-1">
                      {exp.company}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white group-hover:text-netflix-red transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                  <ul className="space-y-3 relative z-10">
                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex gap-3 leading-relaxed">
                        <span className="text-netflix-red text-lg">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm text-netflix-red font-semibold opacity-0 group-hover:opacity-100 transition-opacity relative z-10 pt-2">
                    <span>View Full Details</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(projectsRef, "left")}
                className="hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all rounded-full w-10 h-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(projectsRef, "right")}
                className="hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all rounded-full w-10 h-10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div
            ref={projectsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[380px] bg-netflix-gray/80 backdrop-blur-sm border-0 hover:scale-110 hover:shadow-2xl hover:z-10 transition-all duration-300 cursor-pointer group overflow-hidden snap-center rounded-md"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-56 bg-black relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-netflix-red/90 text-white border-0 px-3 py-1 font-semibold">
                    {project.category}
                  </Badge>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                    <div className="rounded-full border-2 border-white p-4">
                      <Play className="h-10 w-10 text-white" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-netflix-gray/90 group-hover:bg-netflix-gray transition-colors">
                  <h3 className="text-2xl font-bold text-white group-hover:text-netflix-red transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2 py-2 px-3 bg-black/30 rounded-md border border-netflix-red/20">
                    <span className="text-xs text-netflix-red font-bold uppercase tracking-wide">Impact:</span>
                    <span className="text-sm text-white font-semibold">{project.impact}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-white/10 hover:bg-white/20 text-white border-0 text-xs transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(skillsRef, "left")}
                className="hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all rounded-full w-10 h-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(skillsRef, "right")}
                className="hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all rounded-full w-10 h-10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div
            ref={skillsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[340px] bg-netflix-gray/80 backdrop-blur-sm border-0 hover:bg-netflix-gray hover:scale-105 hover:shadow-2xl transition-all duration-300 snap-center rounded-lg"
              >
                <div className="p-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-netflix-red rounded-full" />
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="bg-white/10 hover:bg-netflix-red hover:scale-105 text-white border border-white/20 hover:border-netflix-red transition-all cursor-default text-xs px-3 py-1.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-3">
              <h3 className="text-3xl font-bold text-netflix-red">SAHITYA GUPTA</h3>
              <p className="text-gray-400 text-sm max-w-md">
                Full-Stack Software Engineer specializing in cloud infrastructure and scalable backend systems.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-3">
                <a href="mailto:Sahitya.gupta03@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    className="bg-white/10 hover:bg-netflix-red hover:scale-110 transition-all border-0"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://linkedin.com/in/sahitya-gupta" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    className="bg-white/10 hover:bg-netflix-red hover:scale-110 transition-all border-0"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://github.com/SahityaGupta" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    className="bg-white/10 hover:bg-netflix-red hover:scale-110 transition-all border-0"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
              </div>
              <p className="text-gray-500 text-xs">© 2025 Sahitya Gupta. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-netflix-gray rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-netflix-gray via-netflix-gray/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full w-12 h-12 transition-all hover:scale-110"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-8 left-8 space-y-3">
                <Badge className="bg-netflix-red text-white border-0 px-4 py-1.5 font-semibold text-sm">
                  {selectedProject.category}
                </Badge>
                <h2 className="text-5xl font-black text-white leading-tight drop-shadow-2xl">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            <div className="p-10 space-y-8">
              {/* Project Brief */}
              <div className="flex items-start gap-8">
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-sm text-netflix-red font-bold uppercase tracking-wide mb-2">Project Brief</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{selectedProject.brief}</p>
                  </div>
                  <div className="bg-green-950/30 border-l-4 border-green-500 p-5 rounded-r-lg">
                    <p className="text-sm text-green-400 font-bold uppercase tracking-wide mb-1">Key Impact</p>
                    <p className="text-2xl font-bold text-white font-mono">{selectedProject.impact}</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-netflix-red rounded-full" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, idx) => (
                    <Badge
                      key={idx}
                      className="bg-white/10 hover:bg-netflix-red text-white border border-white/20 px-4 py-2 text-sm font-medium transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-netflix-red rounded-full" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Architecture Highlights</h3>
                </div>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-4 text-gray-300">
                      <span className="text-netflix-red text-xl font-bold">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience Modal */}
      {selectedExperience && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="bg-netflix-gray rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-br from-netflix-red/20 to-transparent p-10 border-b border-white/10">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full w-12 h-12 transition-all hover:scale-110"
                onClick={() => setSelectedExperience(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="space-y-4">
                <Badge className="bg-netflix-red text-white border-0 px-4 py-1.5 font-semibold">
                  {selectedExperience.company}
                </Badge>
                <h2 className="text-5xl font-black text-white leading-tight">{selectedExperience.title}</h2>
                <p className="text-lg text-gray-300 font-medium">
                  {selectedExperience.period} • {selectedExperience.location}
                </p>
              </div>
            </div>

            <div className="p-10 space-y-8">
              {/* Brief */}
              <div>
                <h3 className="text-sm text-netflix-red font-bold uppercase tracking-wide mb-3">Overview</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{selectedExperience.brief}</p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-netflix-red rounded-full" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Key Achievements</h3>
                </div>
                <ul className="space-y-4">
                  {selectedExperience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-4 text-gray-300 bg-black/20 p-4 rounded-lg border border-white/5">
                      <span className="text-netflix-red text-2xl font-bold flex-shrink-0">•</span>
                      <span className="leading-relaxed text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-netflix-red rounded-full" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {selectedExperience.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-white/10 hover:bg-netflix-red text-white border border-white/20 px-4 py-2 text-sm font-medium transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
