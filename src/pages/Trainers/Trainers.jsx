import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink, Mail } from "lucide-react";
import "./Trainers.css";

import trainer1 from "../../assets/trainer/trainer1.jpg";
import trainer2 from "../../assets/trainer/trainer2.jpg";
import trainer3 from "../../assets/trainer/trainer3.jpg";

const trainersData = [
    {
        name: "Sumathi",
        role: "Full Stack Developer",
        img: trainer1,
        bio: "Expert in modern web architectures and reactive frameworks with over 8 years of industry experience.",
        skills: ["React", "Node.js", "AWS"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Kalyan",
        role: "Python & Data Science Expert",
        img: trainer2,
        bio: "Passionate about machine learning and data engineering. Helping students master Python for real-world impact.",
        skills: ["Python", "TensorFlow", "Pandas"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Suresh",
        role: "Java & Backend Specialist",
        img: trainer3,
        bio: "Deep expertise in enterprise applications and distributed systems using Java and Spring Boot.",
        skills: ["Java", "Spring", "Microservices"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    }
];

const Trainers = () => {
    return (
        <div className="trainers-page">
            <div className="trainers-bg-decor">
                <div className="blob blob-1" style={{ width: 500, height: 500, top: "-10%", left: "10%" }} />
                <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "10%", right: "10%" }} />
            </div>

            <div className="container-custom">
                <motion.div 
                    className="trainers-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">👨‍🏫 &nbsp;Our Mentors</div>
                    <h1 className="section-title">Meet Your <span className="gradient-text">Experts</span></h1>
                    <p className="section-subtitle">
                        Learn from industry veterans who are passionate about sharing their knowledge.
                    </p>
                </motion.div>

                <div className="trainers-grid-modern">
                    {trainersData.map((trainer, i) => (
                        <motion.div 
                            key={trainer.name}
                            className="trainer-card-modern card glass gradient-border"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="trainer-img-wrap">
                                <img src={trainer.img} alt={trainer.name} />
                                <div className="trainer-socials-overlay">
                                    <a href={trainer.socials.linkedin} className="trainer-social-btn"><Linkedin size={18} /></a>
                                    <a href={trainer.socials.github} className="trainer-social-btn"><Github size={18} /></a>
                                    <a href={trainer.socials.twitter} className="trainer-social-btn"><Twitter size={18} /></a>
                                </div>
                            </div>

                            <div className="trainer-info-modern">
                                <h3 className="trainer-name-modern">{trainer.name}</h3>
                                <div className="trainer-role-modern">{trainer.role}</div>
                                <p className="trainer-bio-modern">{trainer.bio}</p>
                                
                                <div className="trainer-skills-wrap">
                                    {trainer.skills.map(skill => (
                                        <span key={skill} className="skill-chip">{skill}</span>
                                    ))}
                                </div>

                                <button className="btn-outline trainer-profile-btn">
                                    <span>View Full Profile</span>
                                    <ExternalLink size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trainers;