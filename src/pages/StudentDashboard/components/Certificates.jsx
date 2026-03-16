import React from "react";
import { motion } from "framer-motion";
import {
    Award,
    Download,
    ExternalLink,
    Calendar,
    ShieldCheck,
    Search,
    ArrowRight
} from "lucide-react";
import "./Certificates.css";
import cert1 from "../../../assets/certificate1.png";
import cert2 from "../../../assets/certificate2.png";

const Certificates = () => {
    const certificates = [
        { course: "Full Stack Web Development", date: "Jan 2026", id: "CERT-IFC-2026-001", image: cert1 },
        { course: "Modern UI/UX Design Masterclass", date: "Feb 2026", id: "CERT-IFC-2026-042", image: cert2 }
    ];

    return (
        <div className="certificates-container-premium">
            <div className="section-header">
                <div>
                    <h1 className="gradient-text">Official Certifications</h1>
                    <p>Your hard-earned milestones, verified and ready to share with the world.</p>
                </div>
                <div className="verify-badge card glass">
                    <ShieldCheck size={20} className="text-emerald-500" />
                    <span>Blockchain Verified</span>
                </div>
            </div>

            <div className="cert-grid-premium">
                {certificates.map((cert, i) => (
                    <motion.div
                        key={cert.id}
                        className="cert-card-elite card glass"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="cert-visual">
                            <img src={cert.image} alt="Certificate Preview" />
                            <div className="cert-visual-overlay">
                                <button className="glass-btn-circle"><ExternalLink size={24} /></button>
                                <button className="btn-primary mini-btn mt-4">Preview PDF</button>
                            </div>
                        </div>

                        <div className="cert-body">
                            <div className="cert-meta-top">
                                <span className="cert-serialization">ID: {cert.id}</span>
                                <div className="cert-date-tag">
                                    <Calendar size={14} />
                                    <span>issued {cert.date}</span>
                                </div>
                            </div>
                            <h3 className="cert-title">{cert.course}</h3>
                            <p className="cert-desc">This certifies that the student has completed all requirements including 12+ industry projects and final assessments.</p>

                            <div className="cert-footer-actions">
                                <button className="btn-primary w-full">
                                    <Download size={18} />
                                    <span>Download Certificate</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="cert-education-info mt-12">
                <div className="info-card card glass border-l-4 border-l-emerald-500">
                    <div className="info-icon bg-emerald-500/10 text-emerald-500"><Award size={24} /></div>
                    <div className="info-text">
                        <h3>Professional Recognition</h3>
                        <p>INFYCODE certifications are recognized by leading tech companies worldwide. They validate your practical skills and theoretical knowledge in modern technologies.</p>
                        <button className="btn-text-icon mt-2">
                            <span>View Alumni Success Stories</span>
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;