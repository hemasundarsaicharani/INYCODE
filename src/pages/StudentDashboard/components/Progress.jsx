import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Award, 
  Clock, 
  Target, 
  Calendar,
  Zap,
  ChevronRight,
  Flame,
  CheckCircle2
} from "lucide-react";
import "./Progress.css";

const Progress = () => {
    const skills = [
        { name: "Frontend Architecture", level: 85, color: "#38bdf8", icon: <Zap size={16} /> },
        { name: "Logic & Algorithms", level: 70, color: "#818cf8", icon: <Target size={16} /> },
        { name: "UI/UX Interaction", level: 92, color: "#f43f5e", icon: <Award size={16} /> },
        { name: "Backend Basics", level: 45, color: "#f59e0b", icon: <Clock size={16} /> }
    ];

    const weeklyActivity = [
      { day: 'M', value: 40 }, { day: 'T', value: 70 }, { day: 'W', value: 30 },
      { day: 'T', value: 90 }, { day: 'F', value: 50 }, { day: 'S', value: 20 }, { day: 'S', value: 10 }
    ];

    return (
        <div className="progress-container-premium">
            <div className="section-header">
                <div>
                   <h1 className="gradient-text">Performance Analytics</h1>
                   <p>Visualize your growth, master skills, and track your learning milestones.</p>
                </div>
                <div className="xp-card-compact glass">
                   <div className="xp-icon"><Flame size={18} /></div>
                   <div className="xp-info">
                      <span className="xp-val">1,240 XP</span>
                      <span className="xp-lbl">Level 12 Explorer</span>
                   </div>
                </div>
            </div>

            <div className="progress-top-grid">
                <div className="main-stat-card card glass">
                   <div className="stat-header">
                      <h3>Overall Proficiency</h3>
                      <span className="proficiency-pill">Elite Tier</span>
                   </div>
                   <div className="huge-stat-display">
                      <div className="circular-progress-wrap">
                         <svg viewBox="0 0 100 100" className="circular-svg">
                            <circle cx="50" cy="50" r="45" className="bg-circle" />
                            <motion.circle 
                              cx="50" cy="50" r="45" 
                              className="fill-circle"
                              initial={{ strokeDasharray: "0 283" }}
                              animate={{ strokeDasharray: "240 283" }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                         </svg>
                         <div className="inner-text">
                            <span className="big-num">85</span>
                            <span className="percent">%</span>
                         </div>
                      </div>
                      <div className="stat-details">
                         <div className="mini-row">
                            <div className="mini-stat">
                               <span className="label">Course Completion</span>
                               <span className="value">12 / 15</span>
                            </div>
                            <div className="mini-stat">
                               <span className="label">Avg. Quiz Score</span>
                               <span className="value">92%</span>
                            </div>
                         </div>
                         <div className="activity-chart-mini">
                            <div className="chart-bars">
                               {weeklyActivity.map((d, i) => (
                                 <div key={i} className="chart-col">
                                    <motion.div 
                                      className="bar" 
                                      initial={{ height: 0 }}
                                      animate={{ height: `${d.value}%` }}
                                      transition={{ delay: i * 0.1 }}
                                    />
                                    <span>{d.day}</span>
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="milestones-side">
                   <div className="milestone-card card glass">
                      <div className="m-icon" style={{ color: '#f59e0b' }}><Award size={20} /></div>
                      <div className="m-info">
                         <h4>Full Stack Catalyst</h4>
                         <p>Completed 10 backend projects</p>
                      </div>
                      <div className="m-status"><CheckCircle2 size={16} /></div>
                   </div>
                   <div className="milestone-card card glass">
                      <div className="m-icon" style={{ color: '#38bdf8' }}><Calendar size={20} /></div>
                      <div className="m-info">
                         <h4>24 Day Streak</h4>
                         <p>Keep the learning momentum!</p>
                      </div>
                      <div className="m-streak-ani">
                         <Flame size={18} fill="#f43f5e" stroke="none" />
                      </div>
                   </div>
                   <button className="btn-secondary w-full py-3">View All Achievements</button>
                </div>
            </div>

            <h3 className="section-title mt-12 mb-6">Skill Mastery</h3>
            <div className="skills-grid-modern">
                {skills.map((skill, i) => (
                    <motion.div 
                        key={skill.name} 
                        className="skill-card-premium card glass"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="skill-header">
                           <div className="skill-icon-box" style={{ background: `${skill.color}15`, color: skill.color }}>
                              {skill.icon}
                           </div>
                           <div className="skill-titles">
                              <h4>{skill.name}</h4>
                              <span className="rank-text">{skill.level > 80 ? 'Expert' : 'Intermediate'}</span>
                           </div>
                           <span className="level-text" style={{ color: skill.color }}>{skill.level}%</span>
                        </div>
                        <div className="skill-bar-outer">
                            <motion.div 
                                className="skill-bar-inner"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                            />
                        </div>
                        <div className="skill-footer">
                           <span>Weekly Growth: +2.5%</span>
                           <TrendingUp size={14} className="trend-up" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Progress;