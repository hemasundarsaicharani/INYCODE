import React from "react";
import { motion } from "framer-motion";
import { 
  FileCheck, 
  Users, 
  Clock, 
  Search, 
  Filter, 
  MoreVertical,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import "./TrainerAssignments.css";

const PENDING_ASSIGNMENTS = [
  { id: 1, title: "React State Management", batch: "Batch-01", submittedBy: "Rahul Sharma", time: "2 hours ago", status: "Pending" },
  { id: 2, title: "Database Schema Design", batch: "Batch-02", submittedBy: "Anita Roy", time: "5 hours ago", status: "Reviewing" },
  { id: 3, title: "API Integration Task", batch: "Batch-01", submittedBy: "Sneha Reddy", time: "1 day ago", status: "Pending" },
];

const TrainerAssignments = () => {
    return (
        <div className="trainer-assignments-container">
            <div className="section-header">
                <div>
                   <h2 className="gradient-text">Assignments & Submissions</h2>
                   <p>Review student work, provide feedback, and manage assignment deadlines.</p>
                </div>
            </div>

            <div className="assignments-stats-row mt-8">
               <div className="mini-stat-card card glass">
                  <span className="lbl">Total Submissions</span>
                  <span className="val">420</span>
               </div>
               <div className="mini-stat-card card glass">
                  <span className="lbl">Pending Review</span>
                  <span className="val" style={{ color: '#f59e0b' }}>12</span>
               </div>
               <div className="mini-stat-card card glass">
                  <span className="lbl">Completed Today</span>
                  <span className="val" style={{ color: '#10b981' }}>08</span>
               </div>
            </div>

            <div className="submissions-section card glass mt-8">
               <div className="table-header">
                  <h3>Recent Submissions</h3>
                  <div className="header-actions">
                     <div className="search-box-mini glass">
                        <Search size={16} />
                        <input type="text" placeholder="Filter by student..." />
                     </div>
                  </div>
               </div>
               <div className="submissions-list">
                  {PENDING_ASSIGNMENTS.map((sub, i) => (
                    <motion.div 
                      key={sub.id} 
                      className="submission-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                       <div className="sub-icon"><FileCheck size={20} /></div>
                       <div className="sub-info">
                          <span className="sub-title">{sub.title}</span>
                          <span className="sub-meta">by {sub.submittedBy} • {sub.batch}</span>
                       </div>
                       <div className={`sub-status ${sub.status.toLowerCase()}`}>
                          {sub.status === 'Pending' ? <Clock size={14} /> : <AlertCircle size={14} />}
                          <span>{sub.status}</span>
                       </div>
                       <span className="sub-time">{sub.time}</span>
                       <button className="btn-primary mini-btn">Review</button>
                    </motion.div>
                  ))}
               </div>
               <button className="btn-text-full mt-4">Load More Submissions</button>
            </div>
        </div>
    );
};

export default TrainerAssignments;
