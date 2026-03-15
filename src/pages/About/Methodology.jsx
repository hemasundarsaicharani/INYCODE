import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Terminal, Zap } from "lucide-react";
import "./Methodology.css";

const methodologyData = [
    {
        icon: <BookOpen size={28} />,
        title: "Concept-Based Learning",
        desc: "Our courses begin with clear explanations of fundamental concepts. Trainers ensure that students understand the theory behind each topic before moving on to practical implementation.",
        color: "rgba(14, 165, 233, 0.1)",
        borderColor: "rgba(14, 165, 233, 0.2)",
        iconColor: "#0ea5e9"
    },
    {
        icon: <Code size={28} />,
        title: "Hands-On Practice",
        desc: "Students learn by doing. Each topic is supported with coding exercises, assignments, and practical tasks that help reinforce the concepts learned during the sessions.",
        color: "rgba(129, 140, 248, 0.1)",
        borderColor: "rgba(129, 140, 248, 0.2)",
        iconColor: "#818cf8"
    },
    {
        icon: <Terminal size={28} />,
        title: "Real-Time Projects",
        desc: "Students work on real-time projects that simulate industry environments. This helps them gain practical experience and build confidence to work on real-world applications.",
        color: "rgba(34, 211, 238, 0.1)",
        borderColor: "rgba(34, 211, 238, 0.2)",
        iconColor: "#22d3ee"
    }
];

const Methodology = () => {
    return (
        <div className="methodology-page">
            {/* Background Decorations */}
            <div className="methodology-decor">
                <div className="blob blob-1" style={{ width: 600, height: 600, top: "-10%", left: "20%" }} />
                <div className="blob blob-3" style={{ width: 400, height: 400, bottom: "-5%", right: "10%" }} />
            </div>

            <div className="container-custom">
                {/* Header Section */}
                <motion.div 
                    className="methodology-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">⚡ &nbsp;Our Approach</div>
                    <h1 className="section-title">Learning <span className="gradient-text">Methodology</span></h1>
                    <p className="section-subtitle">
                        A structured path designed to turn beginners into industry-ready professionals.
                    </p>
                </motion.div>

                {/* Grid Section */}
                <div className="methodology-grid">
                    {methodologyData.map((item, i) => (
                        <motion.div 
                            key={item.title}
                            className="methodology-card card glass gradient-border"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -10 }}
                        >
                            <div 
                                className="methodlogy-icon-wrap"
                                style={{ background: item.color, borderColor: item.borderColor, color: item.iconColor }}
                            >
                                {item.icon}
                            </div>
                            <h3 className="methodology-card-title">{item.title}</h3>
                            <p className="methodology-card-text">{item.desc}</p>
                            
                            <div className="methodology-step">Step 0{i+1}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats/Incentive */}
                <motion.div 
                    className="methodology-cta card glass"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="cta-icon-group">
                        <Zap size={32} className="zap-icon" />
                    </div>
                    <div>
                        <h4 className="cta-h">Ready to experience this?</h4>
                        <p className="cta-p">Join over 120,000 students already mastering tech skills with our proven methodology.</p>
                    </div>
                    <button className="btn-primary">Get Started Now</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Methodology;