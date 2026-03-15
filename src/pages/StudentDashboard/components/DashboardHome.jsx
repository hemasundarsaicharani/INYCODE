import React from "react";
import { motion } from "framer-motion";
import { 
  Book, 
  CheckCircle, 
  Clock, 
  Trophy, 
  ArrowUpRight,
  Play
} from "lucide-react";
import "./DashboardHome.css";

const DashboardHome = () => {
    const courses = [
        { name: "HTML & CSS Mastery", progress: 85, category: "Web Design", color: "#0ea5e9" },
        { name: "Modern JavaScript", progress: 65, category: "Programming", color: "#f59e0b" },
        { name: "React Framework", progress: 42, category: "Frontend", color: "#818cf8" }
    ];

    const stats = [
        { label: "Enrolled", value: 3, icon: <Book size={20} />, color: "#38bdf8" },
        { label: "Completed", value: 1, icon: <CheckCircle size={20} />, color: "#10b981" },
        { label: "Assignments", value: 5, icon: <Clock size={20} />, color: "#f43f5e" },
        { label: "Points", value: 1250, icon: <Trophy size={20} />, color: "#f59e0b" }
    ];

    return (
        <div className="db-home-modern">
            {/* Page Title */}
            <div className="db-page-header">
                <div>
                    <h1>Learning <span className="gradient-text">Overview</span></h1>
                    <p>Track your progress and pick up where you left off.</p>
                </div>
                <button className="btn-primary">
                    <Play size={16} fill="white" />
                    <span>Resume Last Lesson</span>
                </button>
            </div>

            {/* Stats Summary */}
            <div className="db-stats-grid">
                {stats.map((stat, i) => (
                    <motion.div 
                        key={stat.label}
                        className="stat-card-modern glass gradient-border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="stat-icon-wrap" style={{ background: `${stat.color}15`, color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div className="stat-info-wrap">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value">{stat.value}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Section Grid */}
            <div className="db-main-grid">
                {/* Courses Progress */}
                <div className="db-course-section">
                    <div className="section-header">
                        <h2>Ongoing Courses</h2>
                        <a href="#">View All</a>
                    </div>

                    <div className="course-progress-list mb-6">
                        {courses.map((course, i) => (
                            <motion.div 
                                key={course.name}
                                className="progress-card card glass"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                            >
                                <div className="course-card-top">
                                    <div className="course-info-mini">
                                        <span className="c-category" style={{ background: `${course.color}15`, color: course.color }}>{course.category}</span>
                                        <h3>{course.name}</h3>
                                    </div>
                                    <div className="p-percent" style={{ color: course.color }}>{course.progress}%</div>
                                </div>
                                <div className="p-bar-bg">
                                    <motion.div 
                                        className="p-bar-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${course.progress}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                        style={{ background: course.color }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Weekly Activity Chart */}
                    <motion.div 
                        className="activity-chart-card card glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <h3>Weekly Learning Activity</h3>
                            <div className="chart-meta">
                                <span className="val">24.5 hrs</span>
                                <span className="lbl">this week</span>
                            </div>
                        </div>
                        <div className="activity-bar-chart">
                            {[4, 6, 3, 8, 5, 7, 4].map((hrs, i) => (
                                <div key={i} className="a-bar-col">
                                    <motion.div 
                                        className="a-bar-fill"
                                        style={{ height: `${(hrs/8)*100}%` }}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${(hrs/8)*100}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                    />
                                    <span className="a-bar-lbl">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar Cards */}
                <div className="db-side-section">
                    <div className="recent-activity card glass">
                        <h3>Upcoming Events</h3>
                        <div className="activity-list">
                            <div className="activity-item">
                                <div className="event-date">
                                    <span className="day">12</span>
                                    <span className="month">Mar</span>
                                </div>
                                <div className="event-info">
                                    <h4>React Workshop</h4>
                                    <p>04:00 PM • Zoom</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skill Mastery Section */}
                    <motion.div 
                        className="skill-radar card glass"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{'--card-accent': 'linear-gradient(90deg, #10b981, #34d399)'}}
                    >
                        <h3>Skill Mastery</h3>
                        <div className="skill-stack">
                            {[
                                { name: "Frontend", val: 85, color: "#0ea5e9" },
                                { name: "UI Design", val: 60, color: "#10b981" },
                                { name: "Backend", val: 40, color: "#f59e0b" }
                            ].map((s, i) => (
                                <div key={i} className="skill-item">
                                    <div className="s-info"><span>{s.name}</span><span>{s.val}%</span></div>
                                    <div className="s-bar">
                                        <motion.div 
                                            initial={{ width: 0 }} 
                                            whileInView={{ width: `${s.val}%` }} 
                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }} 
                                            style={{ background: s.color }} 
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;