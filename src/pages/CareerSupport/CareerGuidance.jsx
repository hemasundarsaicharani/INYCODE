import React from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, Map, TrendingUp, ChevronRight } from "lucide-react";
import "./CareerGuidance.css";

const guidanceData = [
    {
        icon: <Compass size={28} />,
        title: "Career Counseling",
        desc: "Identify your strengths, interests, and career goals with our certified counselors through personalized one-on-one sessions.",
        color: "#0ea5e9"
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Skill Development",
        desc: "Master the exact technical and soft skills that leading tech companies are looking for in today's competitive landscape.",
        color: "#818cf8"
    },
    {
        icon: <Lightbulb size={28} />,
        title: "Industry Insights",
        desc: "Stay ahead of the curve with direct insights into market trends, emerging technologies, and future-proof career paths.",
        color: "#22d3ee"
    },
    {
        icon: <Map size={28} />,
        title: "Career Roadmap",
        desc: "Get a clear, actionable 12-month roadmap from learning to landing your dream offer, with milestones every step of the way.",
        color: "#f59e0b"
    }
];

const CareerGuidance = () => {
    return (
        <div className="cg-page-modern">
            <div className="cg-decor">
                <div className="blob blob-1" style={{ width: 600, height: 600, top: "0%", right: "0%" }} />
                <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "0%", left: "0%" }} />
            </div>

            <div className="container-custom">
                <motion.div 
                    className="cg-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">🗺️ &nbsp;Mentorship</div>
                    <h1 className="section-title">Career <span className="gradient-text">Guidance</span></h1>
                    <p className="section-subtitle">
                        Navigate the complex tech landscape with clarity, confidence, and a proven strategy.
                    </p>
                </motion.div>

                <div className="cg-grid">
                    {guidanceData.map((item, i) => (
                        <motion.div 
                            key={item.title}
                            className="cg-card card glass gradient-border"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="cg-icon-wrap" style={{ background: `${item.color}15`, color: item.color }}>
                                {item.icon}
                            </div>
                            <h3 className="cg-card-title">{item.title}</h3>
                            <p className="cg-card-text">{item.desc}</p>
                            <motion.a 
                                href="#" 
                                className="cg-link"
                                style={{ color: item.color }}
                                whileHover={{ x: 5 }}
                            >
                                Exploring Heading <ChevronRight size={16} />
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                <div className="cg-bottom-box card glass">
                    <div className="cg-text-wrap">
                        <h3>Not sure which path to take?</h3>
                        <p>Take our career assessment quiz and get personalized recommendations based on your background.</p>
                    </div>
                    <button className="btn-primary">Take Assessment Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default CareerGuidance;