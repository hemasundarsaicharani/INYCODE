import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Users, Star, Clock, Plus, MoreVertical,
  ChevronRight, TrendingUp, CheckCircle2, Edit3, Eye
} from "lucide-react";
import "./TrainerCourses.css";

const TRAINER_COURSES = [
  { 
    id: 1, title: "Mastering React Architecture", 
    students: 124, rating: 4.9, status: "Published", 
    lastUpdate: "2 days ago", sessions: 45, color: "#38bdf8",
    completionRate: 72, category: "Frontend"
  },
  { 
    id: 2, title: "Node.js Backend Systems", 
    students: 85, rating: 4.7, status: "In Progress", 
    lastUpdate: "5 hours ago", sessions: 32, color: "#10b981",
    completionRate: 58, category: "Backend"
  },
  { 
    id: 3, title: "Full Stack Portfolio Guide", 
    students: 210, rating: 5.0, status: "Published", 
    lastUpdate: "1 week ago", sessions: 12, color: "#818cf8",
    completionRate: 89, category: "Full Stack"
  },
  { 
    id: 4, title: "Python for Data Science", 
    students: 67, rating: 4.6, status: "Draft", 
    lastUpdate: "3 hours ago", sessions: 8, color: "#f59e0b",
    completionRate: 0, category: "Data Science"
  },
  { 
    id: 5, title: "UI/UX Principles in React", 
    students: 152, rating: 4.8, status: "Published", 
    lastUpdate: "Yesterday", sessions: 28, color: "#f43f5e",
    completionRate: 65, category: "Design"
  },
];

const statusColors = {
  "Published":   { bg: "rgba(16,185,129,0.12)", color: "#10b981" },
  "In Progress": { bg: "rgba(56,189,248,0.12)",  color: "#38bdf8" },
  "Draft":       { bg: "rgba(148,163,184,0.12)", color: "#94a3b8" },
};

const TrainerCourses = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Frontend", "Backend", "Full Stack", "Data Science", "Design"];
    const filtered = filter === "All" ? TRAINER_COURSES : TRAINER_COURSES.filter(c => c.category === filter);

    return (
        <div className="trainer-courses-container">
            {/* Header */}
            <div className="tc-page-header">
                <div>
                   <h2>My <span className="gradient-text">Courses</span></h2>
                   <p>Manage your curriculum, review analytics, and update content.</p>
                </div>
                <button className="btn-primary mini-btn">
                   <Plus size={18} />
                   <span>Create New Course</span>
                </button>
            </div>

            {/* Summary Cards */}
            <div className="tc-summary-row">
                {[
                    { label: "Total Courses", value: TRAINER_COURSES.length, icon: <BookOpen size={20} />, color: "#818cf8" },
                    { label: "Total Students", value: TRAINER_COURSES.reduce((a,c) => a + c.students, 0), icon: <Users size={20} />, color: "#38bdf8" },
                    { label: "Avg. Rating", value: (TRAINER_COURSES.reduce((a,c) => a + c.rating, 0) / TRAINER_COURSES.length).toFixed(1), icon: <Star size={20} />, color: "#f59e0b" },
                    { label: "Active Courses", value: TRAINER_COURSES.filter(c => c.status === "Published").length, icon: <CheckCircle2 size={20} />, color: "#10b981" },
                ].map((s, i) => (
                    <motion.div key={i} className="tc-summary-card card glass"
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}>
                        <div className="tc-sum-icon" style={{ color: s.color, background: `${s.color}18` }}>{s.icon}</div>
                        <div className="tc-sum-info">
                            <span className="tc-sum-val">{s.value}</span>
                            <span className="tc-sum-lbl">{s.label}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Filter Tabs */}
            <div className="tc-filter-tabs">
                {categories.map(cat => (
                    <button key={cat}
                        className={`tc-filter-tab ${filter === cat ? "active" : ""}`}
                        onClick={() => setFilter(cat)}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* Course Cards Grid */}
            <div className="courses-grid-modern">
                {filtered.map((course, i) => {
                    const st = statusColors[course.status] || statusColors["Draft"];
                    return (
                        <motion.div 
                            key={course.id}
                            className="t-course-card card glass"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{ "--card-accent": `linear-gradient(90deg, ${course.color}, ${course.color}dd)` }}
                        >
                            {/* Banner */}
                            <div className="t-course-banner" style={{ background: `${course.color}12` }}>
                               <div className="tc-banner-icon" style={{ color: course.color, background: `${course.color}20` }}>
                                   <BookOpen size={32} />
                               </div>
                               <span className="tc-category-tag">{course.category}</span>
                            </div>

                            <div className="t-course-content">
                               {/* Status + Actions */}
                               <div className="t-course-header">
                                  <span className="status-pill" style={{ background: st.bg, color: st.color }}>
                                      {course.status}
                                  </span>
                                  <button className="icon-btn-mini"><MoreVertical size={18} /></button>
                               </div>

                               <h3 className="course-title">{course.title}</h3>
                               
                               {/* Completion Bar */}
                               <div className="tc-completion-wrap">
                                   <div className="tc-comp-labels">
                                       <span>Completion Rate</span>
                                       <span style={{ color: course.color, fontWeight: 700 }}>{course.completionRate}%</span>
                                   </div>
                                   <div className="tc-comp-bar-bg">
                                       <motion.div className="tc-comp-bar-fill"
                                           style={{ background: course.color }}
                                           initial={{ width: 0 }}
                                           animate={{ width: `${course.completionRate}%` }}
                                           transition={{ duration: 1, delay: i * 0.1 + 0.3 }} />
                                   </div>
                               </div>

                               {/* Stats */}
                               <div className="course-stats-row">
                                  <div className="stat"><Users size={14} /><span>{course.students} Learners</span></div>
                                  <div className="stat"><Star size={14} fill="#f59e0b" stroke="#f59e0b" /><span>{course.rating}</span></div>
                                  <div className="stat"><Clock size={14} /><span>{course.sessions} Sessions</span></div>
                               </div>

                               {/* Footer */}
                               <div className="course-footer">
                                  <div className="update-info"><Clock size={12} /><span>Updated {course.lastUpdate}</span></div>
                                  <div className="tc-actions">
                                      <button className="tc-action-btn" title="Preview"><Eye size={14} /></button>
                                      <button className="tc-action-btn primary" title="Edit">
                                          <Edit3 size={14} /><span>Edit</span>
                                      </button>
                                  </div>
                               </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrainerCourses;
