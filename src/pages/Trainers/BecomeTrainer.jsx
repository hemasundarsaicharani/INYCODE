import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Heart, Star, Briefcase, Mail } from "lucide-react";
import "./BecomeTrainer.css";

const benefits = [
    {
        icon: <GraduationCap size={28} />,
        title: "Share Your Knowledge",
        desc: "Join our team of expert trainers and share your knowledge with students who are eager to learn and build their careers in the technology industry.",
        color: "#0ea5e9"
    },
    {
        icon: <Users size={28} />,
        title: "Mentorship",
        desc: "Guide the next generation of developers. Provide feedback, answer questions, and help students overcome technical challenges.",
        color: "#818cf8"
    },
    {
        icon: <Heart size={28} />,
        title: "Make an Impact",
        desc: "Transform lives through education. See your students grow from beginners to professional developers at leading tech companies.",
        color: "#22d3ee"
    }
];

const BecomeTrainer = () => {
    return (
        <div className="become-trainer-page">
            <div className="bt-decor">
                <div className="blob blob-1" style={{ width: 600, height: 600, top: "-10%", left: "10%" }} />
                <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "-5%", right: "5%" }} />
            </div>

            <div className="container-custom">
                <motion.div 
                    className="bt-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">✨ &nbsp;Join Us</div>
                    <h1 className="section-title">Become a <span className="gradient-text">Trainer</span></h1>
                    <p className="section-subtitle">
                        Empower the next generation of tech leaders. Join our elite community of mentors.
                    </p>
                </motion.div>

                <div className="bt-grid">
                    {benefits.map((item, i) => (
                        <motion.div 
                            key={item.title}
                            className="bt-card card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="bt-icon-wrap" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color }}>
                                {item.icon}
                            </div>
                            <h3 className="bt-card-title">{item.title}</h3>
                            <p className="bt-card-text">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="bt-cta-card card glass gradient-border"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="bt-cta-content">
                        <div className="bt-cta-badge">Open Positions</div>
                        <h2 className="bt-cta-title">Ready to start your journey?</h2>
                        <p className="bt-cta-text">
                            We are always looking for passionate experts in React, Python, Java, Data Science, and Cloud Technologies.
                        </p>
                        <div className="bt-cta-actions">
                            <button className="btn-primary">
                                <span>Apply Now</span>
                            </button>
                            <button className="btn-outline">
                                <Mail size={16} />
                                <span>Contact HR</span>
                            </button>
                        </div>
                    </div>
                    <div className="bt-cta-visual">
                        <div className="stat-pill card glass">
                            <Star size={16} color="#f59e0b" fill="#f59e0b" />
                            <span>Top Tier Benefits</span>
                        </div>
                        <div className="stat-pill card glass">
                            <Briefcase size={16} color="#38bdf8" />
                            <span>Flexible Hours</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BecomeTrainer;