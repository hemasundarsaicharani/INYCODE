import React from "react";
import { motion } from "framer-motion";
import { 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Download,
  Calendar,
  Filter
} from "lucide-react";
import "./RevenueAnalytics.css";

const RevenueAnalytics = () => {
  const recentTransactions = [
    { id: 1, user: "John Doe", plan: "Premium Full Stack", amount: "₹45,999", date: "12 Mar 2026", status: "success" },
    { id: 2, user: "Sarah Smith", plan: "UI/UX Masterclass", amount: "₹25,999", date: "11 Mar 2026", status: "success" },
    { id: 3, user: "Mike Johnson", plan: "Data Science Boot", amount: "₹85,999", date: "10 Mar 2026", status: "pending" },
    { id: 4, user: "Emily Davis", plan: "React Advanced", amount: "₹15,999", date: "10 Mar 2026", status: "success" },
  ];

  return (
    <div className="revenue-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Revenue Analytics</h2>
          <p>Global platform earnings, subscription trends, and financial health.</p>
        </div>
        <div className="header-actions">
           <button className="btn-secondary mini-btn glass">
              <Download size={18} />
              <span>Export CSV</span>
           </button>
           <button className="btn-primary mini-btn">
              <Filter size={18} />
              <span>Filters</span>
           </button>
        </div>
      </div>

      <div className="revenue-stats-grid">
        {[
          { label: "Total Revenue", value: "₹24.5L", trend: "+12.5%", icon: <DollarSign size={20} />, color: "#10b981", up: true },
          { label: "Monthly Earnings", value: "₹4.2L", trend: "+8.2%", icon: <TrendingUp size={20} />, color: "#38bdf8", up: true },
          { label: "Active Subscriptions", value: "1,240", trend: "-2.4%", icon: <TrendingUp size={20} />, color: "#f59e0b", up: false },
          { label: "Expiring Soon", value: "48", trend: "Normal", icon: <TrendingUp size={20} />, color: "#818cf8", up: true }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            className="revenue-stat-card card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
             <div className="stat-top">
                <div className="stat-icon-wrap" style={{ color: stat.color, background: `${stat.color}15` }}>{stat.icon}</div>
                <div className={`trend-pill ${stat.up ? 'up' : 'down'}`}>
                   {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                   <span>{stat.trend}</span>
                </div>
             </div>
             <div className="stat-bottom">
                <span className="lbl">{stat.label}</span>
                <span className="val">{stat.value}</span>
             </div>
          </motion.div>
        ))}
      </div>

      <div className="revenue-main-grid">
         <motion.div 
            className="chart-section card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
         >
            <div className="chart-header">
               <h3>Earnings Over Time</h3>
               <div className="chart-legend">
                  <span className="legend-item"><span className="dot" style={{ background: '#10b981' }} /> This Year</span>
                  <span className="legend-item"><span className="dot" style={{ background: 'rgba(255,255,255,0.1)' }} /> Last Year</span>
               </div>
            </div>
            <div className="revenue-chart-placeholder">
               <svg viewBox="0 0 800 300" className="line-chart-svg">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {[0, 1, 2, 3].map(i => (
                    <line key={i} x1="0" y1={i * 100} x2="800" y2={i * 100} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  ))}

                  <motion.path 
                    d="M0,250 L100,180 L200,210 L300,120 L400,150 L500,80 L600,110 L700,40 L800,90 L800,300 L0,300 Z" 
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  
                  <motion.path 
                    d="M0,250 L100,180 L200,210 L300,120 L400,150 L500,80 L600,110 L700,40 L800,90" 
                    fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  
                  {[
                    {x: 0, y: 250}, {x: 100, y: 180}, {x: 200, y: 210}, {x: 300, y: 120}, 
                    {x: 400, y: 150}, {x: 500, y: 80}, {x: 600, y: 110}, {x: 700, y: 40}, {x: 800, y: 90}
                  ].map((p, i) => (
                    <motion.circle 
                        key={i} cx={p.x} cy={p.y} r="5" fill="#10b981" stroke="#1a1a1a" strokeWidth="2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1 + (i * 0.05) }}
                    />
                  ))}

                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, i) => (
                    <text key={i} x={i * 100} y="290" fill="#94a3b8" fontSize="12" textAnchor="middle">{m}</text>
                  ))}
               </svg>
            </div>
         </motion.div>

         <div className="rev-side-analytics">
            <motion.div 
               className="revenue-sources card glass mb-4"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
                <h3>Revenue Sources</h3>
                <div className="donut-chart-container">
                    <svg viewBox="0 0 100 100" className="donut-svg">
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                        <motion.circle 
                            cx="50" cy="50" r="40" fill="transparent" stroke="#38bdf8" strokeWidth="12" strokeDasharray="251.2" 
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: 251.2 * 0.4 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            strokeLinecap="round"
                        />
                        <motion.circle 
                            cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="12" strokeDasharray="251.2" 
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: 251.2 * 0.7 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            transform="rotate(-90 50 50)"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="donut-center">
                        <span className="total">₹24.5L</span>
                        <span className="label">Total</span>
                    </div>
                </div>
                <div className="source-legend">
                    <div className="legend-item">
                        <span className="dot" style={{ background: '#10b981' }} />
                        <span>Subscriptions (60%)</span>
                    </div>
                    <div className="legend-item">
                        <span className="dot" style={{ background: '#38bdf8' }} />
                        <span>Course Sales (30%)</span>
                    </div>
                    <div className="legend-item">
                        <span className="dot" style={{ background: 'rgba(255,255,255,0.1)' }} />
                        <span>Other (10%)</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
               className="transactions-section card glass"
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
                <h3>Recent Transactions</h3>
                <div className="transaction-list">
                   {recentTransactions.map(t => (
                     <div key={t.id} className="transaction-item">
                        <div className="user-initials">{t.user.charAt(0)}</div>
                        <div className="t-info">
                           <span className="t-user">{t.user}</span>
                           <span className="t-plan">{t.plan}</span>
                        </div>
                        <div className="t-meta">
                           <span className="t-amount">{t.amount}</span>
                           <span className={`t-status ${t.status}`}>{t.status}</span>
                        </div>
                     </div>
                   ))}
                </div>
                <button className="btn-text-full">View All Transactions</button>
            </motion.div>
         </div>
      </div>

    </div>
  );
};

export default RevenueAnalytics;
