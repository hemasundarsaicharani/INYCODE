import React from "react";
import { motion } from "framer-motion";
import { FileText, Search, PenTool, CheckCircle, FileCheck } from "lucide-react";
import "./Resume.css";

import img1 from "../../assets/resume/resume1.jpg";
import img2 from "../../assets/resume/resume2.jpg";

const Resume = () => {
    return (
        <div className="resume-page-modern">
            <div className="res-decor">
                <div className="blob blob-2" style={{ width: 500, height: 500, top: "20%", right: "-10%" }} />
                <div className="blob blob-1" style={{ width: 400, height: 400, bottom: "10%", left: "-10%" }} />
            </div>

            <div className="container-custom">
                <motion.div 
                    className="res-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">📄 &nbsp;Portfolio Building</div>
                    <h1 className="section-title">Resume <span className="gradient-text">Crafting</span></h1>
                    <p className="section-subtitle">
                        Your resume is your first impression. Let's make it count with industry-standard professional guidance.
                    </p>
                </motion.div>

                <div className="res-sections">
                    <motion.div 
                        className="res-block"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="res-img-wrap">
                            <div className="res-img-inner gradient-border">
                                <img src={img1} alt="Guidance" />
                            </div>
                            <div className="res-img-glow" />
                        </div>
                        <div className="res-info card glass">
                            <div className="entry-icon"><PenTool size={22} /></div>
                            <h2 className="entry-title">Professional Guidance</h2>
                            <p className="entry-text">
                                We guide students on how to structure their resumes according to industry standards. This includes writing strong summaries, highlighting technical skills, showcasing projects, and presenting achievements clearly to recruiters.
                            </p>
                            <p className="entry-text">
                                Our experts also provide feedback and improvements so that your resume becomes attractive to hiring managers and Applicant Tracking Systems (ATS).
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="res-block row-reverse"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="res-img-wrap">
                            <div className="res-img-inner gradient-border">
                                <img src={img2} alt="Review" />
                            </div>
                            <div className="res-img-glow secondary" />
                        </div>
                        <div className="res-info card glass">
                            <div className="entry-icon"><Search size={22} /></div>
                            <h2 className="entry-title">Personalized Review</h2>
                            <p className="entry-text">
                                Students receive personalized feedback to improve their resumes. We help identify missing details, improve formatting, and add impactful keywords so that resumes stand out during the hiring process.
                            </p>
                            <div className="res-checklist">
                                <div className="c-item"><CheckCircle size={14} color="#10b981" /> Keyword Optimization</div>
                                <div className="c-item"><CheckCircle size={14} color="#10b981" /> ATS-Friendly Templates</div>
                                <div className="c-item"><CheckCircle size={14} color="#10b981" /> Proofreading & Formatting</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    className="res-cta card glass"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <FileCheck size={40} color="#38bdf8" />
                    <div>
                        <h3>Get Your Resume Reviewed</h3>
                        <p>Submit your draft today and get feedback from industry veterans.</p>
                    </div>
                    <button className="btn-primary">Submit for Review</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;