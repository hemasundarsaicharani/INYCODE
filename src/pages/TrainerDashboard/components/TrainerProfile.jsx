import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  MapPin, 
  Mail, 
  Globe, 
  Award, 
  Briefcase, 
  GraduationCap,
  Star,
  Github,
  Linkedin,
  Twitter,
  Plus
} from "lucide-react";
import "./TrainerProfile.css";

const TrainerProfile = ({ user }) => {
  const achievements = [
    { title: "Top Rated Instructor 2025", icon: <Star size={20} />, color: "#f59e0b" },
    { title: "50+ Successful Batches", icon: <Award size={20} />, color: "#10b981" },
    { title: "Certified React Expert", icon: <Globe size={20} />, color: "#38bdf8" },
    { title: "Industry Mentor Award", icon: <Briefcase size={20} />, color: "#818cf8" }
  ];

  const experience = [
    { role: "Senior Full Stack Architect", company: "Tech Giants Inc.", period: "2021 - Present" },
    { role: "Lead Web Developer", company: "DevStudio", period: "2018 - 2021" },
    { role: "Frontend Developer", company: "InnoSoft", period: "2015 - 2018" }
  ];

  return (
    <div className="trainer-profile-container">
      <div className="profile-hero card glass">
        <div className="profile-banner" />
        <div className="profile-header-main">
          <div className="profile-avatar-large">
            <User size={64} />
            <div className="edit-badge"><Plus size={16} /></div>
          </div>
          <div className="profile-basic-info">
            <h1 className="trainer-name">{user?.username || "Senior Instructor"}</h1>
            <p className="trainer-title">Senior Full Stack Developer & Lead Instructor</p>
            <div className="info-chips">
              <span className="info-chip"><MapPin size={14} /> Hyderabad, India</span>
              <span className="info-chip"><Mail size={14} /> trainer@infycode.com</span>
              <span className="info-chip"><Globe size={14} /> infycode.edu/mentors/trainer</span>
            </div>
          </div>
          <div className="profile-actions">
            <button className="btn-primary">Edit Profile</button>
            <div className="social-links">
              <button className="social-btn glass"><Github size={18} /></button>
              <button className="social-btn glass"><Linkedin size={18} /></button>
              <button className="social-btn glass"><Twitter size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-side">
          <div className="profile-section card glass">
            <h3>Key Achievements</h3>
            <div className="achievements-list">
              {achievements.map((item, i) => (
                <div key={i} className="achievement-item">
                  <div className="ach-icon" style={{ color: item.color, background: `${item.color}15` }}>
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section card glass">
            <h3>Skills & Expertise</h3>
            <div className="skills-cloud">
              {['React', 'Node.js', 'TypeScript', 'GraphQL', 'Docker', 'AWS', 'System Design', 'Python'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-main">
          <div className="profile-section card glass">
            <h3>Professional Bio</h3>
            <p className="bio-text">
              Passionate educator and software architect with over 10 years of experience in building scalable web applications. 
              I specialize in modern JavaScript frameworks and cloud infrastructure. At INFYCODE, I've mentored over 1000+ students 
              transitioning into high-growth tech roles.
            </p>
            <p className="bio-text">
              My teaching philosophy focuses on project-based learning and industry best practices, ensuring students are "job-ready" from day one.
            </p>
          </div>

          <div className="profile-section card glass">
            <h3>Experience</h3>
            <div className="experience-timeline">
              {experience.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4>{item.role}</h4>
                    <p className="exp-company">{item.company}</p>
                    <p className="exp-period">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section card glass">
            <h3>Education</h3>
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>M.Tech in Computer Science</h4>
                  <p className="exp-company">IIT Hyderabad</p>
                  <p className="exp-period">2013 - 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;
