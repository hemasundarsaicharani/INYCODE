import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldAlert, Lock, Eye, EyeOff, ArrowLeft, ChevronRight, ShieldCheck, Key } from "lucide-react";
import { GoogleLogo, GithubLogo } from "../../components/Auth/BrandLogos";
import "./AdminLogin.css";

import { endpoints } from "../../utils/api";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Administrator Key is required";
    }
    if (password.length < 8) {
      newErrors.password = "Master Password must be at least 8 characters";
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
      const response = await fetch(endpoints.admin.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const userObj = {
          ...data.user,
          role: "admin",
          loginTime: new Date().getTime()
        };
        localStorage.setItem("loggedUser", JSON.stringify(userObj));
        navigate("/admin-dashboard");
      } else {
        setErrors({ general: data.message || "Invalid Admin credentials" });
      }
    } catch (error) {
      setErrors({ general: "Unable to connect to secure server" });
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
                <div className="auth-info-blob" style={{ top: '10%', left: '10%', background: '#f59e0b' }}></div>
                <div className="auth-info-blob" style={{ bottom: '10%', right: '10%', background: '#d97706' }}></div>
              </div>
              <div className="auth-info-content">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <ShieldAlert size={64} className="gradient-text mb-4" style={{ margin: '0 auto 1.5rem', color: '#f59e0b' }} />
                </motion.div>
                <h1>Secure <span className="gradient-text">Control</span></h1>
                <p>Highly restricted area. Administrator credentials required for system access.</p>
              </div>
            </div>

            <div className="auth-card-content">
              <div className="auth-card-header">
                <div className="auth-icon-circ">
                  <ShieldAlert size={32} color="#f59e0b" />
                </div>
                <h2>Admin <span className="gradient-text">Console</span></h2>
                <p>Authorized access only. System monitoring active.</p>
              </div>

              {errors.general && (
                <div className="error-banner mb-4 p-3 glass" style={{ color: '#f59e0b', borderRadius: '8px', textAlign: 'center', background: 'rgba(245, 158, 11, 0.1)' }}>
                  {errors.general}
                </div>
              )}

              <form onSubmit={handleLogin} className="auth-form">
                <div className="auth-input-group">
                  <label>Administrator Key / ID</label>
                  <div className="input-with-icon">
                    <ShieldAlert className="input-icon" size={18} />
                    <input
                      type="text"
                      placeholder="Admin username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        if (errors.username) setErrors(prev => ({ ...prev, username: "" }));
                      }}
                      className={errors.username ? "error-input" : ""}
                    />
                  </div>
                  {errors.username && <span className="error-text" style={{ color: '#f59e0b' }}>{errors.username}</span>}
                </div>

                <div className="auth-input-group">
                  <div className="label-flex">
                    <label>Master Password</label>
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
                  {errors.password && <span className="error-text" style={{ color: '#f59e0b' }}>{errors.password}</span>}
                </div>

                <div className="auth-options-row">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={twoFactor}
                      onChange={() => setTwoFactor(!twoFactor)}
                    />
                    <span className="checkmark"></span>
                    <span>Enable 2FA login</span>
                  </label>
                </div>

                <button type="submit" className="btn-primary auth-submit-btn" disabled={isLoading} style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
                  {isLoading ? <span className="loader-mini"></span> : (
                    <>
                      <span>Admin Login</span>
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>
              </form>

              <div className="social-btns">
                <button className="social-btn glass"><GoogleLogo /><span>SSO Login</span></button>
                <button className="social-btn glass"><GithubLogo /><span>GitHub</span></button>
              </div>

              <div className="auth-card-footer">
                <p>Issues with access? <span onClick={() => navigate("/contact")} style={{ color: '#f59e0b' }}>Support</span></p>

                <div className="auth-trust">
                  <ShieldCheck size={14} />
                  <span>System-wide security protocol level 5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;