import React from "react";
import { motion } from "framer-motion";
import "./About.css";

import bookImg from "../../assets/book.jpg";
import eduImg from "../../assets/education.jpg";
import storyImg from "../../assets/story.jpg";

const About = () => {
  const sections = [
    {
      title: "Who We Are",
      icon: "📄",
      text: "INFYCODE is a professional learning platform dedicated to helping students build strong technical skills in programming, web development, and modern technologies.",
      img: bookImg,
      reverse: false
    },
    {
      title: "Our Education",
      icon: "🏛",
      text: "INFYCODE provides structured learning programs designed to bridge the gap between academic knowledge and real-world development skills.",
      img: eduImg,
      reverse: true
    },
    {
      title: "Our Story",
      icon: "☂",
      text: "INFYCODE started with a vision to provide accessible and high-quality technology education for everyone.",
      img: storyImg,
      reverse: false
    }
  ];

  return (
    <div className="about-page-modern">
      {/* Background Blobs */}
      <div className="about-blobs">
        <div className="blob blob-1" style={{ width: 400, height: 400, top: "10%", left: "-5%" }} />
        <div className="blob blob-2" style={{ width: 300, height: 300, bottom: "10%", right: "-5%" }} />
      </div>

      <div className="container-custom">
        {/* Page Header */}
        <motion.div 
          className="about-header-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">✨ &nbsp;Discover Our Journey</div>
          <h1 className="section-title">About <span className="gradient-text">INFYCODE</span></h1>
          <p className="section-subtitle">
            Leading the way in technical education and professional growth.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="about-sections-grid">
          {sections.map((sec, i) => (
            <motion.div 
              key={sec.title}
              className={`about-row ${sec.reverse ? 'row-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="about-img-wrap">
                <motion.div 
                  className="img-inner gradient-border"
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={sec.img} alt={sec.title} loading="lazy" />
                </motion.div>
                <div className="img-glow" />
              </div>

              <div className="about-content-card card glass">
                <div className="about-icon-circle">{sec.icon}</div>
                <h2 className="about-card-title">{sec.title}</h2>
                <p className="about-card-text">{sec.text}</p>
                <motion.button 
                  className="btn-outline"
                  whileHover={{ x: 5 }}
                  style={{ gap: '0.75rem', padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                >
                  Read Detailed Story <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;