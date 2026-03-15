import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Book, Calendar, Shield, Edit3, Camera } from "lucide-react";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="db-profile-modern">
            <div className="db-page-header">
                <div>
                    <h1>User <span className="gradient-text">Profile</span></h1>
                    <p>Manage your personal information and account security.</p>
                </div>
                <button className="btn-outline">
                    <Edit3 size={16} />
                    <span>Edit Profile</span>
                </button>
            </div>

            <div className="profile-grid">
                <div className="profile-main-card card glass gradient-border">
                    <div className="profile-hero">
                        <div className="p-avatar-wrap">
                            <div className="p-avatar-large">
                                <User size={64} />
                            </div>
                            <button className="avatar-edit-btn"><Camera size={16} /></button>
                        </div>
                        <div className="p-hero-info">
                            <h2>John Doe</h2>
                            <p>Full Stack Student</p>
                            <div className="p-badges">
                                <span className="p-badge gold">Pro Learner</span>
                                <span className="p-badge">Top 5%</span>
                            </div>
                        </div>
                    </div>

                    <div className="profile-details-grid">
                        <div className="p-detail-item">
                            <div className="p-label"><Mail size={16} /><span>Email Address</span></div>
                            <div className="p-value">john.doe@example.com</div>
                        </div>
                        <div className="p-detail-item">
                            <div className="p-label"><Phone size={16} /><span>Phone Number</span></div>
                            <div className="p-value">+91 98765 43210</div>
                        </div>
                        <div className="p-detail-item">
                            <div className="p-label"><Book size={16} /><span>Enrolled Course</span></div>
                            <div className="p-value">Blockchain & Full Stack Web Dev</div>
                        </div>
                        <div className="p-detail-item">
                            <div className="p-label"><Calendar size={16} /><span>Joined Since</span></div>
                            <div className="p-value">Jan 2025</div>
                        </div>
                    </div>
                </div>

                <div className="profile-side-grid">
                    <div className="card glass p-security-card">
                        <div className="p-sec-header">
                            <Shield size={24} color="#10b981" />
                            <h3>Account Security</h3>
                        </div>
                        <p>Your account is protected with 2FA and secure encryption.</p>
                        <button className="btn-text">Change Password</button>
                    </div>

                    <div className="card glass p-stats-card">
                        <h3>Quick Stats</h3>
                        <div className="p-mini-stats">
                            <div className="p-stat">
                                <span className="val">12</span>
                                <span className="lbl">Certificates</span>
                            </div>
                            <div className="p-stat">
                                <span className="val">840h</span>
                                <span className="lbl">Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;