import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Zap, ArrowRight, BookOpen } from "lucide-react";
import "./Enrollment.css";
import enrollImg from "../../assets/enrol.png";

const Enrollment = () => {
    const benefits = [
        "Instant Access to Course Content",
        "Direct Mentorship & Guidance",
        "Industry-Standard Projects",
        "Placement Assistance Program",
        "Lifetime Course Updates"
    ];

    return (
        <div className="enrollment-page">
            <div className="hero-blobs">
                <div className="blob blob-1" style={{ width: 500, height: 500, top: "10%", left: "20%" }} />
                <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "10%", right: "10%" }} />
            </div>

            <div className="container-custom">
                <motion.div
                    className="enrollment-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">🚀 &nbsp;Start Learning</div>
                    <h1 className="section-title">Course <span className="gradient-text">Enrollment</span></h1>
                </motion.div>

                <div className="enrollment-wrap">
                    <motion.div
                        className="enrollment-visual"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="enroll-img-inner gradient-border">
                            <img src={enrollImg} alt="Enrollment" />
                            
                            <motion.div 
                                className="floating-badge badge-top glass"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="badge-icon bg-emerald-500/20 text-emerald-500"><Zap size={14} /></div>
                                <span>Live Mentorship</span>
                            </motion.div>

                            <motion.div 
                                className="floating-badge badge-bottom glass"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <div className="badge-icon bg-blue-500/20 text-blue-400"><BookOpen size={14} /></div>
                                <span>12+ Industry Projects</span>
                            </motion.div>
                        </div>
                        <div className="enroll-glow" />
                    </motion.div>

                    <div className="enrollment-info card glass">
                        <h2 className="info-title">Simple & Fast Process</h2>
                        <p className="info-text">
                            Our enrollment process is designed to be seamless. Choose your path, complete the registration, and start building your future today with expert guidance.
                        </p>

                        <div className="benefits-list">
                            {benefits.map((b, i) => (
                                <motion.div
                                    key={b}
                                    className="benefit-item"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                >
                                    <CheckCircle size={18} color="#38bdf8" />
                                    <span>{b}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="enrollment-actions">
                            <button className="btn-primary">
                                <span>Proceed to Registration</span>
                                <Zap size={16} />
                            </button>
                            <button className="btn-outline">
                                <BookOpen size={16} />
                                View Brochure
                            </button>
                        </div>

                        <div className="security-tag">
                            <ShieldCheck size={14} />
                            <span>100% Secure & Verified Process</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enrollment;