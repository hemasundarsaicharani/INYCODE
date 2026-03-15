import React from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle2, Clock, Upload, Filter, Search } from "lucide-react";
import "./Assignments.css";

const Assignments = () => {
  const assignments = [
    { title: "HTML Landing Page", course: "HTML & CSS Mastery", status: "Pending", due: "15 Mar", id: "ASG-001" },
    { title: "JavaScript Dashboard", course: "Modern JavaScript", status: "Submitted", due: "10 Mar", id: "ASG-002" },
    { title: "React Todo App", course: "React Framework", status: "Pending", due: "20 Mar", id: "ASG-003" }
  ];

  return (
    <div className="db-assignments-modern">
        <div className="db-page-header">
            <div>
                <h1>Project <span className="gradient-text">Assignments</span></h1>
                <p>Manage your submissions and track grading status.</p>
            </div>
        </div>

        <div className="db-filter-bar glass card">
            <div className="search-wrap">
                <Search size={18} />
                <input type="text" placeholder="Filter by course..." />
            </div>
            <div className="filter-group">
                <button className="btn-outline mini-btn"><Filter size={16} /><span>Sort</span></button>
            </div>
        </div>

        <div className="assignments-table-wrap glass card gradient-border">
            <table className="db-table">
                <thead>
                    <tr>
                        <th>Project Details</th>
                        <th>Course</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map((a, i) => (
                        <motion.tr 
                            key={a.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <td>
                                <div className="td-info">
                                    <div className="td-icon-circ">
                                        <FileText size={18} />
                                    </div>
                                    <div>
                                        <div className="title">{a.title}</div>
                                        <div className="subtitle">{a.id}</div>
                                    </div>
                                </div>
                            </td>
                            <td><span className="course-badge">{a.course}</span></td>
                            <td><div className="due-date">{a.due}</div></td>
                            <td>
                                <div className={`status-pill ${a.status.toLowerCase()}`}>
                                    {a.status === "Submitted" ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                    <span>{a.status}</span>
                                </div>
                            </td>
                            <td>
                                <button className={a.status === "Submitted" ? "btn-outline mini-btn" : "btn-primary mini-btn"}>
                                    <Upload size={14} />
                                    <span>{a.status === "Submitted" ? "Resubmit" : "Upload"}</span>
                                </button>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Assignments;