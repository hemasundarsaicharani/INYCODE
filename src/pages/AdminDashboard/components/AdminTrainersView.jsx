import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  MapPin, 
  Star, 
  BookOpen, 
  MoreVertical,
  Mail,
  UserCheck
} from "lucide-react";
import "./AdminTrainersView.css";

const ADMIN_TRAINERS = [
  { id: 1, name: "Dr. Aris", expertise: "Full Stack Dev", batches: 4, rating: 4.8, status: "Active", email: "aris@infycode.com" },
  { id: 2, name: "Sarah Connor", expertise: "Cyber Security", batches: 2, rating: 4.9, status: "On Leave", email: "sarah@infycode.com" },
  { id: 3, name: "John Wick", expertise: "Backend Systems", batches: 5, rating: 5.0, status: "Active", email: "john@infycode.com" },
  { id: 4, name: "Elena Rodriguez", expertise: "UI/UX Design", batches: 3, rating: 4.7, status: "Active", email: "elena@infycode.com" },
  { id: 5, name: "James Miller", expertise: "Data Science", batches: 6, rating: 4.8, status: "Active", email: "james@infycode.com" },
  { id: 6, name: "Sophia Chen", expertise: "React & Next.js", batches: 3, rating: 4.9, status: "Active", email: "sophia@infycode.com" },
  { id: 7, name: "Marcus Thorne", expertise: "DevOps Engineering", batches: 4, rating: 4.6, status: "Active", email: "marcus@infycode.com" },
  { id: 8, name: "Isabella V.", expertise: "Mobile Apps (Flutter)", batches: 2, rating: 4.7, status: "On Leave", email: "isabella@infycode.com" },
  { id: 9, name: "David Gupta", expertise: "Java Microservices", batches: 5, rating: 4.8, status: "Active", email: "david@infycode.com" },
  { id: 10, name: "Emma Wilson", expertise: "Digital Marketing", batches: 3, rating: 4.5, status: "Active", email: "emma@infycode.com" },
  { id: 11, name: "Kevin Park", expertise: "Python & AI", batches: 4, rating: 4.9, status: "Active", email: "kevin@infycode.com" },
  { id: 12, name: "Laura Croft", expertise: "Cloud Computing", batches: 3, rating: 4.8, status: "Active", email: "laura@infycode.com" },
  { id: 13, name: "Steve Rogers", expertise: "Cyber Security", batches: 5, rating: 5.0, status: "Active", email: "steve@infycode.com" },
];

const AdminTrainersView = () => {
    return (
        <div className="admin-trainers-container">
            <div className="section-header">
                <div>
                   <h2 className="gradient-text">Trainer Management</h2>
                   <p>Monitor instructor performance, batch allocations, and recruitment status.</p>
                </div>
                <button className="btn-primary mini-btn">Add New Trainer</button>
            </div>

            <div className="trainers-grid-premium mt-8">
                {ADMIN_TRAINERS.map((trainer, i) => (
                    <motion.div 
                        key={trainer.id}
                        className="trainer-card-pro card glass"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="t-card-header">
                           <div className="t-avatar-large"><Users size={24} /></div>
                           <div className="t-status-badge" data-status={trainer.status.toLowerCase().replace(' ', '-')}>{trainer.status}</div>
                        </div>
                        <div className="t-card-body">
                           <h3>{trainer.name}</h3>
                           <span className="expertise-text">{trainer.expertise}</span>
                           <div className="t-meta-row">
                              <div className="item"><BookOpen size={14} /> <span>{trainer.batches} Batches</span></div>
                              <div className="item"><Star size={14} fill="#f59e0b" stroke="#f59e0b" /> <span>{trainer.rating}</span></div>
                           </div>
                           <div className="t-contact-info">
                              <Mail size={14} />
                              <span>{trainer.email}</span>
                           </div>
                        </div>
                        <div className="t-card-footer">
                           <button className="btn-outline w-full">View Full Profile</button>
                           <button className="icon-btn-glass"><MoreVertical size={18} /></button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AdminTrainersView;
