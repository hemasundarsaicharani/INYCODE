import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, GraduationCap, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "Student",
      desc: "Access your courses, assignments, and track your progress.",
      icon: <User size={32} />,
      path: "/student-login",
      color: "#38bdf8"
    },
    {
      title: "Trainer",
      desc: "Manage your sessions, students, and curriculum content.",
      icon: <GraduationCap size={32} />,
      path: "/trainer-login",
      color: "#818cf8"
    },
    {
      title: "Admin",
      desc: "Oversee the entire platform, users, and system analytics.",
      icon: <ShieldCheck size={32} />,
      path: "/admin-login",
      color: "#f59e0b"
    }
  ];

  return (
    <div className="login-selection-page">
      <div className="ls-decor">
        <div className="blob blob-1" style={{ width: 600, height: 600, top: "-10%", left: "10%" }} />
        <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "-5%", right: "5%" }} />
      </div>

      <div className="container-custom">
        <motion.button 
          className="auth-back-btn"
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </motion.button>

        <motion.div 
          className="ls-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">🔐 &nbsp;Secure Access</div>
          <h1 className="section-title">Welcome <span className="gradient-text">Back</span></h1>
          <p className="section-subtitle">
            Please select your account type to continue to the platform.
          </p>
        </motion.div>

        <div className="ls-grid">
          {options.map((opt, i) => (
            <motion.div 
              key={opt.title}
              className="ls-card card glass gradient-border"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => navigate(opt.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="ls-icon-wrap" style={{ background: `${opt.color}15`, color: opt.color }}>
                {opt.icon}
              </div>
              <h3 className="ls-card-title">{opt.title}</h3>
              <p className="ls-card-desc">{opt.desc}</p>
              <div className="ls-card-footer" style={{ color: opt.color }}>
                <span>Login as {opt.title}</span>
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
            className="ls-register-prompt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            Don't have an account? <span onClick={() => navigate('/student-register')}>Register here</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Login;