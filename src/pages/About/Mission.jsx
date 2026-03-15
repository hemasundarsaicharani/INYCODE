import React from "react";
import { motion } from "framer-motion";
import "./Mission.css";

import missionImg from "../../assets/mission/mission1.jpg";
import visionImg from "../../assets/mission/vision1.jpg";

const Mission = () => {
    return (
        <div className="mission-page-modern">
            {/* Ambient Background */}
            <div className="mission-blobs">
                <div className="blob blob-2" style={{ width: 500, height: 500, top: "20%", right: "-10%" }} />
                <div className="blob blob-1" style={{ width: 400, height: 400, bottom: "10%", left: "-10%" }} />
            </div>

            <div className="container-custom">
                {/* Header */}
                <motion.div 
                    className="mission-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">🎯 &nbsp;Our Purpose</div>
                    <h1 className="section-title">Mission & <span className="gradient-text">Vision</span></h1>
                    <p className="section-subtitle">
                        Defining the future of education through technology and innovation.
                    </p>
                </motion.div>

                <div className="mission-blocks">
                    {/* Mission Section */}
                    <motion.div 
                        className="mission-block"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mission-visual">
                            <div className="mission-img-inner gradient-border">
                                <img src={missionImg} alt="Our Mission" />
                            </div>
                            <div className="visual-glow" />
                        </div>
                        <div className="mission-info card glass">
                            <h2 className="block-title">Our Mission</h2>
                            <p className="block-text">
                                Our mission is to empower students with the knowledge, skills, and confidence required to succeed in the modern digital world.
                                We strive to provide high-quality learning resources, practical training, and career guidance that help individuals achieve their professional goals.
                            </p>
                            <p className="block-text">
                                Through innovative teaching methods and industry-focused programs, we aim to prepare students for real-world challenges and help them build successful careers.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Section */}
                    <motion.div 
                        className="mission-block row-reverse"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mission-visual">
                            <div className="mission-img-inner gradient-border">
                                <img src={visionImg} alt="Our Vision" />
                            </div>
                            <div className="visual-glow secondary" />
                        </div>
                        <div className="mission-info card glass">
                            <h2 className="block-title">Our Vision</h2>
                            <p className="block-text">
                                Our vision is to become a leading platform that inspires innovation, creativity, and lifelong learning for technology aspirants across the globe.
                            </p>
                            <p className="block-text">
                                By continuously improving our programs and embracing new technologies, we aspire to shape future professionals who contribute positively to society and the global workforce.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Mission;