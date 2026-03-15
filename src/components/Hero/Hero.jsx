import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";
import logoIc from "../../assets/logo_ic.png";
import "./Hero.css";

const WORDS = ["Future Scholars", "Tech Leaders", "Innovators", "Problem Solvers"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex(i => (i + 1) % WORDS.length), 2500);
    return () => clearInterval(t);
  }, []);

  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      {/* Animated background blobs */}
      <div className="hero-blobs">
        <div className="blob blob-1" style={{ width: 500, height: 500, top: "-10%", left: "-10%" }} />
        <div className="blob blob-2" style={{ width: 400, height: 400, top: "40%", right: "-5%" }} />
        <div className="blob blob-3" style={{ width: 300, height: 300, bottom: "-5%", left: "30%" }} />
      </div>

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="hero-container">
        {/* Left content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="section-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Star size={12} fill="#38bdf8" /> &nbsp;#1 Rated EdTech Platform
          </motion.div>

          {/* Headline */}
          <h1 className="hero-title">
            Empowering
            <span className="hero-word-cycle">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="gradient-text"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </span>
            Through Education
          </h1>

          <p className="hero-subtitle">
            Master in-demand tech skills with expert-led courses in Full Stack Development, AI, Python, and more.
            Launch your career with real-world projects and guaranteed placement support.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <Link to="/courses" className="btn-primary">
              <span>Start Learning</span>
              <ArrowRight size={16} />
            </Link>
            <button className="btn-outline" onClick={scrollToCourses}>
              <Play size={14} />
              View Courses
            </button>
          </div>

          {/* Mini stats */}
          <div className="hero-stats">
            {[
              { icon: <Users size={16} />, val: "120k+", label: "Students" },
              { icon: <Star size={16} />, val: "4.9", label: "Rating" },
              { icon: <BookOpen size={16} />, val: "50+", label: "Courses" },
            ].map(({ icon, val, label }) => (
              <div key={label} className="hero-stat-chip">
                <span className="hero-stat-icon">{icon}</span>
                <span className="hero-stat-val">{val}</span>
                <span className="hero-stat-lbl">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Central card */}
          <div className="hero-card-main animate-float">
            <div className="hero-card-glow" />
            <div className="hero-card-brand">
                <div className="hero-brand-logo">
                    <img src={logoIc} alt="IC" />
                </div>
                <div className="hero-brand-text">
                    <div className="hero-brand-name gradient-text">INFYCODE</div>
                    <div className="hero-brand-divider"></div>
                    <div className="hero-brand-tagline">INFINITE LEARNING SOLUTIONS</div>
                </div>
            </div>
            <h3 className="hero-card-title">Learn. Build. Launch.</h3>
            <p className="hero-card-text" style={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
              Join 120,000+ students globally.<br/>
              Master in-demand tech skills.<br/>
              Build real-world projects and<br/>
              launch your dream career today.
            </p>
            <div className="hero-card-avatars">
              {["👩‍💻", "👨‍🎓", "👩‍🔬", "👨‍💼"].map((a, i) => (
                <span key={i} className="avatar">{a}</span>
              ))}
              <span className="avatar-count">+120k</span>
            </div>
          </div>

          {/* Floating badge 1 */}
          <motion.div
            className="hero-float-badge badge-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>🏆</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Top Rated</div>
              <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>EdTech 2025</div>
            </div>
          </motion.div>

          {/* Floating badge 2 */}
          <motion.div
            className="hero-float-badge badge-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span>⚡</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>100% Placement</div>
              <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>Assistance</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;