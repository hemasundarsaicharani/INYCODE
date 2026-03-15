import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import "./CTA.css";

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container-custom">
                <motion.div 
                    className="cta-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background decorations */}
                    <div className="cta-shapes">
                        <div className="cta-shape shape-1" />
                        <div className="cta-shape shape-2" />
                    </div>

                    <div className="cta-content">
                        <motion.div 
                            className="section-badge" 
                            style={{ margin: "0 auto 1.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles size={14} /> &nbsp;Start Your Journey Today
                        </motion.div>

                        <h2 className="cta-title">
                            Ready to Transform Your <span style={{ color: "#38bdf8" }}>Tech Career?</span>
                        </h2>
                        
                        <p className="cta-description">
                            Join over 120,000+ students already learning and building the future with <span style={{ fontWeight: 700 }}>INFYCODE</span>. 
                            Get access to industry-standard curriculum and placement support.
                        </p>

                        <div className="cta-actions">
                            <Link to="/student-register" className="btn-primary" style={{ background: "#fff", color: "#0ea5e9" }}>
                                <span style={{ color: "#0ea5e9" }}>Join INFYCODE Now</span>
                                <ArrowRight size={18} />
                            </Link>
                            <Link to="/courses" className="btn-outline" style={{ color: "#fff", borderColor: "#fff" }}>
                                View All Courses
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
