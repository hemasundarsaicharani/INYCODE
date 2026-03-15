import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  FileCheck, 
  TrendingUp, 
  User, 
  Plus,
  MoreVertical
} from "lucide-react";

const TrainerHome = ({ user }) => {
  const stats = [
    { label: "Active Courses", value: 3, icon: <BookOpen size={20} />, color: "#818cf8" },
    { label: "Total Students", value: 45, icon: <Users size={20} />, color: "#38bdf8" },
    { label: "Pending Reviews", value: 12, icon: <FileCheck size={20} />, color: "#f43f5e" },
    { label: "Completion Rate", value: "88%", icon: <TrendingUp size={20} />, color: "#10b981" }
  ];

  return (
    <>
      <div className="db-page-header">
        <div>
          <h1>Trainer <span className="gradient-text">Console</span></h1>
          <p>Track student performance and course engagement.</p>
        </div>
      </div>

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

      <div className="db-main-grid">
        <div className="db-course-section">
          <div className="section-header">
            <h2>Your Active Courses</h2>
          </div>
          <div className="course-progress-list mb-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="progress-card card glass">
                <div className="course-card-top">
                  <h3>Full Stack Web Dev - Batch {i + 1}</h3>
                  <button className="icon-btn-mini"><MoreVertical size={16} /></button>
                </div>
                <div className="course-meta">
                  <span>24 Students</span>
                  <span>•</span>
                  <span>Next Class: 12 Mar</span>
                </div>
                <div className="p-bar-bg">
                  <div className="p-bar-fill" style={{ width: '65%', background: '#818cf8' }} />
                </div>
              </div>
            ))}
          </div>

          <motion.div 
            className="performance-card card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className="section-header">
                <h3>Batch Performance Tracking</h3>
                <TrendingUp size={18} className="text-emerald" />
             </div>
             <div className="performance-chart-wrap">
                <svg viewBox="0 0 400 150" className="perf-svg">
                    <motion.path 
                        d="M0,120 L80,100 L160,110 L240,40 L320,60 L400,20" 
                        fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                    {[
                        {x: 0, y: 120}, {x: 80, y: 100}, {x: 160, y: 110}, {x: 240, y: 40}, {x: 320, y: 60}, {x: 400, y: 20}
                    ].map((p, i) => (
                        <motion.circle key={i} cx={p.x} cy={p.y} r="4" fill="#10b981" initial={{scale:0}} whileInView={{scale:1}} transition={{delay: i * 0.1}} />
                    ))}
                </svg>
                <div className="chart-labels">
                    <span>Week 1</span>
                    <span>Week 6</span>
                </div>
             </div>
          </motion.div>
        </div>

        <div className="db-side-section">
          <motion.div 
            className="engagement-card card glass"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h3>Student Engagement</h3>
             <div className="engagement-donut">
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                    <motion.circle 
                        cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="8" strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        whileInView={{ strokeDashoffset: 251.2 * 0.15 }}
                        transition={{ duration: 1.5 }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="e-center">
                    <span className="val">85%</span>
                </div>
             </div>
             <p className="e-desc">Avg. session attendance</p>
          </motion.div>

          <div className="recent-activity card glass">
            <h3>Recent Submissions</h3>
            <div className="activity-list">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="activity-item">
                  <div className="mini-avatar" style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.05)', borderRadius: 10, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <User size={18} />
                  </div>
                  <div className="event-info">
                    <h4>Student {i + 1}</h4>
                    <p>Submitted Assignment {i + 3}</p>
                  </div>
                  <button className="btn-text">Review</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerHome;
