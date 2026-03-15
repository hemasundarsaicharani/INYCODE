import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, ArrowLeft, ChevronRight, KeyRound, ShieldCheck } from "lucide-react";
import "./ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
        alert("Password Reset Successful");
        navigate("/login");
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
          <span>Back to login</span>
        </motion.button>

        <div className="auth-card-wrap">
          <motion.div 
            className="auth-card card glass gradient-border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="auth-card-header">
                <div className="auth-icon-circ">
                    <KeyRound size={32} color="#38bdf8" />
                </div>
                <h2>Reset <span className="gradient-text">Password</span></h2>
                <p>Enter your new password to regain access.</p>
            </div>

            <form onSubmit={handleReset} className="auth-form">
              <div className="auth-input-group">
                <label>New Password</label>
                <div className="input-with-icon">
                    <Lock className="input-icon" size={18} />
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <button 
                        type="button" 
                        className="eye-btn" 
                        onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                        {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
              </div>

              <div className="auth-input-group">
                <label>Confirm New Password</label>
                <div className="input-with-icon">
                    <Lock className="input-icon" size={18} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <button 
                        type="button" 
                        className="eye-btn" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
              </div>

              <button type="submit" className="btn-primary auth-submit-btn" disabled={isLoading}>
                {isLoading ? <span className="loader-mini"></span> : (
                    <>
                        <span>Reset Password</span>
                        <ChevronRight size={18} />
                    </>
                )}
              </button>
            </form>

            <div className="auth-card-footer">
                <div className="auth-trust">
                    <ShieldCheck size={14} />
                    <span>Your security is our priority</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;