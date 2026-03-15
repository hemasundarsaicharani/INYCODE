import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Users, Zap, Shield, HelpCircle, CheckCircle2 } from "lucide-react";
import "./Interview.css";

const interviewData = [
    {
        icon: <Zap size={28} />,
        title: "Technical Training",
        desc: "Deep dive into data structures, algorithms, and domain-specific technical questions. We cover everything from core basics to advanced problem-solving.",
        color: "#0ea5e9"
    },
    {
        icon: <Users size={28} />,
        title: "Mock Interviews",
        desc: "Simulate real interview environments with industry experts. Get detailed feedback on your performance, body language, and technical accuracy.",
        color: "#818cf8"
    },
    {
        icon: <MessageSquare size={28} />,
        title: "Communication Skills",
        desc: "Master the art of articulating your thoughts clearly. We help you with self-introduction, project explanation, and behavioral questions.",
        color: "#22d3ee"
    },
    {
        icon: <Shield size={28} />,
        title: "HR Preparation",
        desc: "Learn how to handle HR rounds with confidence. Prepare for questions on career goals, strengths, weaknesses, and cultural fit.",
        color: "#f59e0b"
    }
];

const Interview = () => {
    return (
        <div className="interview-page-modern">
            <div className="int-decor">
                <div className="blob blob-1" style={{ width: 600, height: 600, top: "-10%", left: "20%" }} />
                <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "-5%", right: "10%" }} />
            </div>

            <div className="container-custom">
                <motion.div 
                    className="int-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">🎯 &nbsp;Interview Ready</div>
                    <h1 className="section-title">Interview <span className="gradient-text">Preparation</span></h1>
                    <p className="section-subtitle">
                        Turn every interview into an offer with our comprehensive preparation framework.
                    </p>
                </motion.div>

                <div className="int-grid">
                    {interviewData.map((item, i) => (
                        <motion.div 
                            key={item.title}
                            className="int-card card glass gradient-border"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="int-icon-box" style={{ background: `${item.color}15`, color: item.color }}>
                                {item.icon}
                            </div>
                            <h3 className="int-card-title">{item.title}</h3>
                            <p className="int-card-text">{item.desc}</p>
                            <div className="int-card-footer">
                                <CheckCircle2 size={14} color={item.color} />
                                <span>Curated by Experts</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="int-faq-incentive card glass"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="faq-icon-wrap"><HelpCircle size={32} color="#38bdf8" /></div>
                    <div className="faq-text-content">
                        <h4>Have specific questions?</h4>
                        <p>Our mentors are available 24/7 to help you with last-minute interview tips and technical doubts.</p>
                    </div>
                    <button className="btn-primary">Book a session</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Interview;