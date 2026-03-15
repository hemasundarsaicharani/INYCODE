import React from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  MessageSquare, 
  User, 
  Shield, 
  ThumbsUp, 
  AlertCircle,
  Search,
  Filter
} from "lucide-react";
import "./StudentFeedback.css";

const FEEDBACKS = [
  { id: 1, student: "Amit K.", trainer: "Mohan Kumar", course: "Full Stack", rating: 5, comment: "Excellent teaching style, explained concepts very clearly.", date: "12 Mar 2026" },
  { id: 2, student: "Priya V.", trainer: "Sneha Reddy", course: "UI/UX Design", rating: 4, comment: "Great projects, but would love more industry case studies.", date: "11 Mar 2026" },
  { id: 3, student: "Rahul S.", trainer: "Mohan Kumar", course: "Full Stack", rating: 5, comment: "The hands-on practice sessions are amazing!", date: "10 Mar 2026" },
  { id: 4, student: "Ananya P.", trainer: "Elena Rodriguez", course: "UI/UX Case Study", rating: 5, comment: "The design principles covered were very helpful for my portfolio.", date: "09 Mar 2026" },
  { id: 5, student: "Vikram R.", trainer: "James Miller", course: "Data Science", rating: 4, comment: "Deep analysis techniques were explained well, very practical.", date: "08 Mar 2026" },
  { id: 6, student: "Sanjana T.", trainer: "Sophia Chen", course: "React Development", rating: 5, comment: "State management concepts are now crystal clear. Thank you Sophia!", date: "07 Mar 2026" },
  { id: 7, student: "Karan M.", trainer: "Marcus Thorne", course: "DevOps", rating: 4, comment: "CI/CD pipelines were a bit complex, but Marcus made it easy to follow.", date: "06 Mar 2026" },
  { id: 8, student: "Megha S.", trainer: "Isabella V.", course: "Mobile Apps", rating: 5, comment: "Flutter development is fun! Isabella is a great mentor.", date: "05 Mar 2026" },
  { id: 9, student: "Arjun D.", trainer: "David Gupta", course: "Backend Systems", rating: 4, comment: "Database optimization session was eye-opening.", date: "04 Mar 2026" },
  { id: 10, student: "Ritu G.", trainer: "Emma Wilson", course: "Digital Marketing", rating: 5, comment: "SEO strategies discussed are already showing results!", date: "03 Mar 2026" },
  { id: 11, student: "Siddharth N.", trainer: "Kevin Park", course: "Python & AI", rating: 5, comment: "Machine Learning models implementation was explained brilliantly.", date: "02 Mar 2026" },
  { id: 12, student: "Neha B.", trainer: "Laura Croft", course: "Cloud Computing", rating: 4, comment: "AWS architecture overview was very comprehensive.", date: "01 Mar 2026" },
  { id: 13, student: "Akash J.", trainer: "Steve Rogers", course: "Cyber Security", rating: 5, comment: "Security audits workshop was the best session so far.", date: "28 Feb 2026" },
];

const StudentFeedback = () => {
  return (
    <div className="feedback-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Student Feedback</h2>
          <p>Monitor platform-wide feedback, trainer ratings, and student satisfaction.</p>
        </div>
        <div className="header-actions">
           <div className="search-box glass">
              <Search size={18} />
              <input type="text" placeholder="Search by trainer or course..." />
           </div>
        </div>
      </div>

      <div className="feedback-summary-row mb-8">
         {[
           { label: "Platform Rating", value: "4.8", icon: <Star size={20} fill="#f59e0b" />, color: "#f59e0b" },
           { label: "Monthly Reviews", value: "324", icon: <MessageSquare size={20} />, color: "#38bdf8" },
           { label: "Positive Sentiment", value: "92%", icon: <ThumbsUp size={20} />, color: "#10b981" },
           { label: "Action Items", value: "04", icon: <AlertCircle size={20} />, color: "#f43f5e" }
         ].map((stat, i) => (
           <div key={i} className="mini-stat-card card glass">
              <div className="stat-row">
                 <div className="stat-icon" style={{ color: stat.color, background: `${stat.color}15` }}>{stat.icon}</div>
                 <span className="val">{stat.value}</span>
              </div>
              <span className="lbl">{stat.label}</span>
           </div>
         ))}
      </div>

      <div className="feedback-list">
         {FEEDBACKS.map((f, i) => (
           <motion.div 
             key={f.id} 
             className="feedback-card card glass"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.1 }}
           >
              <div className="f-header">
                 <div className="f-user">
                    <div className="f-avatar"><User size={18} /></div>
                    <div className="f-user-info">
                       <span className="name">{f.student}</span>
                       <span className="date">{f.date}</span>
                    </div>
                 </div>
                 <div className="f-rating">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={14} fill={star <= f.rating ? "#f59e0b" : "none"} stroke={star <= f.rating ? "#f59e0b" : "currentColor"} />
                    ))}
                 </div>
              </div>

              <div className="f-context">
                 <div className="context-item">
                    <Shield size={14} />
                    <span>Trainer: <strong>{f.trainer}</strong></span>
                 </div>
                 <div className="context-item">
                    <Shield size={14} />
                    <span>Course: <strong>{f.course}</strong></span>
                 </div>
              </div>

              <p className="f-comment">"{f.comment}"</p>

              <div className="f-actions">
                 <button className="btn-text">Flag for Review</button>
                 <button className="btn-text-primary">Contact Student</button>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default StudentFeedback;
