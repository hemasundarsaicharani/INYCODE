import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Star, Clock, Users, ArrowRight } from "lucide-react";
import "./Courses.css";

// Course images from assets/course
import imgReact from "../../assets/course/react.jpg";
import imgWebDev from "../../assets/course/Web dev.jpg";
import imgPython from "../../assets/course/Python.jpg";
import imgJava from "../../assets/course/java.jpg";
import imgAI from "../../assets/course/AI.jpg";
import imgDataScience from "../../assets/course/Data  science.jpg";
import imgCloud from "../../assets/course/cloud.jpg";
import imgUIUX from "../../assets/course/UI & UX.jpg";

const CATEGORIES = ["All", "Web Dev", "Python", "Java", "AI & Data", "Cybersecurity", "Cloud"];

const statusColors = {
  "BEST SELLER": { bg: "rgba(249, 115, 22, 0.12)", color: "#f97316" },
  "TRENDING":    { bg: "rgba(16, 185, 129, 0.12)", color: "#10b981" },
  "POPULAR":     { bg: "rgba(99, 102, 241, 0.12)", color: "#6366f1" },
  "HOT":         { bg: "rgba(220, 38, 38, 0.12)",  color: "#dc2626" },
  "NEW":         { bg: "rgba(14, 165, 233, 0.12)", color: "#0ea5e9" },
  "ADVANCED":    { bg: "rgba(139, 92, 246, 0.12)", color: "#8b5cf6" },
  "PRO":         { bg: "rgba(13, 148, 136, 0.12)", color: "#0d9488" },
  "OFFICIAL":    { bg: "rgba(251, 191, 36, 0.12)", color: "#fbbf24" },
  "ENTERPRISE":  { bg: "rgba(221, 0, 49, 0.12)",   color: "#dd0031" },
  "MODERN":      { bg: "rgba(14, 165, 233, 0.12)", color: "#0ea5e9" },
  "MOBILE":      { bg: "rgba(2, 86, 155, 0.12)",   color: "#02569b" },
  "COMPLETE":    { bg: "rgba(55, 118, 171, 0.12)", color: "#3776ab" },
  "FOUNDATION":  { bg: "rgba(79, 70, 229, 0.12)",  color: "#4f46e5" },
  "PLACEMENT":   { bg: "rgba(248, 152, 29, 0.12)", color: "#f8981d" },
  "ESSENTIAL":   { bg: "rgba(99, 102, 241, 0.12)", color: "#6366f1" },
  "FUTURE":      { bg: "rgba(245, 158, 11, 0.12)", color: "#f59e0b" },
  "CREATIVE":    { bg: "rgba(139, 92, 246, 0.12)", color: "#8b5cf6" },
  "EFFICIENT":   { bg: "rgba(16, 185, 129, 0.12)", color: "#10b981" },
  "SUCCESS":     { bg: "rgba(244, 63, 94, 0.12)",  color: "#f43f5e" },
};

const ALL_COURSES = [
  {
    image: imgReact,
    title: "React JS Full Stack Development",
    category: "Web Dev",
    badge: "BEST SELLER",
    color: "#38bdf8",
    rating: 4.9,
    students: "18k",
    duration: "6 months",
    level: "Beginner",
    price: "₹14,999"
  },
  {
    image: imgPython,
    title: "Python Programming Masterclass",
    category: "Python",
    badge: "TRENDING",
    color: "#10b981",
    rating: 4.8,
    students: "22k",
    duration: "4 months",
    level: "All Levels",
    price: "₹9,999"
  },
  {
    image: imgJava,
    title: "Java Full Stack Development",
    category: "Java",
    badge: "POPULAR",
    color: "#818cf8",
    rating: 4.9,
    students: "15k",
    duration: "5 months",
    level: "Intermediate",
    price: "₹12,499"
  },
  {
    image: imgDataScience,
    title: "Data Science & AI",
    category: "AI & Data",
    badge: "HOT",
    color: "#f59e0b",
    rating: 5.0,
    students: "9k",
    duration: "6 months",
    level: "Intermediate",
    price: "₹19,999"
  },
  {
    image: imgWebDev,
    title: "MERN Stack Development",
    category: "Web Dev",
    badge: "NEW",
    color: "#0ea5e9",
    rating: 4.7,
    students: "11k",
    duration: "5 months",
    level: "Beginner",
    price: "₹15,499"
  },
  {
    image: imgAI,
    title: "Machine Learning Deep Dive",
    category: "AI & Data",
    badge: "ADVANCED",
    color: "#8b5cf6",
    rating: 4.8,
    students: "7k",
    duration: "6 months",
    level: "Advanced",
    price: "₹18,999"
  },
  {
    image: imgUIUX,
    title: "Ethical Hacking & Cyber Security",
    category: "Cybersecurity",
    badge: "PRO",
    color: "#0d9488",
    rating: 4.9,
    students: "5k",
    duration: "4 months",
    level: "Intermediate",
    price: "₹13,999"
  },
  {
    image: imgCloud,
    title: "AWS Cloud Practitioner",
    category: "Cloud",
    badge: "OFFICIAL",
    color: "#fbbf24",
    rating: 4.8,
    students: "12k",
    duration: "3 months",
    level: "Beginner",
    price: "₹11,999"
  },
  {
    image: imgWebDev,
    title: "Angular Enterprise Development",
    category: "Web Dev",
    badge: "ENTERPRISE",
    color: "#dd0031",
    rating: 4.7,
    students: "8k",
    duration: "6 months",
    level: "Intermediate",
    price: "₹12,999"
  },
  {
    image: imgWebDev,
    title: "Next.js 14 Masterclass",
    category: "Web Dev",
    badge: "MODERN",
    color: "#0ea5e9",
    rating: 4.9,
    students: "14k",
    duration: "4 months",
    level: "Advanced",
    price: "₹14,999"
  },
  {
    image: imgWebDev,
    title: "Flutter Mobile Apps",
    category: "Web Dev",
    badge: "MOBILE",
    color: "#02569b",
    rating: 4.8,
    students: "10k",
    duration: "5 months",
    level: "Beginner",
    price: "₹11,999"
  },
  {
    image: imgPython,
    title: "Full Stack Python Pro",
    category: "Python",
    badge: "COMPLETE",
    color: "#3776ab",
    rating: 4.9,
    students: "16k",
    duration: "6 months",
    level: "Beginner",
    price: "₹15,999"
  },
  {
    image: imgPython,
    title: "DSA with Python",
    category: "Python",
    badge: "FOUNDATION",
    color: "#4f46e5",
    rating: 4.7,
    students: "20k",
    duration: "4 months",
    level: "Intermediate",
    price: "₹8,999"
  },
  {
    image: imgJava,
    title: "Java DSA Implementation",
    category: "Java",
    badge: "PLACEMENT",
    color: "#f8981d",
    rating: 4.9,
    students: "18k",
    duration: "5 months",
    level: "Intermediate",
    price: "₹9,499"
  },
  {
    image: imgJava,
    title: "Advanced Data Structures",
    category: "Java",
    badge: "ESSENTIAL",
    color: "#6366f1",
    rating: 4.8,
    students: "12k",
    duration: "4 months",
    level: "Advanced",
    price: "₹7,999"
  },
  {
    image: imgAI,
    title: "Agentic AI Systems",
    category: "AI & Data",
    badge: "FUTURE",
    color: "#f59e0b",
    rating: 5.0,
    students: "4k",
    duration: "3 months",
    level: "Advanced",
    price: "₹21,999"
  },
  {
    image: imgAI,
    title: "Generative AI Mastery",
    category: "AI & Data",
    badge: "CREATIVE",
    color: "#8b5cf6",
    rating: 4.9,
    students: "6k",
    duration: "4 months",
    level: "Intermediate",
    price: "₹19,999"
  },
  {
    image: imgAI,
    title: "AI Business Automations",
    category: "AI & Data",
    badge: "EFFICIENT",
    color: "#10b981",
    rating: 4.8,
    students: "5k",
    duration: "3 months",
    level: "Intermediate",
    price: "₹12,499"
  },
  {
    image: imgDataScience,
    title: "Interview Prep Bootcamp",
    category: "AI & Data",
    badge: "SUCCESS",
    color: "#f43f5e",
    rating: 5.0,
    students: "25k",
    duration: "2 months",
    level: "All Levels",
    price: "₹4,999"
  }
];

const CoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = ALL_COURSES.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || course.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="courses-page-modern">
            {/* Header with Search */}
            <div className="courses-hero">
                <div className="hero-blobs">
                    <div className="blob blob-1" style={{ width: 500, height: 500, top: "-10%", left: "-5%" }} />
                    <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "-10%", right: "-5%" }} />
                </div>
                
                <div className="container-custom">
                    <motion.div 
                        className="courses-hero-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-badge">🎯 &nbsp;Explore Catalog</div>
                        <h1 className="section-title">Master New <span className="gradient-text">Tech Skills</span></h1>
                        <p className="section-subtitle">
                            Browse our comprehensive collection of professional courses designed for your career growth.
                        </p>

                        <div className="search-container card glass">
                            <Search className="search-icon" size={20} />
                            <input 
                                type="text" 
                                placeholder="Search for courses (e.g. React, Python...)" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="search-divider" />
                            <div className="filter-dropdown">
                                <Filter size={18} />
                                <span>Filter</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container-custom">
                {/* Categories Bar */}
                <div className="categories-bar-wrap">
                    <div className="categories-scroll">
                        {CATEGORIES.map(cat => (
                            <button 
                                key={cat}
                                className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="catalog-grid">
                    {filtered.length > 0 ? (
                        filtered.map((course, i) => {
                            const sc = statusColors[course.badge] || statusColors["NEW"];
                            return (
                                <motion.div 
                                    key={course.title}
                                    className="course-card-modern card glass"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    whileHover={{ y: -10 }}
                                >
                                    {/* Image Banner */}
                                    <div className="card-img-banner">
                                        <img src={course.image} alt={course.title} />
                                        <span className="card-category-tag">{course.category}</span>
                                    </div>

                                    <div className="card-content-modern">
                                        {/* Status Pill */}
                                        <div className="card-status-row">
                                            <span className="card-status-pill" style={{ background: sc.bg, color: sc.color }}>
                                                {course.badge}
                                            </span>
                                        </div>

                                        <h3 className="card-title-modern">{course.title}</h3>
                                        
                                        {/* Stats Row */}
                                        <div className="card-stats-modern">
                                            <div className="stat">
                                                <Users size={14} />
                                                <span>{course.students}</span>
                                            </div>
                                            <div className="stat">
                                                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                                                <span>{course.rating}</span>
                                            </div>
                                            <div className="stat">
                                                <Clock size={14} />
                                                <span>{course.duration}</span>
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="card-footer-modern">
                                            <div className="price-tag">{course.price}</div>
                                            <button className="btn-primary mini">
                                                <span>Enroll</span>
                                                <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })
                    ) : (
                        <div className="no-results">
                            <h3>No courses found matching your search.</h3>
                            <p>Try searching for something else or browse categories.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;