import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  User, 
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Activity
} from "lucide-react";

const AdminHome = ({ user }) => {
  const stats = [
    { label: "Total Trainers", value: 12, icon: <User size={20} />, color: "#f59e0b" },
    { label: "Total Students", value: 150, icon: <Users size={20} />, color: "#38bdf8" },
    { label: "Total Courses", value: 25, icon: <BookOpen size={20} />, color: "#818cf8" },
    { label: "Revenue Growth", value: "+24%", icon: <TrendingUp size={20} />, color: "#10b981" }
  ];

  return (
    <>
      <div className="db-page-header">
        <div>
          <h1>Admin <span className="gradient-text">Overview</span></h1>
          <p>Global platform control and user management.</p>
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
        <motion.div 
            className="analytics-section card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="section-header">
                <h2>Trending Courses</h2>
                <TrendingUp size={18} className="text-emerald" />
            </div>
            <div className="trending-grid">
                <div className="donut-wrap">
                    <svg viewBox="0 0 100 100" className="donut-svg">
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                        <motion.circle 
                            cx="50" cy="50" r="40" fill="transparent" stroke="#818cf8" strokeWidth="10" strokeDasharray="251.2"
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: 251.2 * 0.35 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            strokeLinecap="round"
                        />
                        <motion.circle 
                            cx="50" cy="50" r="40" fill="transparent" stroke="#38bdf8" strokeWidth="10" strokeDasharray="251.2"
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: 251.2 * 0.65 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            transform="rotate(-90 50 50)"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="donut-center">
                        <span className="count">150+</span>
                        <span className="lbl">Enrolled</span>
                    </div>
                </div>
                <div className="trending-list">
                    {[
                        { name: "Full Stack Mastery", color: "#818cf8", val: "45%" },
                        { name: "UI/UX Advanced", color: "#38bdf8", val: "30%" },
                        { name: "Python for AI", color: "#10b981", val: "25%" }
                    ].map((c, i) => (
                        <div key={i} className="trend-item">
                            <span className="dot" style={{ background: c.color }} />
                            <span className="name">{c.name}</span>
                            <span className="val">{c.val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>

        <motion.div 
            className="analytics-section card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            <div className="section-header">
                <h2>Yearly Placements</h2>
                <BarChart3 size={18} className="text-blue" />
            </div>
            <div className="bar-chart-wrap">
                {[45, 68, 85, 92, 78, 95].map((val, i) => (
                    <div key={i} className="bar-col">
                        <motion.div 
                            className="bar-fill" 
                            style={{ height: `${val}%`, background: `linear-gradient(to top, #38bdf8, #818cf8)` }}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${val}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        />
                        <span className="bar-lbl">{'202'+(i)}</span>
                    </div>
                ))}
            </div>
        </motion.div>

        <div className="db-side-section full-col">
          <div className="recent-activity card glass">
            <h3>System Status & Alerts</h3>
            <div className="activity-list horizontal">
              <div className="alert-item warn">
                <div className="alert-dot" />
                <div>
                  <h4>Server Load</h4>
                  <p>Batch 5 enrollment spikes detected.</p>
                </div>
              </div>
              <div className="alert-item success">
                <div className="alert-dot" />
                <div>
                  <h4>Backup Status</h4>
                  <p>Weekly snapshot successful.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
