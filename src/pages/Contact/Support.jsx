import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Info, LifeBuoy, Send } from "lucide-react";
import "./Support.css";

const Support = () => {
  return (
    <div className="support-page-modern">
      <div className="sup-decor">
        <div className="blob blob-1" style={{ width: 500, height: 500, top: "10%", right: "10%" }} />
        <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "10%", left: "10%" }} />
      </div>

      <div className="container-custom">
        <motion.div 
          className="sup-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">🛠️ &nbsp;Support Center</div>
          <h1 className="section-title">Help & <span className="gradient-text">Support</span></h1>
          <p className="section-subtitle">
            Need assistance? Our support team is here to help you resolve any issues promptly.
          </p>
        </motion.div>

        <div className="sup-content-wrap">
            <motion.div 
                className="sup-form-card card glass gradient-border"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="sup-form-header">
                    <LifeBuoy size={32} color="#38bdf8" />
                    <h2>Open a Support Ticket</h2>
                </div>

                <form className="sup-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="email@example.com" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Issue Type</label>
                        <select className="sup-select">
                            <option>Technical Problem</option>
                            <option>Account Access</option>
                            <option>Payment & Billing</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" placeholder="Briefly describe the issue" required />
                    </div>

                    <div className="form-group">
                        <label>Issue Description</label>
                        <textarea rows="6" placeholder="Please provide details about your issue..."></textarea>
                    </div>

                    <button type="submit" className="btn-primary sup-btn">
                        <span>Submit Ticket</span>
                        <Send size={16} />
                    </button>
                    
                    <div className="form-note">
                        <Info size={14} />
                        <span>Tickets are usually answered within 4-6 hours.</span>
                    </div>
                </form>
            </motion.div>

            <div className="sup-sidebar">
                <div className="quick-help card glass">
                    <h3>Quick Help</h3>
                    <div className="help-links">
                        <a href="/faq" className="help-link">
                            <HelpCircle size={18} />
                            <span>Frequently Asked Questions</span>
                        </a>
                        <div className="help-divider" />
                        <div className="contact-mini">
                            <p>Urgent? Email us at</p>
                            <a href="mailto:support@infycode.com">support@infycode.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Support;