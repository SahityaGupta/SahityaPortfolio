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
    <div className="min-h-screen bg-black text-white font-sans">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#141414]" : "bg-gradient-to-b from-black/90 via-black/70 to-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-12">
            <h1 className="text-netflix-red text-2xl md:text-4xl font-black tracking-tight hover:scale-105 transition-transform cursor-pointer">
              SG
            </h1>
            <div className="hidden lg:flex gap-6 text-sm font-medium">
              <a
                href="#about"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer font-semibold"
              >
                About
              </a>
              <a
                href="#experience"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer font-semibold"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer font-semibold"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer font-semibold"
              >
                Skills
              </a>
            </div>
          </div>
          <div className="flex gap-2 md:gap-3">
            <a href="mailto:Sahitya.gupta03@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10 hover:text-netflix-red transition-all h-9 w-9 md:h-10 md:w-10"
              >
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/sahitya-gupta" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10 hover:text-netflix-red transition-all h-9 w-9 md:h-10 md:w-10"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </a>
            <a href="https://github.com/SahityaGupta" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10 hover:text-netflix-red transition-all h-9 w-9 md:h-10 md:w-10"
              >
                <Github className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-cloud-computing-infrastructure-servers-di.jpg')] bg-cover bg-center opacity-40 scale-110 animate-slow-zoom" />
        </div>
        <div className="container mx-auto px-4 md:px-8 z-20 max-w-6xl py-12 md:py-0">
          <div className="space-y-4 md:space-y-8 animate-fade-in-up">
            <Badge className="bg-netflix-red text-white hover:bg-netflix-red px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-bold shadow-2xl border-0 inline-block">
              FULL-STACK SOFTWARE ENGINEER
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-none tracking-tighter text-balance drop-shadow-2xl">
              SAHITYA
              <br />
              GUPTA
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-100 max-w-3xl leading-relaxed text-pretty font-normal">
              Building scalable cloud infrastructure and backend systems serving{" "}
              <span className="text-white font-bold">1M+ users</span>. Delivered{" "}
              <span className="text-white font-bold">$120K+ cost savings</span> and{" "}
              <span className="text-white font-bold">zero-downtime migrations</span>.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-5 pt-4 md:pt-6">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-200 text-black gap-2 px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold rounded shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="h-5 w-5 md:h-6 md:w-6" fill="black" />
                View Projects
              </Button>
              <Button
                size="lg"
                className="bg-gray-600/40 hover:bg-gray-600/60 backdrop-blur-sm text-white gap-2 px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold rounded transition-all w-full sm:w-auto"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Info className="h-5 w-5 md:h-6 md:w-6" />
                More Info
              </Button>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-8 pt-6 md:pt-8">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "$110K+", label: "Cost Savings" },
                { value: "1M+", label: "Users" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-3xl md:text-4xl font-black text-white">{stat.value}</span>
                  <span className="text-xs md:text-sm text-gray-300 font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      <section id="experience" className="py-12 md:py-20 px-4 md:px-8 bg-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Professional Experience</h2>
            <div className="hidden md:flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(experienceRef, "left")}
                className="hover:bg-white/20 bg-black/50 border-2 border-white/30 hover:border-white/60 transition-all h-12 w-12"
              >
                <ChevronLeft className="h-7 w-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(experienceRef, "right")}
                className="hover:bg-white/20 bg-black/50 border-2 border-white/30 hover:border-white/60 transition-all h-12 w-12"
              >
                <ChevronRight className="h-7 w-7" />
              </Button>
            </div>
          </div>
          <div
            ref={experienceRef}
            className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[420px] bg-[#181818] border-0 hover:bg-[#2a2a2a] hover:scale-105 hover:shadow-[0_0_40px_rgba(229,9,20,0.3)] transition-all duration-300 cursor-pointer group snap-center overflow-hidden"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="p-6 md:p-8 space-y-4 md:space-y-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/0 group-hover:from-netflix-red/5 to-transparent transition-all duration-300" />
                  <div className="space-y-2 md:space-y-3 relative z-10">
                    <Badge className="bg-netflix-red text-white border-0 px-3 py-1 text-xs font-bold">
                      {exp.company}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-netflix-red transition-colors leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-semibold">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                  <ul className="space-y-2 md:space-y-3 relative z-10">
                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-300 flex gap-2 md:gap-3 leading-relaxed">
                        <span className="text-netflix-red text-base md:text-lg font-bold">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-netflix-red font-bold opacity-0 group-hover:opacity-100 transition-opacity relative z-10 pt-2">
                    <span>Click for Details</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-12 md:py-20 px-4 md:px-8 bg-[#0a0a0a]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Featured Projects</h2>
            <div className="hidden md:flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(projectsRef, "left")}
                className="hover:bg-white/20 bg-black/50 border-2 border-white/30 hover:border-white/60 transition-all h-12 w-12"
              >
                <ChevronLeft className="h-7 w-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(projectsRef, "right")}
                className="hover:bg-white/20 bg-black/50 border-2 border-white/30 hover:border-white/60 transition-all h-12 w-12"
              >
                <ChevronRight className="h-7 w-7" />
              </Button>
            </div>
          </div>
          <div
            ref={projectsRef}
            className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[340px] lg:w-[380px] bg-[#181818] border-0 hover:scale-110 hover:shadow-[0_0_50px_rgba(229,9,20,0.4)] hover:z-10 transition-all duration-300 cursor-pointer group overflow-hidden snap-center"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-black relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <Badge className="absolute top-3 left-3 md:top-4 md:left-4 bg-netflix-red text-white border-0 px-2 py-1 md:px-3 md:py-1 text-xs font-bold shadow-lg">
                    {project.category}
                  </Badge>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/70">
                    <div className="rounded-full border-3 border-white p-3 md:p-4 hover:bg-white/20 transition-colors">
                      <Play className="h-8 w-8 md:h-10 md:w-10 text-white" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6 space-y-3 md:space-y-4 bg-[#181818] group-hover:bg-[#2a2a2a] transition-colors">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-netflix-red transition-colors leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2 py-2 px-3 bg-black/40 rounded border border-netflix-red/30">
                    <span className="text-xs font-black text-netflix-red uppercase tracking-wide">KEY IMPACT</span>
                    <span className="text-xs font-bold text-white">{project.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 md:py-20 px-4 md:px-8 bg-black">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-[#181818] border-0 hover:bg-[#2a2a2a] hover:scale-105 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] transition-all duration-300 group overflow-hidden"
              >
                <div className="p-5 md:p-6 space-y-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/0 group-hover:from-netflix-red/5 to-transparent transition-all duration-300" />
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-netflix-red transition-colors mb-4">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          className="bg-[#2a2a2a] hover:bg-netflix-red/90 text-white border border-white/10 hover:border-netflix-red transition-all px-3 py-1 text-xs font-semibold cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-start md:items-center justify-center p-0 md:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#181818] w-full md:max-w-4xl md:rounded-lg overflow-hidden shadow-2xl animate-scale-in min-h-screen md:min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-video bg-black relative overflow-hidden">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/80 hover:bg-black rounded-full p-2 md:p-3 hover:scale-110 transition-all z-10"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <Badge className="bg-netflix-red text-white border-0 px-3 py-1 text-xs md:text-sm font-bold mb-3 md:mb-4">
                    {selectedProject.category}
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-base md:text-xl text-gray-300 font-semibold max-w-3xl">{selectedProject.brief}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 py-3 md:py-4 px-4 md:px-6 bg-gradient-to-r from-green-900/40 to-transparent border-l-4 border-green-500 rounded">
                <span className="text-xs md:text-sm font-black text-green-400 uppercase tracking-wider">
                  KEY IMPACT
                </span>
                <span className="text-lg md:text-2xl font-black text-white">{selectedProject.impact}</span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="w-1 h-6 bg-netflix-red" />
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {selectedProject.tech.map((tech, idx) => (
                    <Badge
                      key={idx}
                      className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white border border-white/20 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-bold"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="w-1 h-6 bg-netflix-red" />
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                    Architecture Highlights
                  </h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 md:gap-4 items-start group">
                      <span className="text-netflix-red text-xl md:text-2xl font-bold mt-1">•</span>
                      <span className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedExperience && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-start md:items-center justify-center p-0 md:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="bg-[#181818] w-full md:max-w-4xl md:rounded-lg overflow-hidden shadow-2xl animate-scale-in min-h-screen md:min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 md:p-10">
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/80 hover:bg-black rounded-full p-2 md:p-3 hover:scale-110 transition-all z-10"
              >
                <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </button>
              <Badge className="bg-netflix-red text-white border-0 px-3 py-1 text-xs md:text-sm font-bold mb-4">
                {selectedExperience.company}
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4 leading-tight">
                {selectedExperience.title}
              </h2>
              <p className="text-base md:text-lg text-gray-400 font-bold">
                {selectedExperience.period} • {selectedExperience.location}
              </p>
              <p className="text-base md:text-xl text-gray-300 mt-4 md:mt-6 leading-relaxed">
                {selectedExperience.brief}
              </p>
            </div>

            <div className="p-6 md:p-10 space-y-6 md:space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="w-1 h-6 bg-netflix-red" />
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">Key Achievements</h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {selectedExperience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 md:gap-4 items-start group">
                      <span className="text-netflix-red text-xl md:text-2xl font-bold mt-1">•</span>
                      <span className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="w-1 h-6 bg-netflix-red" />
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {selectedExperience.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white border border-white/20 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-bold"
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
