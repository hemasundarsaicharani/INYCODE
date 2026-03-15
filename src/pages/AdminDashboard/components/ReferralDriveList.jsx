import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  DollarSign, 
  ExternalLink, 
  Building2,
  Users,
  Plus,
  Rocket
} from "lucide-react";
import "./ReferralDriveList.css";

const DRIVES = [
  { id: 1, company: "Tech Solutions Corp", role: "Frontend Developer", location: "Global (Remote)", salary: "8-12 LPA", deadline: "20 Mar 2026", status: "Active", applicants: 45, logo: "TS" },
  { id: 2, company: "InnoSoft Systems", role: "Software Engineer", location: "Hyderabad, India", salary: "6-10 LPA", deadline: "15 Mar 2026", status: "Ending Soon", applicants: 120, logo: "IS" },
  { id: 3, company: "CloudNexus AI", role: "DevOps Intern", location: "Bangalore, India", salary: "30k-45k/mo", deadline: "25 Mar 2026", status: "Upcoming", applicants: 0, logo: "CN" },
  { id: 4, company: "WebFlow Inc", role: "UI/UX Designer", location: "Global (Remote)", salary: "7-11 LPA", deadline: "18 Mar 2026", status: "Active", applicants: 32, logo: "WF" },
];

const ReferralDriveList = () => {
  return (
    <div className="referral-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Referral & Placement Drives</h2>
          <p>Manage corporate tie-ups, post referral links, and track student applications.</p>
        </div>
        <button className="btn-primary mini-btn">
          <Plus size={18} />
          <span>Post New Drive</span>
        </button>
      </div>

      <div className="drive-stats-row mb-8">
         <div className="stat-highlight card glass">
            <div className="sh-icon"><Rocket size={24} /></div>
            <div className="sh-info">
               <span className="lbl">Ongoing Drives</span>
               <span className="val">08 Active</span>
            </div>
         </div>
         <div className="stat-highlight card glass">
            <div className="sh-icon"><Building2 size={24} /></div>
            <div className="sh-info">
               <span className="lbl">Partner Companies</span>
               <span className="val">45+ Brands</span>
            </div>
         </div>
         <div className="stat-highlight card glass">
            <div className="sh-icon"><Users size={24} /></div>
            <div className="sh-info">
               <span className="lbl">Students Placed</span>
               <span className="val">120 This Month</span>
            </div>
         </div>
      </div>

      <div className="drives-grid">
         {DRIVES.map((drive, i) => (
           <motion.div 
             key={drive.id} 
             className="drive-card card glass"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
           >
              <div className="drive-header">
                 <div className="company-logo">{drive.logo}</div>
                 <div className="company-info">
                    <h3 className="role-name">{drive.role}</h3>
                    <span className="company-name">{drive.company}</span>
                 </div>
                 <span className={`status-tag ${drive.status.toLowerCase().replace(' ', '-')}`}>{drive.status}</span>
              </div>

              <div className="drive-details">
                 <div className="d-meta">
                    <MapPin size={14} />
                    <span>{drive.location}</span>
                 </div>
                 <div className="d-meta">
                    <DollarSign size={14} />
                    <span>{drive.salary}</span>
                 </div>
                 <div className="d-meta">
                    <Calendar size={14} />
                    <span>Deadline: {drive.deadline}</span>
                 </div>
                 <div className="d-meta">
                    <Users size={14} />
                    <span>Applicants: {drive.applicants}</span>
                 </div>
              </div>

              <div className="drive-footer">
                 <button className="btn-secondary mini-btn w-full">Manage Applicants</button>
                 <button className="btn-icon-link"><ExternalLink size={20} /></button>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default ReferralDriveList;
