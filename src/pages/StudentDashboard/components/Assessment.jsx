import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  FileText,
  Timer
} from "lucide-react";
import "./Assessment.css";

const ASSESSMENTS = [
  { 
    id: 1, 
    title: "React Fundamentals Quiz", 
    module: "React Development", 
    date: "10 Mar 2026", 
    duration: "45 mins", 
    score: "92/100", 
    status: "completed",
    color: "#10b981"
  },
  { 
    id: 2, 
    title: "Node.js API Design Test", 
    module: "Backend Engineering", 
    date: "15 Mar 2026", 
    duration: "60 mins", 
    score: null, 
    status: "upcoming",
    color: "#38bdf8"
  },
  { 
    id: 3, 
    title: "UI/UX Case Study", 
    module: "Design Systems", 
    date: "08 Mar 2026", 
    duration: "120 mins", 
    score: "Pending", 
    status: "submitted",
    color: "#f59e0b"
  },
  { 
    id: 4, 
    title: "Data Structures & Algorithms", 
    module: "Computer Science", 
    date: "20 Mar 2026", 
    duration: "90 mins", 
    score: null, 
    status: "upcoming",
    color: "#818cf8"
  }
];

const Assessment = () => {
  return (
    <div className="assessment-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Assessments</h2>
          <p>Evaluate your knowledge and track your certification progress.</p>
        </div>
        <button className="btn-primary mini-btn">
          <ClipboardCheck size={18} />
          <span>View Schedule</span>
        </button>
      </div>

      <div className="assessment-grid">
        {ASSESSMENTS.map((item, i) => (
          <motion.div 
            key={item.id}
            className="assessment-card card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="card-status-bar" style={{ background: item.color }} />
            <div className="assessment-card-body">
              <div className="card-top">
                <div className="module-tag" style={{ color: item.color, border: `1px solid ${item.color}30` }}>
                  {item.module}
                </div>
                {item.status === 'completed' ? (
                  <CheckCircle2 size={20} className="status-icon success" />
                ) : item.status === 'upcoming' ? (
                  <Clock size={20} className="status-icon info" />
                ) : (
                  <AlertCircle size={20} className="status-icon warning" />
                )}
              </div>
              
              <h3 className="assessment-title">{item.title}</h3>
              
              <div className="assessment-meta">
                <div className="meta-item">
                  <FileText size={16} />
                  <span>{item.date}</span>
                </div>
                <div className="meta-item">
                  <Timer size={16} />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="assessment-footer">
                <div className="score-wrap">
                  <span className="label">Score:</span>
                  <span className="value" style={{ color: item.score && item.score !== 'Pending' ? '#10b981' : 'inherit' }}>
                    {item.score || '---'}
                  </span>
                </div>
                <button className="btn-icon-link">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="performance-summary card glass mt-8">
        <div className="summary-info">
          <h3>Overall Assessment Performance</h3>
          <p>You have completed 75% of your assessments with an average score of 88%.</p>
          <div className="summary-stats">
            <div className="sum-stat">
              <span className="val">12</span>
              <span className="lbl">Total</span>
            </div>
            <div className="sum-stat">
              <span className="val" style={{ color: '#10b981' }}>09</span>
              <span className="lbl">Cleared</span>
            </div>
            <div className="sum-stat">
              <span className="val" style={{ color: '#f59e0b' }}>01</span>
              <span className="lbl">Pending</span>
            </div>
          </div>
        </div>
        <div className="summary-chart-placeholder">
           {/* In a real app, this would be a chart */}
           <div className="mini-chart-svg">
              <svg viewBox="0 0 100 100" className="circular-progress">
                <circle cx="50" cy="50" r="40" className="circle-bg" />
                <circle cx="50" cy="50" r="40" className="circle-fill" style={{ strokeDasharray: '251', strokeDashoffset: '62' }} />
                <text x="50" y="55" className="percentage">88%</text>
              </svg>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
