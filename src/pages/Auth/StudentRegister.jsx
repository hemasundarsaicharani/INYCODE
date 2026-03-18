import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, ChevronRight, UserPlus, RefreshCw } from "lucide-react";
import { GoogleLogo, GithubLogo } from "../../components/Auth/BrandLogos";
import "./StudentRegister.css";

import { endpoints } from "../../utils/api";

function StudentRegister() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!fullname.trim()) {
      newErrors.fullname = "Full name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      newErrors.password = "Include at least one number and one special character";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch(endpoints.students.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, fullname, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! You can now login.");
        navigate("/student-login");
      } else {
        setErrors({ general: data.message || "Registration failed" });
      }
    } catch (error) {
      setErrors({ general: "Unable to connect to server" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUsername("");
    setFullname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-page-modern register-mode">
      <div className="auth-decor">
        <div className="blob blob-1" style={{ width: 600, height: 600, top: "-10%", left: "5%" }} />
        <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "5%", right: "5%" }} />
      </div>

      <div className="container-custom">
        <motion.button 
          className="auth-back-btn"
          onClick={() => navigate("/login")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </motion.button>

        <div className="auth-card-wrap">
          <motion.div 
            className="auth-card card glass gradient-border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="auth-card-info">
                <div className="auth-info-decor">
                    <div className="auth-info-blob" style={{ top: '10%', left: '10%' }}></div>
                    <div className="auth-info-blob" style={{ bottom: '10%', right: '10%', background: '#6366f1' }}></div>
                </div>
                <div className="auth-info-content">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <UserPlus size={64} className="gradient-text mb-4" style={{ margin: '0 auto 1.5rem' }} />
                    </motion.div>
                    <h1>Be a <span className="gradient-text">Pro</span></h1>
                    <p>Join thousands of students learning from the best industry experts.</p>
                </div>
            </div>

            <div className="auth-card-content">
                <div className="auth-card-header">
                    <div className="auth-icon-circ">
                        <UserPlus size={32} color="#38bdf8" />
                    </div>
                    <h2>Create <span className="gradient-text">Account</span></h2>
                    <p>Join the future of learning today.</p>
                </div>

                {errors.general && (
                  <div className="error-banner mb-4 p-3 glass" style={{ color: '#ef4444', borderRadius: '8px', textAlign: 'center', background: 'rgba(239, 68, 68, 0.1)' }}>
                    {errors.general}
                   </div>
                )}

                <form onSubmit={handleRegister} className="auth-form">
                  <div className="form-grid-2">
                      <div className="auth-input-group">
                        <label>Username</label>
                        <div className="input-with-icon">
                            <User className="input-icon" size={17} />
                            <input
                              type="text"
                              placeholder="johndoe"
                              value={username}
                              onChange={(e) => {
                                setUsername(e.target.value);
                                if (errors.username) setErrors(prev => ({ ...prev, username: "" }));
                              }}
                              className={errors.username ? "error-input" : ""}
                            />
                        </div>
                        {errors.username && <span className="error-text">{errors.username}</span>}
                      </div>

                      <div className="auth-input-group">
                        <label>Full Name</label>
                        <div className="input-with-icon">
                            <User className="input-icon" size={17} />
                            <input
                              type="text"
                              placeholder="John Doe"
                              value={fullname}
                              onChange={(e) => {
                                setFullname(e.target.value);
                                if (errors.fullname) setErrors(prev => ({ ...prev, fullname: "" }));
                              }}
                              className={errors.fullname ? "error-input" : ""}
                            />
                        </div>
                        {errors.fullname && <span className="error-text">{errors.fullname}</span>}
                      </div>
                  </div>

                  <div className="auth-input-group">
                    <label>Email Address</label>
                    <div className="input-with-icon">
                        <Mail className="input-icon" size={17} />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                          }}
                          className={errors.email ? "error-input" : ""}
                        />
                    </div>
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="auth-input-group">
                    <label>Password</label>
                    <div className="input-with-icon">
                        <Lock className="input-icon" size={17} />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password) setErrors(prev => ({ ...prev, password: "" }));
                          }}
                          className={errors.password ? "error-input" : ""}
                        />
                        <button 
                            type="button" 
                            className="eye-btn" 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.password && <span className="error-text">{errors.password}</span>}
                  </div>

                  <div className="auth-btn-group">
                    <button type="button" className="btn-outline auth-reset-btn" onClick={handleReset}>
                        <RefreshCw size={16} />
                        <span>Reset</span>
                    </button>
                    <button type="submit" className="btn-primary auth-submit-btn" disabled={isLoading}>
                        {isLoading ? <span className="loader-mini"></span> : (
                            <>
                                <span>Register Now</span>
                                <ChevronRight size={18} />
                            </>
                        )}
                    </button>
                  </div>
                </form>

                <div className="social-login-sep">
                    <span>Or register with</span>
                </div>

                <div className="social-btns">
                    <button className="social-btn glass"><GoogleLogo /><span>Google</span></button>
                    <button className="social-btn glass"><GithubLogo /><span>GitHub</span></button>
                </div>

                <div className="auth-card-footer">
                    <p>Already have an account? <span onClick={() => navigate("/student-login")}>Login</span></p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;