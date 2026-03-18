import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Clock, Users } from "lucide-react";
import "./Courses.css";

// Course images from assets/course
import imgReact from "../../assets/course/react.jpg";
import imgWebDev from "../../assets/course/Web dev.jpg";
import imgPython from "../../assets/course/Python.jpg";
import imgJava from "../../assets/course/java.jpg";
import imgAI from "../../assets/course/AI.jpg";
import imgDataScience from "../../assets/course/Data  science.jpg";

const CATEGORIES = ["All", "Web Dev", "Python", "Java", "AI & Data"];

const statusColors = {
  "BEST SELLER": { bg: "rgba(249, 115, 22, 0.12)", color: "#f97316" },
  "TRENDING":    { bg: "rgba(16, 185, 129, 0.12)", color: "#10b981" },
  "POPULAR":     { bg: "rgba(99, 102, 241, 0.12)", color: "#6366f1" },
  "HOT":         { bg: "rgba(220, 38, 38, 0.12)",  color: "#dc2626" },
  "NEW":         { bg: "rgba(14, 165, 233, 0.12)", color: "#0ea5e9" },
  "ADVANCED":    { bg: "rgba(139, 92, 246, 0.12)", color: "#8b5cf6" },
  "ENTERPRISE":  { bg: "rgba(221, 0, 49, 0.12)",   color: "#dd0031" },
  "MODERN":      { bg: "rgba(14, 165, 233, 0.12)", color: "#0ea5e9" },
  "MOBILE":      { bg: "rgba(2, 86, 155, 0.12)",   color: "#02569b" },
  "FUTURE":      { bg: "rgba(245, 158, 11, 0.12)", color: "#f59e0b" },
  "SUCCESS":     { bg: "rgba(244, 63, 94, 0.12)",  color: "#f43f5e" },
};

const courses = [
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
  },
  {
    image: imgAI,
    title: "Machine Learning & Deep Learning",
    category: "AI & Data",
    badge: "ADVANCED",
    color: "#8b5cf6",
    rating: 4.8,
    students: "7k",
    duration: "6 months",
    level: "Advanced",
  },
  {
    image: imgWebDev,
    title: "Angular Enterprise Pro",
    category: "Web Dev",
    badge: "ENTERPRISE",
    color: "#dd0031",
    rating: 4.7,
    students: "8k",
    duration: "6 months",
    level: "Intermediate",
  },
  {
    image: imgWebDev,
    title: "Next.js 14 Development",
    category: "Web Dev",
    badge: "MODERN",
    color: "#0ea5e9",
    rating: 4.9,
    students: "14k",
    duration: "4 months",
    level: "Advanced",
  },
  {
    image: imgWebDev,
    title: "Flutter Mobile Mastery",
    category: "Web Dev",
    badge: "MOBILE",
    color: "#02569b",
    rating: 4.8,
    students: "10k",
    duration: "5 months",
    level: "Beginner",
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
  },
  {
    image: imgAI,
    title: "Generative AI Creative",
    category: "AI & Data",
    badge: "NEW",
    color: "#8b5cf6",
    rating: 4.9,
    students: "6k",
    duration: "4 months",
    level: "Intermediate",
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
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Courses = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered = active === "All" ? courses : courses.filter(c => c.category === active);

  return (
    <section id="courses" className="courses-section section-padding">
      <div className="container-custom">

        {/* Header */}
        <div className="courses-header">
          <div className="section-badge">📚 &nbsp;Our Courses</div>
          <h2 className="section-title">Popular <span className="gradient-text">Courses</span></h2>
          <p className="section-subtitle">
            Expertly crafted programs to take you from beginner to job-ready professional.
          </p>
        </div>

        {/* Filter & View All Row */}
        <div className="courses-controls">
          <div className="courses-filter">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? "filter-active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button
            className="btn-primary courses-view-all"
            onClick={() => { navigate("/courses"); window.scrollTo(0, 0); }}
          >
            <span>View All Courses</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Grid */}
        <motion.div
          className="courses-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
                filtered.map((course, i) => {
                  const sc = statusColors[course.badge] || statusColors["NEW"];
                  return (
                    <motion.div 
                        key={course.title}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className="course-card card"
                        variants={cardVariant}
                        whileHover={{ y: -8 }}
                    >
                        {/* Image Banner — Trainer Card Style */}
                        <div className="course-img-banner">
                            <img src={course.image} alt={course.title} />
                            <span className="course-category-tag">{course.category}</span>
                        </div>

                        <div className="course-body-modern">
                            {/* Status Pill */}
                            <div className="status-row">
                                <span className="status-pill" style={{ background: sc.bg, color: sc.color }}>
                                    {course.badge}
                                </span>
                            </div>

                            <h3 className="course-title-modern">{course.title}</h3>
                            
                            {/* Stats Row */}
                            <div className="course-stats-modern">
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
                            <div className="course-footer-modern">
                                <button
                                    className="btn-primary course-enroll-btn"
                                    onClick={() => { navigate("/enrollment"); window.scrollTo(0, 0); }}
                                >
                                    <span>Enroll Now</span>
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                  );
                })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="no-courses-msg"
              >
                No courses found in this category.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;