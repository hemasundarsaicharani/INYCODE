import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Stats.css";

const statsData = [
  { icon: "👥", value: 120000, label: "Happy Students", suffix: "+" },
  { icon: "🎓", value: 17000, label: "Enrolled Learners", suffix: "+" },
  { icon: "🧑‍🏫", value: 500, label: "Expert Instructors", suffix: "+" },
  { icon: "🏆", value: 50000, label: "Awards Won", suffix: "+" },
];

const useCountUp = (end, duration = 2000, trigger) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); return; }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return count;
};

const formatNum = (n) => n >= 1000 ? (n / 1000).toFixed(n % 1000 === 0 ? 0 : 0) + "k" : n;

const StatItem = ({ icon, value, label, suffix, index }) => {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(value, 2000, triggered);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="stat-icon-ring">
        <span className="stat-icon">{icon}</span>
      </div>
      <div className="stat-value">
        {formatNum(count)}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const Stats = () => (
  <section className="stats-section section-padding">
    <div className="container-custom">
      <div className="stats-title-row">
        <div className="stats-line" />
        <h2 className="section-title" style={{ whiteSpace: "nowrap" }}>
          Trusted by <span className="gradient-text">Thousands</span>
        </h2>
        <div className="stats-line" />
      </div>
      <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
        Achievements that speak for themselves — built on results and student success.
      </p>
      <div className="stats-grid">
        {statsData.map((s, i) => <StatItem key={s.label} {...s} index={i} />)}
      </div>
    </div>
  </section>
);

export default Stats;