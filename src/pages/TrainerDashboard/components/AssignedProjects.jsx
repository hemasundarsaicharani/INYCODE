import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical,
  Plus,
  Users
} from "lucide-react";
import "./AssignedProjects.css";

const PROJECTS = [
  { 
    id: 1, 
    title: "E-commerce Platform Architecture", 
    batch: "Batch-01", 
    deadline: "20 Mar 2026", 
    submissions: 18, 
    total: 24, 
    status: "active",
    difficulty: "Advanced",
    color: "#38bdf8"
  },
  { 
    id: 2, 
    title: "Social Media Dashboard", 
    batch: "Batch-02", 
    deadline: "15 Mar 2026", 
    submissions: 22, 
    total: 22, 
    status: "reviewing",
    difficulty: "Intermediate",
    color: "#f59e0b"
  },
  { 
    id: 3, 
    title: "Inventory Management System", 
    batch: "Batch-01", 
    deadline: "05 Mar 2026", 
    submissions: 24, 
    total: 24, 
    status: "completed",
    difficulty: "Advanced",
    color: "#10b981"
  },
  { 
    id: 4, 
    title: "Weather App with API Integration", 
    batch: "Batch-02", 
    deadline: "25 Mar 2026", 
    submissions: 5, 
    total: 22, 
    status: "active",
    difficulty: "Beginner",
    color: "#818cf8"
  }
];

const AssignedProjects = () => {
  return (
    <div className="projects-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Assigned Projects</h2>
          <p>Monitor project progress and review student submissions across batches.</p>
        </div>
        <button className="btn-primary mini-btn">
          <Plus size={18} />
          <span>New Project</span>
        </button>
      </div>

      <div className="projects-stats-row mb-8">
        {[
          { label: "Active Projects", value: "04", icon: <Briefcase size={20} />, color: "#38bdf8" },
          { label: "Total Submissions", value: "69", icon: <CheckCircle2 size={20} />, color: "#10b981" },
          { label: "Pending Reviews", value: "12", icon: <Clock size={20} />, color: "#f59e0b" },
          { label: "Average Score", value: "85%", icon: <Users size={20} />, color: "#818cf8" }
        ].map((stat, i) => (
          <div key={i} className="stat-card-mini glass">
             <div className="stat-icon" style={{ color: stat.color, background: `${stat.color}15` }}>{stat.icon}</div>
             <div className="stat-info">
                <span className="lbl">{stat.label}</span>
                <span className="val">{stat.value}</span>
             </div>
          </div>
        ))}
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id}
            className="project-card card glass"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="project-card-header">
              <div className="p-batch-info">
                 <span className="p-batch-tag">{project.batch}</span>
                 <span className={`p-status-pill ${project.status}`}>{project.status}</span>
              </div>
              <button className="icon-btn-mini"><MoreVertical size={18} /></button>
            </div>

            <h3 className="project-title">{project.title}</h3>
            
            <div className="project-meta-info">
               <div className="p-meta">
                  <Clock size={14} />
                  <span>Deadline: {project.deadline}</span>
               </div>
               <div className="p-meta">
                  <Users size={14} />
                  <span>Submissions: {project.submissions}/{project.total}</span>
               </div>
            </div>

            <div className="p-progress-wrap">
               <div className="p-progress-label">
                  <span>Submission Rate</span>
                  <span>{Math.round((project.submissions/project.total) * 100)}%</span>
               </div>
               <div className="p-progress-bar">
                  <div className="p-progress-fill" style={{ width: `${(project.submissions/project.total) * 100}%`, background: project.color }} />
               </div>
            </div>

            <div className="project-card-footer">
               <span className="difficulty-tag" style={{ color: project.color }}>{project.difficulty}</span>
               <button className="btn-text-icon">
                  <span>View Submissions</span>
                  <ExternalLink size={14} />
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AssignedProjects;
