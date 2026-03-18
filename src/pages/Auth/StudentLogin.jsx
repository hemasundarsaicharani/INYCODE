import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Lock, Eye, EyeOff, ArrowLeft, ChevronRight, ShieldCheck, Mail } from "lucide-react";
import { GoogleLogo, GithubLogo } from "../../components/Auth/BrandLogos";
import "./StudentLogin.css";

import { endpoints } from "../../utils/api";

function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email ID is required";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch(endpoints.students.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), 
      });

      const data = await response.json();

      if (response.ok) {
        const userObj = {
          ...data.user,
          role: "student",
          loginTime: new Date().getTime()
        };
        localStorage.setItem("loggedUser", JSON.stringify(userObj));
        navigate("/student-dashboard");
      } else {
        setErrors({ general: data.message || "Login failed" });
      }
    } catch (error) {
      setErrors({ general: "Unable to connect to server" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page-modern">
      <div className="auth-decor">
        <div className="blob blob-1" style={{ width: 500, height: 500, top: "-10%", left: "10%" }} />
        <div className="blob blob-2" style={{ width: 400, height: 400, bottom: "10%", right: "10%" }} />
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
                  <User size={64} className="gradient-text mb-4" style={{ margin: '0 auto 1.5rem' }} />
                </motion.div>
                <h1>Start your <span className="gradient-text">journey</span></h1>
                <p>Unlock your potential with our world-class courses and community.</p>
              </div>
            </div>

            <div className="auth-card-content">
              <div className="auth-card-header">
                <div className="auth-icon-circ">
                  <User size={32} color="#38bdf8" />
                </div>
                <h2>Student <span className="gradient-text">Login</span></h2>
                <p>Welcome back! Please enter your credentials.</p>
              </div>

              {errors.general && (
                <div className="error-banner mb-4 p-3 glass" style={{ color: '#ef4444', borderRadius: '8px', textAlign: 'center', background: 'rgba(239, 68, 68, 0.1)' }}>
                  {errors.general}
                </div>
              )}

              <form onSubmit={handleLogin} className="auth-form">
                <div className="auth-input-group">
                  <label>Email ID</label>
                  <div className="input-with-icon">
                    <Mail className="input-icon" size={18} />
                    <input
                      type="email"
                      placeholder="Enter your email"
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
                  <div className="label-flex">
                    <label>Password</label>
                    <span className="forgot-link" onClick={() => navigate("/reset-password")}>
                      Forgot?
                    </span>
                  </div>
                  <div className="input-with-icon">
                    <Lock className="input-icon" size={18} />
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

                <div className="auth-options-row">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span className="checkmark"></span>
                    <span>Remember me</span>
                  </label>
                </div>

                <button type="submit" className="btn-primary auth-submit-btn" disabled={isLoading}>
                  {isLoading ? (
                    <span className="loader-mini"></span>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>
              </form>

              <div className="social-login-sep">
                <span>Or continue with</span>
              </div>

              <div className="social-btns">
                <button className="social-btn glass"><GoogleLogo /><span>Google</span></button>
                <button className="social-btn glass"><GithubLogo /><span>GitHub</span></button>
              </div>

              <div className="auth-card-footer">
                <p>Don't have an account? <span onClick={() => navigate("/student-register")}>Create one</span></p>

                <div className="auth-trust">
                  <ShieldCheck size={14} />
                  <span>Secure end-to-end encrypted session</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;