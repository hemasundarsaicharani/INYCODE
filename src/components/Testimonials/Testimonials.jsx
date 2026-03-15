import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Arjun Sharma",
        role: "Full Stack Developer @ Infosys",
        avatar: "👨‍💻",
        rating: 5,
        text: "InfyCode completely transformed my career. The React Full Stack course was incredibly practical — I landed a job at Infosys within 2 months of completing it!",
        course: "React JS Full Stack",
    },
    {
        name: "Priya Reddy",
        role: "Data Scientist @ TCS",
        avatar: "👩‍🔬",
        rating: 5,
        text: "The Data Science & AI course is world-class. The hands-on projects and mentor support made a huge difference. I went from zero ML knowledge to a data scientist role!",
        course: "Data Science & AI",
    },
    {
        name: "Mohammed Khalid",
        role: "Python Developer @ Wipro",
        avatar: "👨‍🎓",
        rating: 5,
        text: "The Python Masterclass is the most comprehensive course I've ever taken. Real-world projects, expert instructors, and lifetime support — absolutely worth it.",
        course: "Python Masterclass",
    },
    {
        name: "Sneha Patel",
        role: "Java Developer @ Accenture",
        avatar: "👩‍💼",
        rating: 5,
        text: "From learning Java basics to building enterprise applications — InfyCode made the entire journey smooth and enjoyable. The placement assistance was a huge plus!",
        course: "Java Full Stack",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent(i => (i + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="testimonials-section section-padding">
            <div className="container-custom">

                <div style={{ textAlign: "center" }}>
                    <div className="section-badge" style={{ margin: "0 auto 1rem" }}>💬 &nbsp;Success Stories</div>
                    <h2 className="section-title">
                        What Our <span className="gradient-text">Students Say</span>
                    </h2>
                    <p className="testimonials-subtitle" style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
                        Hear from 120,000+ students at <span style={{ color: "#38bdf8", fontWeight: 700 }}>INFYCODE</span>
                    </p>
                </div>

                <div className="testimonials-wrapper">
                    <button className="nav-arrow prev" onClick={prev}><ChevronLeft size={20} /></button>
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="testimonial-card card"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.35 }}
                        >
                            <Quote size={40} className="quote-icon" />

                            <p className="testimonial-text">"{t.text}"</p>

                            <div className="testimonial-stars">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>

                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{t.avatar}</div>
                                <div>
                                    <div className="testimonial-name">{t.name}</div>
                                    <div className="testimonial-role">{t.role}</div>
                                    <div className="testimonial-course">📚 {t.course}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button className="nav-arrow next" onClick={next}><ChevronRight size={20} /></button>

                    {/* Navigation Dots */}
                    <div className="testimonials-nav">
                        <div className="testimonials-dots">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`dot ${i === current ? "dot-active" : ""}`}
                                    onClick={() => setCurrent(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
