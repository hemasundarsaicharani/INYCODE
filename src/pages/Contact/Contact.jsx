import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, MessageCircle } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page-modern">
      <div className="con-decor">
        <div className="blob blob-1" style={{ width: 500, height: 500, top: "-10%", left: "10%" }} />
        <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "10%", right: "10%" }} />
      </div>

      <div className="container-custom">
        <motion.div 
          className="con-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">💬 &nbsp;Get In Touch</div>
          <h1 className="section-title">Contact <span className="gradient-text">INFYCODE</span></h1>
          <p className="section-subtitle">
            Have questions about our courses or programs? Reach out to us anytime!
          </p>
        </motion.div>

        <div className="con-grid">
          {/* Info Side */}
          <motion.div 
            className="con-info-side"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="con-card card glass">
                <h3>Contact Information</h3>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>
                
                <div className="info-items">
                    <div className="info-item">
                        <div className="icon-circ"><Phone size={20} /></div>
                        <div>
                            <span>Call Us</span>
                            <p>+91 12345 67890</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon-circ"><Mail size={20} /></div>
                        <div>
                            <span>Email Us</span>
                            <p>contact@infycode.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon-circ"><MapPin size={20} /></div>
                        <div>
                            <span>Location</span>
                            <p>INFYCODE HQ, Hyderabad, India</p>
                        </div>
                    </div>
                </div>

                <div className="con-socials">
                    <div className="social-icon"><Globe size={18} /></div>
                    <div className="social-icon"><MessageCircle size={18} /></div>
                    <div className="social-icon"><Send size={18} /></div>
                </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            className="con-form-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form className="con-form card glass gradient-border">
                <div className="form-row">
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="john@example.com" required />
                    </div>
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Course Inquiry" required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn-primary con-submit-btn">
                    <span>Send Message</span>
                    <Send size={16} />
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;