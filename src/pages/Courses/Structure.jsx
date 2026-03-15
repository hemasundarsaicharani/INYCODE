import React from "react";
import { motion } from "framer-motion";
import { Layers, Zap, Terminal, Rocket, CheckCircle2 } from "lucide-react";
import "./Structure.css";

const structureData = [
    {
        icon: <Layers size={24} />,
        title: "Fundamentals",
        desc: "Students start with basic concepts and foundations. This stage focuses on building a strong understanding of core programming and principles.",
        color: "#0ea5e9"
    },
    {
        icon: <Zap size={24} />,
        title: "Practical Learning",
        desc: "The course includes hands-on practice sessions where students work on coding exercises and small projects to strengthen understanding.",
        color: "#818cf8"
    },
    {
        icon: <Terminal size={24} />,
        title: "Real-Time Projects",
        desc: "Students work on real-world projects that simulate industry environments. This helps them gain practical experience and build a portfolio.",
        color: "#22d3ee"
    },
    {
        icon: <Rocket size={24} />,
        title: "Career Preparation",
        desc: "The final stage focuses on resume building, interview preparation, and career guidance to help students enter the workforce.",
        color: "#f59e0b"
    }
];

const Structure = () => {
    return (
        <div className="structure-page">
            <div className="structure-decor">
                <div className="blob blob-1" style={{ width: 400, height: 400, top: "20%", left: "-10%" }} />
                <div className="blob blob-2" style={{ width: 300, height: 300, bottom: "10%", right: "-5%" }} />
            </div>

            <div className="container-custom">
                <motion.div 
                    className="structure-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">📊 &nbsp;Curriculum</div>
                    <h1 className="section-title">Course <span className="gradient-text">Structure</span></h1>
                    <p className="section-subtitle">
                        A carefully crafted 4-stage roadmap to master any technology.
                    </p>
                </motion.div>

                <div className="structure-grid">
                    {structureData.map((item, i) => (
                        <motion.div 
                            key={item.title}
                            className="structure-card-modern card glass"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="struct-icon-wrap" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color }}>
                                {item.icon}
                            </div>
                            <div className="struct-content">
                                <h3 className="struct-title">
                                    <span className="struct-number">0{i+1}</span>
                                    {item.title}
                                </h3>
                                <p className="struct-text">{item.desc}</p>
                                <ul className="struct-list">
                                    <li><CheckCircle2 size={14} color={item.color} /> Hands-on Mentorship</li>
                                    <li><CheckCircle2 size={14} color={item.color} /> Lifetime Access</li>
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Structure;