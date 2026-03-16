import React, { useEffect, useState, useRef } from "react";
import { useNavigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  FileCheck, 
  TrendingUp, 
  User, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  Plus,
  MoreVertical,
  BookMarked,
  CheckCircle2,
  Clock,
  ChevronRight
} from "lucide-react";
import { cn } from "../../utils/cn";
import BrandLogo from "../../components/Common/BrandLogo";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import "./TrainerDashboard.css";

const TRAINER_NOTIFICATIONS = [
  { id: 1, icon: <FileCheck size={16} />, color: "#f43f5e", title: "New submission", desc: "React Todo App submitted by Rahul.", time: "5m ago", unread: true },
  { id: 2, icon: <Users size={16} />, color: "#38bdf8", title: "New enrollment", desc: "3 students joined your Web Dev course.", time: "45m ago", unread: true },
  { id: 3, icon: <CheckCircle2 size={16} />, color: "#10b981", title: "Course approved", desc: "Python Masterclass is now live!", time: "2h ago", unread: false },
];

const TrainerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mainContentRef = useRef(null);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("loggedUser");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(!user);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("loggedUser");
      if (!storedUser) { 
        navigate("/trainer-login"); 
      } else {
        setUser(JSON.parse(storedUser));
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [navigate, user]);

  // Reset scroll to top on internal page navigation
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  if (loading && !user) return (
    <div className="db-loader">
      <div className="loader-mini"></div>
      <p>Loading Dashboard...</p>
    </div>
  );

  const stats = [
    { label: "Active Courses", value: 3, icon: <BookOpen size={20} />, color: "#818cf8" },
    { label: "Total Students", value: 45, icon: <Users size={20} />, color: "#38bdf8" },
    { label: "Pending Reviews", value: 12, icon: <FileCheck size={20} />, color: "#f43f5e" },
    { label: "Completion Rate", value: "88%", icon: <TrendingUp size={20} />, color: "#10b981" }
  ];

  return (
    <div className="db-layout">
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {!isSidebarOpen && (
            <motion.div 
                className="db-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(true)}
            />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        className={cn("db-sidebar glass", !isSidebarOpen && "closed")}
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
      >
        <div className="sidebar-inner">
            <div className="sidebar-header">
                <BrandLogo variant="sidebar" />
                <button className="mobile-close" onClick={() => setSidebarOpen(false)}>
                    <X size={20} />
                </button>
            </div>

            <div className="sidebar-user-card card glass">
                <div className="user-avatar-wrap">
                    <div className="user-avatar" style={{ color: '#818cf8', background: 'rgba(129, 140, 248, 0.1)' }}>
                        <User size={24} />
                    </div>
                </div>
                <div className="user-info">
                    <p className="user-name">{user?.username}</p>
                    <p className="user-role">Senior Instructor</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/trainer-dashboard" end className={({ isActive }) => cn("nav-link", isActive && "active")}>
                    <span className="nav-icon"><BarChart3 size={20} /></span>
                    <span className="nav-text">Dashboard</span>
                </NavLink>
                <NavLink to="/trainer-dashboard/courses" className={({ isActive }) => cn("nav-link", isActive && "active")}>
                    <span className="nav-icon"><BookOpen size={20} /></span>
                    <span className="nav-text">Courses</span>
                </NavLink>
                <NavLink to="/trainer-dashboard/students" className={({ isActive }) => cn("nav-link", isActive && "active")}>
                    <span className="nav-icon"><Users size={20} /></span>
                    <span className="nav-text">Students</span>
                </NavLink>
                <NavLink to="/trainer-dashboard/assignments" className={({ isActive }) => cn("nav-link", isActive && "active")}>
                    <span className="nav-icon"><FileCheck size={20} /></span>
                    <span className="nav-text">Assignments</span>
                </NavLink>
                <NavLink to="/trainer-dashboard/projects" className={({ isActive }) => cn("nav-link", isActive && "active")}>
                    <span className="nav-icon"><BookMarked size={20} /></span>
                    <span className="nav-text">Projects</span>
                </NavLink>
                <NavLink to="/trainer-dashboard/schedule" className={({ isActive }) => cn("nav-link", isActive && "active")}>
                    <span className="nav-icon"><Clock size={20} /></span>
                    <span className="nav-text">Schedule</span>
                </NavLink>
            </nav>

        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="db-main" ref={mainContentRef}>
        <header className="db-topbar glass">
            <div className="topbar-left">
                <button className="menu-toggle" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <Menu size={20} />
                </button>
                <div className="db-search card glass">
                    <Search size={18} />
                    <input type="text" placeholder="Search students, submissions..." />
                </div>
            </div>
            
            <div className="topbar-right">
                <ThemeToggle />
                <button className="btn-primary mini-btn">
                    <Plus size={16} />
                    <span>Create Course</span>
                </button>

                {/* Notification Dropdown */}
                <div className="topbar-dropdown-wrap" ref={notifRef}>
                  <button className="icon-btn glass" onClick={() => { setNotifOpen(o => !o); setProfileOpen(false); }}>
                    <Bell size={20} />
                    {TRAINER_NOTIFICATIONS.filter(n => n.unread).length > 0 && <span className="notif-badge" />}
                  </button>
                  <AnimatePresence>
                    {notifOpen && (
                      <motion.div className="topbar-dropdown notif-dropdown card glass"
                        initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }} transition={{ duration: 0.18 }}
                        style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, minWidth: '300px', zIndex: 200 }}
                      >
                        <div className="dropdown-header">
                          <span>Notifications</span>
                          <span className="unread-pill">{TRAINER_NOTIFICATIONS.filter(n=>n.unread).length} new</span>
                        </div>
                        {TRAINER_NOTIFICATIONS.map(n => (
                          <div key={n.id} className={cn("notif-item", n.unread && "unread")}>
                            <div className="notif-icon" style={{ color: n.color, background: `${n.color}18` }}>{n.icon}</div>
                            <div className="notif-body">
                              <div className="notif-title">{n.title}</div>
                              <div className="notif-desc">{n.desc}</div>
                              <div className="notif-time">{n.time}</div>
                            </div>
                            {n.unread && <span className="notif-dot" />}
                          </div>
                        ))}
                        <div className="dropdown-footer">
                          <button className="dropdown-view-all">View all <ChevronRight size={14} /></button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="topbar-divider" />

                {/* Profile Dropdown */}
                <div className="topbar-dropdown-wrap" ref={profileRef}>
                  <div className="topbar-user" onClick={() => { setProfileOpen(o => !o); setNotifOpen(false); }} style={{ cursor: "pointer" }}>
                    <span>{user?.username}</span>
                    <div className="mini-avatar" style={{ background: '#818cf8' }}><User size={16} /></div>
                  </div>
                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div className="topbar-dropdown profile-dropdown card glass"
                        initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }} transition={{ duration: 0.18 }}
                        style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, minWidth: '220px', zIndex: 200 }}
                      >
                        <div className="dropdown-header profile-header">
                          <div className="profile-avatar-lg" style={{ color: '#818cf8', background: 'rgba(129,140,248,0.1)' }}><User size={28} /></div>
                          <div>
                            <div className="profile-name">{user?.username}</div>
                            <div className="profile-role">Senior Instructor</div>
                          </div>
                        </div>
                        <div className="dropdown-divider" />
                        <button className="dropdown-item" onClick={() => setProfileOpen(false)}><User size={16} /> Profile</button>
                        <div className="dropdown-divider" />
                        <button className="dropdown-item danger" onClick={handleLogout}><LogOut size={16} /> Logout</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            </div>
        </header>

        <div className="db-content">
          <AnimatePresence mode="wait">
            <motion.div 
              key={window.location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet context={{ user }} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default TrainerDashboard;