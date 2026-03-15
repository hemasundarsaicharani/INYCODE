import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  Filter, 
  TrendingUp, 
  TrendingDown, 
  MoreVertical,
  Mail,
  MessageSquare,
  ChevronRight,
  Eye
} from "lucide-react";
import "./StudentPerformanceRecord.css";

const STUDENTS = [
  { id: 1, name: "Rahul Sharma", batch: "Batch-01", attendance: "95%", assignments: "12/12", score: 98, trend: "up" },
  { id: 2, name: "Priya V", batch: "Batch-01", attendance: "88%", assignments: "10/12", score: 85, trend: "up" },
  { id: 3, name: "Amit Kumar", batch: "Batch-02", attendance: "72%", assignments: "8/12", score: 65, trend: "down" },
  { id: 4, name: "Sneha Reddy", batch: "Batch-01", attendance: "92%", assignments: "11/12", score: 91, trend: "up" },
  { id: 5, name: "Vikram S", batch: "Batch-02", attendance: "85%", assignments: "9/12", score: 78, trend: "down" },
  { id: 6, name: "Kiran J", batch: "Batch-02", attendance: "98%", assignments: "12/12", score: 95, trend: "up" },
];

const StudentPerformanceRecord = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.batch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="performance-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Student Performance</h2>
          <p>Detailed performance analytics and progress tracking for all your students.</p>
        </div>
        <div className="header-actions">
           <div className="search-box glass">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search students..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <button className="icon-btn-rect glass"><Filter size={18} /></button>
        </div>
      </div>

      <div className="performance-stats-row mb-8">
        {[
          { label: "Avg. Attendance", value: "88%", color: "#38bdf8" },
          { label: "Avg. Score", value: "82/100", color: "#10b981" },
          { label: "Pending Reviews", value: "14", color: "#f59e0b" },
          { label: "Active Projects", value: "05", color: "#818cf8" }
        ].map((stat, i) => (
          <div key={i} className="mini-stat-card card glass">
            <span className="lbl">{stat.label}</span>
            <span className="val" style={{ color: stat.color }}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="performance-table-wrap card glass">
        <table className="performance-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Batch</th>
              <th>Attendance</th>
              <th>Assignments</th>
              <th>Overall Score</th>
              <th>Trend</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, i) => (
              <motion.tr 
                key={student.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <td>
                  <div className="student-profile-cell">
                    <div className="mini-avatar-rect"><Users size={16} /></div>
                    <span>{student.name}</span>
                  </div>
                </td>
                <td><span className="batch-tag">{student.batch}</span></td>
                <td>
                  <div className="progress-cell">
                    <div className="p-bar-mini">
                      <div className="p-bar-fill" style={{ width: student.attendance, background: parseInt(student.attendance) > 85 ? '#10b981' : '#f59e0b' }} />
                    </div>
                    <span>{student.attendance}</span>
                  </div>
                </td>
                <td>{student.assignments}</td>
                <td>
                  <span className="score-badge" style={{ 
                    background: student.score > 90 ? 'rgba(16, 185, 129, 0.1)' : student.score > 75 ? 'rgba(56, 189, 248, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    color: student.score > 90 ? '#10b981' : student.score > 75 ? '#38bdf8' : '#f59e0b'
                  }}>
                    {student.score}%
                  </span>
                </td>
                <td>
                  {student.trend === 'up' ? (
                    <TrendingUp size={18} className="trend-up" />
                  ) : (
                    <TrendingDown size={18} className="trend-down" />
                  )}
                </td>
                <td>
                  <div className="action-btns">
                    <button className="icon-btn-mini glass" title="View Details"><Eye size={16} /></button>
                    <button className="icon-btn-mini glass" title="Send Message"><MessageSquare size={16} /></button>
                    <button className="icon-btn-mini glass"><MoreVertical size={16} /></button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentPerformanceRecord;
