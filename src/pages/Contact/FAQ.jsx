import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, MessageCircle } from "lucide-react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      question: "How do I register on the website?",
      answer: "Click the Register button in the navbar, choose your role (Student, Trainer, or Admin), and fill in your details to create an account. You'll receive a confirmation email once your registration is successful."
    },
    {
      question: "Are the courses self-paced or live?",
      answer: "We offer both! Most of our professional tracks include live sessions with industry experts plus recording access for self-paced review. Check individual course details for specifics."
    },
    {
      question: "How can I contact support?",
      answer: "You can visit the Support page and submit a ticket. For urgent matters, you can also reach us via email at support@infycode.com or through our live chat system during business hours."
    },
    {
      question: "Do you offer placement assistance?",
      answer: "Yes, we have a dedicated Career Support team that provides resume building, mock interviews, and direct connections to our hiring partners once you complete the course and projects."
    },
    {
      question: "Can I update my profile information?",
      answer: "Absolutely. Once logged in, navigate to your Dashboard and click on the 'Profile' section. You can update your contact details, skills, and upload a new profile picture."
    },
    {
      question: "What certification will I receive?",
      answer: "Upon successful completion of the course requirements and projects, you will receive an industry-recognized INFYCODE Completion Certificate which you can verify on our platform."
    }
  ];

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-page-modern">
      <div className="faq-decor">
        <div className="blob blob-1" style={{ width: 400, height: 400, top: "20%", left: "10%" }} />
        <div className="blob blob-2" style={{ width: 300, height: 300, bottom: "10%", right: "15%" }} />
      </div>

      <div className="container-custom">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">❓ &nbsp;Help Guide</div>
          <h1 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h1>
          
          <div className="faq-search card glass">
            <Search size={20} className="search-icon" />
            <input 
                type="text" 
                placeholder="Search for answers..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="faq-list-wrap">
            {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                    <motion.div 
                        key={index} 
                        className={`faq-item-modern glass ${activeIndex === index ? 'active' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <button 
                            className="faq-question-btn"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <span>{faq.question}</span>
                            <div className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>
                                {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                        </button>
                        
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div 
                                    className="faq-answer-wrap"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="faq-answer-inner">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))
            ) : (
                <div className="no-faq">
                    <p>If you have more questions, feel free to reach out to INFYCODE support!</p>
                </div>
            )}
        </div>

        <motion.div 
            className="faq-footer-cta card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="f-icon"><MessageCircle size={32} color="#38bdf8" /></div>
            <div>
                <h3>Still have questions?</h3>
                <p>We're here to help. Contact our support team for personalized assistance.</p>
            </div>
            <button className="btn-primary">Contact Support</button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;