import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Linkedin, Mail, ArrowRight } from "lucide-react";
import logoIc from "../../assets/logo_ic.png";
import "./Footer.css";

const Footer = () => {
    const navigate = useNavigate();
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Courses", path: "/courses" },
                { label: "Trainers", path: "/trainers" },
                { label: "Contact", path: "/contact" },
            ]
        },
        {
            title: "Support",
            links: [
                { label: "Placement", path: "/placement" },
                { label: "Resume Building", path: "/resume" },
                { label: "Interview Prep", path: "/interview" },
                { label: "FAQs", path: "/faq" },
                { label: "Support Center", path: "/support" },
            ]
        }
    ];

    return (
        <footer className="footer-modern">
            <div className="container-custom">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <Link to="/" onClick={scrollToTop} className="footer-logo">
                            <div className="footer-logo-wrap">
                                <img src={logoIc} alt="IC" className="footer-logo-img" />
                            </div>
                            <div className="footer-text-wrap">
                                <span className="footer-title">INFYCODE</span>
                                <div className="footer-divider" />
                                <span className="footer-tagline">INFINITE LEARNING SOLUTIONS</span>
                            </div>
                        </Link>
                        <p className="footer-about">
                            Empowering future tech leaders with industry-expert training. 
                            Join 120,000+ students building their careers with InfyCode.
                        </p>
                        <div className="footer-socials">
                            {[
                                { icon: <Facebook size={18} />, color: "#1877F2" },
                                { icon: <Twitter size={18} />, color: "#1DA1F2" },
                                { icon: <Youtube size={18} />, color: "#FF0000" },
                                { icon: <Linkedin size={18} />, color: "#0A66C2" },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    className="social-link"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    style={{ "--hover-color": social.color }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((group, i) => (
                        <div key={i} className="footer-links-col">
                            <h3 className="footer-heading">{group.title}</h3>
                            <ul className="footer-links-list">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <Link to={link.path} onClick={scrollToTop}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter Column */}
                    <div className="footer-newsletter-col">
                        <h3 className="footer-heading">Newsletter</h3>
                        <p className="newsletter-text">
                            Subscribe to get the latest updates and course offers.
                        </p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="newsletter-input-wrap">
                                <Mail size={18} className="mail-icon" />
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <button type="submit" className="btn-primary newsletter-btn">
                                <span>Subscribe</span>
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © 2025 INFYCODE. All rights reserved. Designed by Charani.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;