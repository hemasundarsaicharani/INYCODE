import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Lock, Eye, EyeOff, ArrowLeft, ChevronRight, ShieldCheck, Mail } from "lucide-react";
import { GoogleLogo, GithubLogo } from "../../components/Auth/BrandLogos";
import "./TrainerLogin.css";

function TrainerLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Trainer ID / Username is required";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    // Simulated demo login
    setTimeout(() => {
      const userObj = { username, role: "trainer", loginTime: new Date().getTime() };
      localStorage.setItem("loggedUser", JSON.stringify(userObj));
      navigate("/trainer-dashboard");
      setIsLoading(false);
    }, 1500);
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
                    <div className="auth-info-blob" style={{ top: '10%', left: '10%', background: '#818cf8' }}></div>
                    <div className="auth-info-blob" style={{ bottom: '10%', right: '10%', background: '#6366f1' }}></div>
                </div>
                <div className="auth-info-content">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <GraduationCap size={64} className="gradient-text mb-4" style={{ margin: '0 auto 1.5rem', color: '#818cf8' }} />
                    </motion.div>
                    <h1>Let's Start the <span className="gradient-text">work</span></h1>
                    <p>Empower the next generation of developers with your expertise.</p>
                </div>
            </div>

            <div className="auth-card-content">
                <div className="auth-card-header">
                    <div className="auth-icon-circ">
                        <GraduationCap size={32} color="#818cf8" />
                    </div>
                    <h2>Trainer <span className="gradient-text">Portal</span></h2>
                    <p>Welcome back, Educator! Manage your classes.</p>
                </div>

                <form onSubmit={handleLogin} className="auth-form">
                  <div className="auth-input-group">
                    <label>Trainer ID / Username</label>
                    <div className="input-with-icon">
                        <GraduationCap className="input-icon" size={18} />
                        <input
                          type="text"
                          placeholder="Username"
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
                    <div className="label-flex">
                        <label>Secure Password</label>
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

                  <button type="submit" className="btn-primary auth-submit-btn" disabled={isLoading} style={{ background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)' }}>
                    {isLoading ? <span className="loader-mini"></span> : (
                        <>
                            <span>Trainer Login</span>
                            <ChevronRight size={18} />
                        </>
                    )}
                  </button>
                </form>

                <div className="social-login-sep">
                    <span>Or continue with</span>
                </div>

                <div className="social-btns">
                    <button className="social-btn glass"><GoogleLogo /><span>Google Workspace</span></button>
                    <button className="social-btn glass"><GithubLogo /><span>GitHub</span></button>
                </div>

                <div className="auth-card-footer">
                    <p>New trainer? <span onClick={() => navigate("/trainer-register")} style={{ color: '#818cf8' }}>Join our faculty</span></p>
                    
                    <div className="auth-trust">
                        <ShieldCheck size={14} />
                        <span>Secure trainer access protocol active</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TrainerLogin;