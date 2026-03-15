import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Explore.css";

const categories = [
  { emoji: "⚛️", label: "React & MERN", courses: 12 },
  { emoji: "🐍", label: "Python", courses: 8 },
  { emoji: "☕", label: "Java", courses: 7 },
  { emoji: "🤖", label: "AI & Machine Learning", courses: 10 },
  { emoji: "📊", label: "Data Science", courses: 9 },
  { emoji: "🌐", label: "Web Development", courses: 14 },
  { emoji: "☁️", label: "Cloud & DevOps", courses: 6 },
  { emoji: "🔐", label: "Cybersecurity", courses: 5 },
];

const Explore = () => {
  const navigate = useNavigate();

  return (
    <section className="explore-section section-padding">
      <div className="container-custom">

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 1rem" }}>🗂️ &nbsp;Browse Categories</div>
          <h2 className="section-title">
            Explore <span className="gradient-text">Topics</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Find the right track for your career — from web dev to AI and beyond.
          </p>
        </div>

        <div className="explore-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="explore-chip"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/courses")}
            >
              <span className="explore-emoji">{cat.emoji}</span>
              <div className="explore-info">
                <span className="explore-label">{cat.label}</span>
                <span className="explore-count">{cat.courses} courses</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Explore;