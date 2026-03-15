import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  UserPlus, 
  BookOpen, 
  Calendar, 
  Clock, 
  Shield,
  MoreVertical,
  Plus,
  Search
} from "lucide-react";
import "./BatchAssignment.css";

const BATCHES = [
  { id: 1, name: "Batch-01", course: "Full Stack Web Dev", trainer: "Mohan Kumar", students: 24, start: "15 Jan 2026", status: "Ongoing", color: "#38bdf8" },
  { id: 2, name: "Batch-02", course: "UI/UX Design Masterclass", trainer: "Sneha Reddy", students: 18, start: "01 Feb 2026", status: "Ongoing", color: "#f59e0b" },
  { id: 3, name: "Batch-03", course: "Data Science with Python", trainer: "Unassigned", students: 0, start: "25 Mar 2026", status: "Upcoming", color: "#818cf8" },
  { id: 4, name: "Batch-04", course: "React Advanced Patterns", trainer: "Ram Krishna", students: 22, start: "10 Mar 2026", status: "Ongoing", color: "#10b981" },
];

const BatchAssignment = () => {
  return (
    <div className="batch-assignment-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Batch Management</h2>
          <p>Assign trainers, track batch progress, and manage student enrollment.</p>
        </div>
        <button className="btn-primary mini-btn">
          <Plus size={18} />
          <span>Create New Batch</span>
        </button>
      </div>

      <div className="batch-grid">
        {BATCHES.map((batch, i) => (
          <motion.div 
            key={batch.id} 
            className="batch-card card glass"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
             <div className="batch-card-header">
                <div className="batch-info-top">
                   <span className="batch-id">{batch.name}</span>
                   <span className={`batch-status-tag ${batch.status.toLowerCase()}`}>{batch.status}</span>
                </div>
                <button className="icon-btn-mini"><MoreVertical size={18} /></button>
             </div>

             <h3 className="course-name">{batch.course}</h3>
             
             <div className="assignment-details">
                <div className="detail-item">
                   <Shield size={16} />
                   <div className="item-text">
                      <span className="lbl">Assigned Trainer</span>
                      <span className={`val ${batch.trainer === 'Unassigned' ? 'unassigned' : ''}`}>
                         {batch.trainer}
                      </span>
                   </div>
                   {batch.trainer === 'Unassigned' && (
                     <button className="assign-btn"><UserPlus size={14} /></button>
                   )}
                </div>
                <div className="detail-item">
                   <Users size={16} />
                   <div className="item-text">
                      <span className="lbl">Enrolled Students</span>
                      <span className="val">{batch.students} Students</span>
                   </div>
                </div>
                <div className="detail-item">
                   <Calendar size={16} />
                   <div className="item-text">
                      <span className="lbl">Start Date</span>
                      <span className="val">{batch.start}</span>
                   </div>
                </div>
             </div>

             <div className="batch-card-footer">
                <div className="p-bar-label">
                   <span>Curriculum Progress</span>
                   <span>40%</span>
                </div>
                <div className="p-bar-bg">
                   <div className="p-bar-fill" style={{ width: '40%', background: batch.color }} />
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      <div className="trainer-availability mt-12">
         <div className="section-header">
            <h3>Trainer Availability Overview</h3>
            <div className="search-box-mini glass">
               <Search size={14} />
               <input type="text" placeholder="Search trainers..." />
            </div>
         </div>
         <div className="availability-grid mt-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="trainer-avail-card card glass">
                 <div className="avail-avatar"><Users size={18} /></div>
                 <div className="avail-info">
                    <span className="t-name">Trainer 0{i}</span>
                    <span className="t-status active">4 Batches Active</span>
                 </div>
                 <div className="load-bar">
                    <div className="load-fill" style={{ width: '80%', background: '#f43f5e' }} />
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default BatchAssignment;
