import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen, 
  CheckCircle2,
  Activity
} from "lucide-react";
import "./OverallProgress.css";

const OverallProgress = () => {
  const categories = [
    { name: "Full Stack Development", progress: 75, students: 450, color: "#38bdf8" },
    { name: "UI/UX Design Masterclass", progress: 62, students: 280, color: "#f59e0b" },
    { name: "Data Science Boot Camp", progress: 48, students: 320, color: "#818cf8" },
    { name: "React Advanced Patterns", progress: 85, students: 150, color: "#10b981" },
  ];

  return (
    <div className="overall-progress-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Platform Progress</h2>
          <p>Global metrics for student completion rates and course engagement.</p>
        </div>
      </div>

      <div className="progress-stats-grid mb-8">
        {[
          { label: "Completion Rate", value: "78%", trend: "+5%", icon: <CheckCircle2 size={24} />, color: "#10b981" },
          { label: "Engagement Score", value: "9.2/10", trend: "+0.4", icon: <Activity size={24} />, color: "#38bdf8" },
          { label: "Avg. Assessment", value: "82%", trend: "Stable", icon: <TrendingUp size={24} />, color: "#f59e0b" },
          { label: "Drop-off Rate", value: "4.2%", trend: "-1.2%", icon: <Activity size={24} />, color: "#818cf8" }
        ].map((stat, i) => (
          <div key={i} className="progress-stat-card card glass">
             <div className="stat-icon" style={{ color: stat.color, background: `${stat.color}15` }}>{stat.icon}</div>
             <div className="stat-content">
                <span className="lbl">{stat.label}</span>
                <div className="val-row">
                   <span className="val">{stat.value}</span>
                   <span className="trend">{stat.trend}</span>
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="progress-main-grid">
         <div className="category-section card glass">
            <h3>Course-wise Progress</h3>
            <div className="category-list">
               {categories.map((cat, i) => (
                 <div key={i} className="category-item">
                    <div className="cat-header">
                       <span className="cat-name">{cat.name}</span>
                       <span className="cat-meta">{cat.students} Students</span>
                    </div>
                    <div className="p-bar-bg">
                       <div className="p-bar-fill" style={{ width: `${cat.progress}%`, background: cat.color }} />
                    </div>
                    <div className="cat-footer">
                       <span>Progress: {cat.progress}%</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="platform-health card glass">
            <h3>Platform Activity</h3>
            <div className="activity-placeholder">
               {/* Custom SVG Bar Chart */}
               <svg viewBox="0 0 200 150" className="bar-chart-svg">
                  {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                    <motion.rect 
                      key={i} 
                      x={20 + i * 25} 
                      y={100 - h} 
                      width="15" 
                      height={h} 
                      fill="var(--accent-emerald)" 
                      opacity={0.3 + (i * 0.1)}
                      initial={{ height: 0, y: 100 }}
                      animate={{ height: h, y: 100 - h }}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                  <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(255,255,255,0.1)" />
               </svg>
               <div className="health-labels">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default OverallProgress;
