import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, Lock, Eye, EyeOff, ArrowLeft, ChevronRight, UserPlus, RefreshCw } from "lucide-react";
import "./AdminRegister.css";

function AdminRegister() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated demo registration
    setTimeout(() => {
        alert("Admin credentials created successfully. Access level granted.");
        setIsLoading(false);
        navigate("/admin-login");
    }, 1500);
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
                    <div className="auth-info-blob" style={{ top: '10%', left: '10%', background: '#f59e0b' }}></div>
                    <div className="auth-info-blob" style={{ bottom: '10%', right: '10%', background: '#d97706' }}></div>
                </div>
                <div className="auth-info-content">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <UserPlus size={64} className="gradient-text mb-4" style={{ margin: '0 auto 1.5rem', color: '#f59e0b' }} />
                    </motion.div>
                    <h1>System <span className="gradient-text">Authority</span></h1>
                    <p>Granting highest level access credentials to the platform infrastructure.</p>
                </div>
            </div>

            <div className="auth-card-content">
                <div className="auth-card-header">
                    <div className="auth-icon-circ">
                        <ShieldCheck size={32} color="#f59e0b" />
                    </div>
                    <h2>Admin <span className="gradient-text">Registration</span></h2>
                    <p>Register new administrative credentials with full privileges.</p>
                </div>

                <form onSubmit={handleRegister} className="auth-form">
                  <div className="form-grid-2">
                      <div className="auth-input-group">
                        <label>Admin Username</label>
                        <div className="input-with-icon">
                            <ShieldCheck className="input-icon" size={17} />
                            <input
                              type="text"
                              placeholder="admin_prime"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                            />
                        </div>
                      </div>

                      <div className="auth-input-group">
                        <label>Full Name</label>
                        <div className="input-with-icon">
                            <ShieldCheck className="input-icon" size={17} />
                            <input
                              type="text"
                              placeholder="Admin Name"
                              value={fullname}
                              onChange={(e) => setFullname(e.target.value)}
                              required
                            />
                        </div>
                      </div>
                  </div>

                  <div className="auth-input-group">
                    <label>Admin Email</label>
                    <div className="input-with-icon">
                        <Mail className="input-icon" size={17} />
                        <input
                          type="email"
                          placeholder="admin@infycode.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                    </div>
                  </div>

                  <div className="auth-input-group">
                    <label>Master Security Password</label>
                    <div className="input-with-icon">
                        <Lock className="input-icon" size={17} />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button 
                            type="button" 
                            className="eye-btn" 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                  </div>

                  <div className="auth-btn-group">
                    <button type="button" className="btn-outline auth-reset-btn" onClick={handleReset}>
                        <RefreshCw size={16} />
                        <span>Reset</span>
                    </button>
                    <button type="submit" className="btn-primary auth-submit-btn" disabled={isLoading} style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
                        {isLoading ? <span className="loader-mini"></span> : (
                            <>
                                <span>Create Admin</span>
                                <ChevronRight size={18} />
                            </>
                        )}
                    </button>
                  </div>
                </form>

                <div className="auth-card-footer">
                    <p>Already have an admin account? <span onClick={() => navigate("/admin-login")} style={{ color: '#f59e0b' }}>Secure Login</span></p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;