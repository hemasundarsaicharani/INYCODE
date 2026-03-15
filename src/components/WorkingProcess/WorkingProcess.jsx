import React from "react";
import { motion } from "framer-motion";
import "./WorkingProcess.css";

const steps = [
  { num: "01", emoji: "🔍", title: "Choose A Course", desc: "Browse our catalog and select the perfect course to start your learning journey." },
  { num: "02", emoji: "🛒", title: "Enroll & Access", desc: "Secure your spot and unlock all lessons, projects, and mentor sessions instantly." },
  { num: "03", emoji: "💡", title: "Learn & Build", desc: "Complete hands-on projects, earn certificates, and get placement assistance." },
];

const WorkingProcess = () => (
  <section className="process-section section-padding">
    <div className="container-custom">

      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <div className="section-badge" style={{ margin: "0 auto 1rem" }}>🔄 &nbsp;How It Works</div>
        <h2 className="section-title">
          Simple <span className="gradient-text">3-Step</span> Process
        </h2>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          From choosing a course to landing your dream job — we make it seamless.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step, i) => (
          <React.Fragment key={step.num}>
            <motion.div
              className="process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="process-num">{step.num}</div>
              <div className="process-emoji-ring">
                <span>{step.emoji}</span>
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </motion.div>

            {/* Connector arrow between cards */}
            {i < steps.length - 1 && (
              <div className="process-connector">→</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom image CTA */}
      <motion.div
        className="process-image-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="process-image-inner">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
            alt="Students collaborating"
            loading="lazy"
          />
          <div className="process-image-overlay">
            <div className="process-image-badge">
              <span>🎓</span>
              <div>
                <div style={{ fontWeight: 700 }}>Ready to start?</div>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Join 120k+ students</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

export default WorkingProcess;