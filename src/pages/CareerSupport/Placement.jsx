import React from "react";
import { motion } from "framer-motion";
import { Target, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import "./Placement.css";

import img1 from "../../assets/placement1.jpg";
import img2 from "../../assets/placement2.jpg";
import img3 from "../../assets/placement3.jpg";

const placementSections = [
    {
        title: "Career Guidance",
        icon: <Target size={24} />,
        text: "Placement assistance helps students understand industry requirements and career paths. Through expert guidance and mentorship, students can choose the right career direction and develop the skills needed to succeed in the job market.",
        img: img1,
        reverse: false
    },
    {
        title: "Interview Preparation",
        icon: <GraduationCap size={24} />,
        text: "Students receive interview preparation support including resume building, mock interviews, and communication skill development. This helps them gain confidence and perform better during real job interviews.",
        img: img2,
        reverse: true
    },
    {
        title: "Job Opportunities",
        icon: <Briefcase size={24} />,
        text: "Our placement support connects students with potential employers and job opportunities. Students can stay updated about openings, internships, and recruitment drives that match their skills and career interests.",
        img: img3,
        reverse: false
    }
];

const Placement = () => {
    return (
        <div className="placement-page-modern">
            <div className="pl-blobs">
                <div className="blob blob-1" style={{ width: 500, height: 500, top: "10%", left: "-10%" }} />
                <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "10%", right: "-10%" }} />
            </div>

            <div className="container-custom">
                <motion.div 
                    className="pl-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">💼 &nbsp;Career Support</div>
                    <h1 className="section-title">Placement <span className="gradient-text">Assistance</span></h1>
                    <p className="section-subtitle">
                        Empowering students with industry-proven strategies to land their dream roles.
                    </p>
                </motion.div>

                <div className="pl-sections">
                    {placementSections.map((sec, i) => (
                        <motion.div 
                            key={sec.title}
                            className={`pl-row ${sec.reverse ? 'row-reverse' : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                        >
                            <div className="pl-img-wrap">
                                <div className="pl-img-inner gradient-border">
                                    <img src={sec.img} alt={sec.title} />
                                </div>
                                <div className="pl-img-glow" />
                            </div>

                            <div className="pl-content-card card glass">
                                <div className="pl-icon-box">{sec.icon}</div>
                                <h2 className="pl-card-title">{sec.title}</h2>
                                <p className="pl-card-text">{sec.text}</p>
                                <button className="btn-outline">
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Placement;