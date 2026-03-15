import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, Search, Filter, Download, TrendingUp, BookOpen, 
  CheckCircle2, MoreVertical, Mail, Clock, Award, 
  ChevronDown, User, GraduationCap, AlertCircle
} from "lucide-react";
import "./AdminStudentsView.css";

const ADMIN_STUDENTS = [
  { id: 1,  name: "Rahul Sharma",    email: "rahul@example.com",    batch: "Batch 12", course: "Full Stack Mastery",   progress: 85, status: "Active",    enrolled: "Jan 2026", score: 88 },
  { id: 2,  name: "Anita Roy",       email: "anita@example.com",    batch: "Batch 11", course: "UI/UX Design",         progress: 42, status: "Active",    enrolled: "Dec 2025", score: 73 },
  { id: 3,  name: "Sneha Reddy",     email: "sneha@example.com",    batch: "Batch 10", course: "Python Backend",       progress: 100, status: "Completed", enrolled: "Nov 2025", score: 95 },
  { id: 4,  name: "Abhishek Singh",  email: "abhishek@example.com", batch: "Batch 12", course: "Full Stack Mastery",   progress: 12, status: "Dropped",   enrolled: "Jan 2026", score: 30 },
  { id: 5,  name: "Priya Menon",     email: "priya@example.com",    batch: "Batch 13", course: "Data Science",         progress: 68, status: "Active",    enrolled: "Feb 2026", score: 81 },
  { id: 6,  name: "Karthik Nair",   email: "karthik@example.com",  batch: "Batch 11", course: "React Architecture",   progress: 90, status: "Active",    enrolled: "Dec 2025", score: 92 },
  { id: 7,  name: "Divya Pillai",    email: "divya@example.com",    batch: "Batch 10", course: "Node.js Backend",      progress: 100, status: "Completed", enrolled: "Oct 2025", score: 89 },
  { id: 8,  name: "Manish Kumar",    email: "manish@example.com",   batch: "Batch 13", course: "DevOps Basics",        progress: 25, status: "Active",    enrolled: "Feb 2026", score: 62 },
];

const statusMap = {
  "Active":    { color: "#10b981", bg: "rgba(16,185,129,0.12)" },
  "Completed": { color: "#818cf8", bg: "rgba(129,140,248,0.12)" },
  "Dropped":   { color: "#ef4444", bg: "rgba(239,68,68,0.12)" },
};

const progressColor = (p) => {
  if (p >= 80) return "#10b981";
  if (p >= 50) return "#38bdf8";
  if (p >= 20) return "#f59e0b";
  return "#ef4444";
};

const AdminStudentsView = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = ADMIN_STUDENTS.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                        s.email.toLowerCase().includes(search.toLowerCase()) ||
                        s.course.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statuses = ["All", "Active", "Completed", "Dropped"];

  return (
    <div className="asv-container">
      
      {/* Header */}
      <div className="asv-page-header">
        <div>
          <h2>Student <span className="gradient-text">Management</span></h2>
          <p>Monitor enrollment, track progress, and manage all learners across batches.</p>
        </div>
        <div className="asv-header-actions">
          <button className="btn-outline-sm">
            <Download size={16} /><span>Export CSV</span>
          </button>
          <button className="btn-primary mini-btn">
            <User size={16} /><span>Add Student</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="asv-kpi-grid">
        {[
          { label: "Total Enrolled", value: ADMIN_STUDENTS.length, sub: "Across all batches", color: "#38bdf8", icon: <Users size={22} /> },
          { label: "Active Students", value: ADMIN_STUDENTS.filter(s => s.status === "Active").length, sub: "Currently learning", color: "#10b981", icon: <GraduationCap size={22} /> },
          { label: "Completed", value: ADMIN_STUDENTS.filter(s => s.status === "Completed").length, sub: "Finished their course", color: "#818cf8", icon: <CheckCircle2 size={22} /> },
          { label: "Avg. Score", value: `${Math.round(ADMIN_STUDENTS.reduce((a,s) => a + s.score, 0) / ADMIN_STUDENTS.length)}%`, sub: "Overall quiz performance", color: "#f59e0b", icon: <Award size={22} /> },
        ].map((kpi, i) => (
          <motion.div key={i} className="asv-kpi-card card glass"
            initial={{ opacity:0, y: 16 }} animate={{ opacity:1, y: 0 }}
            transition={{ delay: i * 0.08 }}>
            <div className="asv-kpi-top">
              <div className="asv-kpi-icon" style={{ color: kpi.color, background: `${kpi.color}15` }}>
                {kpi.icon}
              </div>
              <span className="asv-kpi-val" style={{ color: kpi.color }}>{kpi.value}</span>
            </div>
            <div className="asv-kpi-label">{kpi.label}</div>
            <div className="asv-kpi-sub">{kpi.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Table Section */}
      <div className="asv-table-section card glass">
        {/* Toolbar */}
        <div className="asv-toolbar">
          <div className="asv-search-wrap glass">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search by name, email or course..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="asv-status-filters">
            {statuses.map(st => (
              <button key={st}
                className={`asv-filter-btn ${statusFilter === st ? "active" : ""}`}
                onClick={() => setStatusFilter(st)}>
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="asv-table-wrap">
          <table className="asv-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student</th>
                <th>Batch</th>
                <th>Course</th>
                <th>Progress</th>
                <th>Score</th>
                <th>Status</th>
                <th>Enrolled</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => {
                const st = statusMap[s.status];
                const pc = progressColor(s.progress);
                return (
                  <motion.tr key={s.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}>
                    <td className="row-num">{i + 1}</td>
                    <td>
                      <div className="asv-student-cell">
                        <div className="asv-avatar" style={{ background: `${st.color}18`, color: st.color }}>
                          {s.name.split(" ").map(w => w[0]).join("").slice(0,2)}
                        </div>
                        <div className="asv-name-block">
                          <span className="asv-name">{s.name}</span>
                          <span className="asv-email">{s.email}</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="asv-batch-chip">{s.batch}</span></td>
                    <td className="asv-course-name">{s.course}</td>
                    <td>
                      <div className="asv-progress-cell">
                        <div className="asv-prog-bar-bg">
                          <motion.div className="asv-prog-bar-fill"
                            style={{ background: pc, width: `${s.progress}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${s.progress}%` }}
                            transition={{ duration: 0.8, delay: i * 0.04 }} />
                        </div>
                        <span style={{ color: pc, fontWeight: 700, fontSize: "0.8rem" }}>{s.progress}%</span>
                      </div>
                    </td>
                    <td>
                      <span className="asv-score"
                        style={{ color: s.score >= 80 ? "#10b981" : s.score >= 60 ? "#f59e0b" : "#ef4444" }}>
                        {s.score}/100
                      </span>
                    </td>
                    <td>
                      <span className="asv-status-tag"
                        style={{ background: st.bg, color: st.color }}>
                        {s.status}
                      </span>
                    </td>
                    <td className="asv-enrolled-date">
                      <Clock size={12} />{s.enrolled}
                    </td>
                    <td>
                      <button className="icon-btn-mini"><MoreVertical size={16} /></button>
                    </td>
                  </motion.tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="asv-empty">
                    <AlertCircle size={20} />
                    <span>No students match your search.</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="asv-table-footer">
          <span>Showing <b>{filtered.length}</b> of <b>{ADMIN_STUDENTS.length}</b> students</span>
        </div>
      </div>
    </div>
  );
};

export default AdminStudentsView;
