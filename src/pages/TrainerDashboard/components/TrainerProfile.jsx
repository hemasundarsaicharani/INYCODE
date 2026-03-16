import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Plus,
  Edit2,
  Check,
  TrendingUp,
  BookOpen,
  Users as UsersIcon,
  MessageSquare,
  BarChart3
} from "lucide-react";
import "./TrainerProfile.css";

const TrainerProfile = ({ user }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("Passionate educator and software architect with over 10 years of experience in building scalable web applications. I specialize in modern JavaScript frameworks and cloud infrastructure. At INFYCODE, I've mentored over 1000+ students transitioning into high-growth tech roles.");

  const achievements = [
    { title: "Top Rated Instructor 2025", icon: <Star size={20} />, color: "#f59e0b" },
    { title: "50+ Successful Batches", icon: <Award size={20} />, color: "#10b981" },
    { title: "Certified React Expert", icon: <Globe size={20} />, color: "#38bdf8" },
    { title: "Industry Mentor Award", icon: <Briefcase size={20} />, color: "#818cf8" }
  ];

  const stats = [
    { label: "Course Rating", value: "4.9/5", icon: <Star size={20} />, color: "#f59e0b" },
    { label: "Total Students", value: "1.2k+", icon: <UsersIcon size={20} />, color: "#38bdf8" },
    { label: "Courses Published", value: "12", icon: <BookOpen size={20} />, color: "#818cf8" },
    { label: "Teaching Hours", value: "2.5k+", icon: <TrendingUp size={20} />, color: "#10b981" }
  ];

  const experience = [
    { role: "Senior Full Stack Architect", company: "Tech Giants Inc.", period: "2021 - Present", desc: "Leading the architectural design of enterprise-scale microservices." },
    { role: "Lead Web Developer", company: "DevStudio", period: "2018 - 2021", desc: "Managed a team of 15 developers for high-traffic e-commerce solutions." },
    { role: "Frontend Developer", company: "InnoSoft", period: "2015 - 2018", desc: "Built responsive user interfaces for a variety of SaaS platforms." }
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: <User size={16} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
    { id: "statistics", label: "Statistics", icon: <TrendingUp size={16} /> },
    { id: "reviews", label: "Reviews", icon: <MessageSquare size={16} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="trainer-profile-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="profile-container">
        
        {/* Profile Header Card */}
        <div className="profile-header-card card glass">
          <div className="profile-cover-image"></div>
          
          <div className="profile-header-content">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                <User size={64} />
              </div>
              <button className="avatar-edit-btn">
                <Plus size={16} />
              </button>
            </div>
            
            <div className="profile-header-details">
              <div className="details-main">
                <h1 className="trainer-name">{user?.username || "Senior Instructor"}</h1>
                <p className="trainer-designation">Senior Full Stack Developer & Lead Instructor</p>
                
                <div className="trainer-meta">
                  <span className="meta-item"><MapPin size={14} /> Hyderabad, India</span>
                  <span className="meta-item"><Mail size={14} /> trainer@infycode.com</span>
                  <span className="meta-item"><Globe size={14} /> infycode.edu</span>
                </div>
              </div>
              
              <div className="details-actions">
                <div className="social-links-row">
                  <button className="social-icon-btn glass"><Github size={18} /></button>
                  <button className="social-icon-btn glass"><Linkedin size={18} /></button>
                  <button className="social-icon-btn glass"><Twitter size={18} /></button>
                </div>
                <button 
                  className={`btn-primary ${isEditing ? 'success' : ''}`}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? <><Check size={18} /> <span>Save Profile</span></> : <><Edit2 size={18} /> <span>Edit Profile</span></>}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs-wrapper">
          <div className="profile-tabs">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`profile-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div className="active-tab-indicator" layoutId="activeTabIndicator" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="profile-content-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "overview" && (
                <div className="overview-grid">
                  <div className="overview-main">
                    <div className="content-card glass">
                      <h3 className="section-title">Professional Bio</h3>
                      {isEditing ? (
                        <textarea 
                          className="bio-editor"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        />
                      ) : (
                        <p className="bio-content">{bio}</p>
                      )}
                    </div>

                    <div className="stats-cards-grid">
                      {stats.map((stat, i) => (
                        <motion.div key={i} className="stat-card glass" variants={itemVariants}>
                          <div className="stat-icon-wrapper" style={{ color: stat.color, background: `${stat.color}15` }}>
                            {stat.icon}
                          </div>
                          <div className="stat-details">
                            <span className="stat-number">{stat.value}</span>
                            <span className="stat-text">{stat.label}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="overview-sidebar">
                    <div className="content-card glass">
                      <h3 className="section-title">Achievements</h3>
                      <div className="achievement-list">
                        {achievements.map((item, i) => (
                          <div key={i} className="achieve-row">
                            <div className="achieve-icon" style={{ color: item.color, background: `${item.color}15` }}>
                              {item.icon}
                            </div>
                            <span className="achieve-text">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="content-card glass">
                      <h3 className="section-title">Featured Skills</h3>
                      <div className="skills-flex">
                        {['React', 'Node.js', 'TypeScript', 'GraphQL', 'Docker', 'AWS', 'Next.js'].map(skill => (
                          <span key={skill} className="skill-badge">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="content-card glass full-width">
                  <h3 className="section-title">Work & Teaching Experience</h3>
                  <div className="timeline-container">
                    {experience.map((item, i) => (
                      <div key={i} className="timeline-row">
                        <div className="timeline-graphic">
                          <div className="timeline-node"></div>
                          {i !== experience.length - 1 && <div className="timeline-connector"></div>}
                        </div>
                        <div className="timeline-details card glass">
                          <div className="timeline-header">
                            <h4 className="timeline-role">{item.role}</h4>
                            <span className="timeline-badge">{item.period}</span>
                          </div>
                          <p className="timeline-company">{item.company}</p>
                          <p className="timeline-description">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "statistics" && (
                <div className="content-card glass full-width text-center">
                  <div className="stats-header-flex">
                    <h3 className="section-title" style={{ marginBottom: 0 }}>Student Growth</h3>
                    <span className="stats-period">Jan - Jul 2026</span>
                  </div>
                  <div className="analytics-placeholder">
                    <div className="dummy-chart">
                      {[
                        { m: 'Jan', v: 45 }, 
                        { m: 'Feb', v: 72 }, 
                        { m: 'Mar', v: 88 }, 
                        { m: 'Apr', v: 110 }, 
                        { m: 'May', v: 95 }, 
                        { m: 'Jun', v: 130 }, 
                        { m: 'Jul', v: 156 }
                      ].map((data, i) => (
                        <div key={i} className="dummy-bar-wrapper">
                          <motion.span 
                            className="dummy-bar-value"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i * 0.1) + 0.5 }}
                          >
                            {data.v}
                          </motion.span>
                          <motion.div 
                            className="dummy-bar" 
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.v / 160) * 100}%` }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                          />
                          <span className="dummy-bar-label">{data.m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="content-card glass full-width">
                  <h3 className="section-title">Student Testimonials</h3>
                  <div className="reviews-grid">
                    {[
                      { name: "Rahul S.", rating: 5, text: "Excellent teaching style! The complex concepts were explained very simply. Highly recommended for React beginners and advanced alike." },
                      { name: "Priya K.", rating: 5, text: "The project-based approach helped me land my first Software Developer role. Best mentor I've ever had." },
                      { name: "Amit J.", rating: 4, text: "Great insights into system design. The assignments are challenging but very rewarding." }
                    ].map((rev, i) => (
                      <div key={i} className="review-card glass">
                        <div className="review-stars">
                          {[...Array(rev.rating)].map((_, idx) => <Star key={idx} size={16} fill="#f59e0b" color="#f59e0b" />)}
                        </div>
                        <p className="review-comment">"{rev.text}"</p>
                        <h4 className="review-author">- {rev.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
};

export default TrainerProfile;
