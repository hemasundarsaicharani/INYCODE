import React from "react";
import { motion } from "framer-motion";
import { BookOpen, User, ArrowUpRight, Play, MoreVertical } from "lucide-react";
import "./MyCourses.css";

const MyCourses = () => {
    const courses = [
        { name: "HTML & CSS Mastery", instructor: "John Smith", progress: 85, color: "#0ea5e9", lessons: 24 },
        { name: "Modern JavaScript", instructor: "Sarah Lee", progress: 65, color: "#f59e0b", lessons: 32 },
        { name: "React Framework", instructor: "David Miller", progress: 42, color: "#818cf8", lessons: 45 }
    ];

    return (
        <div className="db-courses-modern">
            <div className="db-page-header">
                <div>
                    <h1>My <span className="gradient-text">Courses</span></h1>
                    <p>Continue where you left off and finish your learning paths.</p>
                </div>
            </div>

            <div className="courses-grid-modern">
                {courses.map((course, i) => (
                    <motion.div 
                        key={course.name}
                        className="course-card-premium card glass gradient-border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{ "--card-accent": `linear-gradient(90deg, ${course.color}, ${course.color}dd)` }}
                    >
                        <div className="c-card-top">
                            <div className="c-icon-wrap" style={{ background: `${course.color}15`, color: course.color }}>
                                <BookOpen size={24} />
                            </div>
                            <button className="icon-btn-mini"><MoreVertical size={20} /></button>
                        </div>
                        
                        <div className="c-card-body">
                            <h3>{course.name}</h3>
                            <div className="c-instructor">
                                <User size={14} />
                                <span>{course.instructor}</span>
                            </div>
                            
                            <div className="c-progress-wrap">
                                <div className="c-p-header">
                                    <span>Progress</span>
                                    <span>{course.progress}%</span>
                                </div>
                                <div className="c-p-bar">
                                    <motion.div 
                                        className="c-p-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${course.progress}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        style={{ background: course.color }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="c-card-footer">
                            <span className="c-lessons">{course.lessons} Total Lessons</span>
                            <button className="btn-primary mini-btn" style={{ background: course.color }}>
                                <Play size={14} fill="white" />
                                <span>Continue</span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MyCourses;