import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Video, Tag, Headphones } from "lucide-react";
import "./Features.css";

const features = [
  {
    num: "01",
    icon: <UserCheck size={24} />,
    title: "Exclusive Advisor",
    desc: "Get personalized guidance from experienced advisors to choose the right learning path and achieve your career goals.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    num: "02",
    icon: <Video size={24} />,
    title: "Video Tutorials",
    desc: "Learn anytime, anywhere with high-quality video tutorials designed to make complex topics simple and easy to understand.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    num: "03",
    icon: <Tag size={24} />,
    title: "Affordable Price",
    desc: "Access premium courses and expert training at an affordable price — quality education designed for every learner.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    num: "04",
    icon: <Headphones size={24} />,
    title: "Lifetime Support",
    desc: "Enjoy lifetime support and continuous guidance to help you succeed throughout your entire learning journey.",
    gradient: "from-orange-500 to-amber-600",
  },
];

const Features = () => (
  <section className="features-section section-padding">
    <div className="container-custom">

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-badge" style={{ margin: "0 auto 1rem" }}>✨ &nbsp;Why InfyCode</div>
        <h2 className="section-title">
          One Platform, <span className="gradient-text">Many Benefits</span>
        </h2>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Everything you need to learn, grow, and launch your tech career in one place.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div
            key={f.num}
            className="feature-card card gradient-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
          >
            <div className="feature-num">{f.num}</div>
            <div className="feature-icon-wrap">
              <div className="feature-icon">{f.icon}</div>
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;