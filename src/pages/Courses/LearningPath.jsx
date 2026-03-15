import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, UserPlus, Code2, Rocket, Briefcase } from "lucide-react";
import "./LearningPath.css";

const steps = [
    {
        icon: <UserPlus size={24} />,
        title: "Foundation",
        subtitle: "Step 1",
        desc: "Begin with core programming fundamentals and concepts. Build a solid base for advanced topics.",
        color: "#38bdf8"
    },
    {
        icon: <Code2 size={24} />,
        title: "Hands-on Practice",
        subtitle: "Step 2",
        desc: "Apply your knowledge through intensive coding exercises and real-world assignments.",
        color: "#818cf8"
    },
    {
        icon: <Rocket size={24} />,
        title: "Advanced Projects",
        subtitle: "Step 3",
        desc: "Develop industry-simulated projects to gain practical experience and build a portfolio.",
        color: "#22d3ee"
    },
    {
        icon: <Briefcase size={24} />,
        title: "Career-Ready",
        subtitle: "Step 4",
        desc: "Get prepared for job opportunities with resume building and interview coaching.",
        color: "#f59e0b"
    }
];

const LearningPath = () => {
    return (
        <div className="learning-path-page">
            <div className="path-decor">
                <div className="blob blob-1" style={{ width: 600, height: 600, top: "0%", right: "0%" }} />
                <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "0%", left: "0%" }} />
            </div>

            <div className="container-custom">
                <motion.div 
                    className="path-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">🗺️ &nbsp;Roadmap</div>
                    <h1 className="section-title">Your Learning <span className="gradient-text">Journey</span></h1>
                    <p className="section-subtitle">
                        A structured path from beginner to industry-standard professional.
                    </p>
                </motion.div>

                <div className="path-timeline">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={step.title}
                            className={`timeline-item ${i % 2 !== 0 ? 'item-reverse' : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <div className="timeline-content card glass">
                                <div className="step-tag" style={{ background: `${step.color}15`, color: step.color }}>
                                    {step.subtitle}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                                <div className="step-features">
                                    <div className="s-feat"><Check size={14} /> Expert Mentorship</div>
                                    <div className="s-feat"><Check size={14} /> Practical Lab Access</div>
                                </div>
                            </div>

                            <div className="timeline-dot-wrap">
                                <div className="timeline-dot" style={{ background: step.color }}>
                                    {step.icon}
                                </div>
                            </div>

                            <div className="timeline-spacer" />
                        </motion.div>
                    ))}
                    
                    {/* Progress line */}
                    <div className="timeline-line" />
                </div>
            </div>
        </div>
    );
};

export default LearningPath;