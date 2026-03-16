import React, { useEffect, useState, useRef } from "react";
import { useNavigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Award, 
  User, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  CheckCircle2,
  Clock,
  BookMarked,
  ChevronRight,
  ClipboardCheck
} from "lucide-react";
import { cn } from "../../utils/cn";
import BrandLogo from "../../components/Common/BrandLogo";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import "./StudentDashboard.css";

const NOTIFICATIONS = [
  { id: 1, icon: <BookMarked size={16} />, color: "#38bdf8", title: "New course available", desc: "React Advanced Patterns is now live!", time: "2m ago", unread: true },
  { id: 2, icon: <CheckCircle2 size={16} />, color: "#10b981", title: "Assignment graded", desc: "Your HTML landing page scored 95/100.", time: "1h ago", unread: true },
  { id: 3, icon: <Clock size={16} />, color: "#f59e0b", title: "Deadline reminder", desc: "React Todo App due in 2 days.", time: "3h ago", unread: false },
];

const StudentDashboard = () => {
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
        navigate("/student-login"); 
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

  // Close dropdowns on outside click
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

  const navItems = [
    { name: "Overview", path: "/student-dashboard", icon: <LayoutDashboard size={20} />, end: true },
    { name: "My Courses", path: "/student-dashboard/courses", icon: <BookOpen size={20} /> },
    { name: "Assignments", path: "/student-dashboard/assignments", icon: <FileText size={20} /> },
    { name: "Assessments", path: "/student-dashboard/assessment", icon: <ClipboardCheck size={20} /> },
    { name: "Progress", path: "/student-dashboard/progress", icon: <TrendingUp size={20} /> },
    { name: "Certificates", path: "/student-dashboard/certificates", icon: <Award size={20} /> },
  ];

  const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;

  return (
    <div className="db-layout">
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div className="db-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSidebarOpen(true)} />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside className={cn("db-sidebar glass", !isSidebarOpen && "closed")} initial={false} animate={{ width: isSidebarOpen ? 280 : 0 }}>
        <div className="sidebar-inner">
          <div className="sidebar-header">
            <BrandLogo variant="sidebar" />
            <button className="mobile-close" onClick={() => setSidebarOpen(false)}><X size={20} /></button>
          </div>

          <div className="sidebar-user-card card glass">
            <div className="user-avatar-wrap">
              <div className="user-avatar"><User size={24} /></div>
              <div className="status-dot" />
            </div>
            <div className="user-info">
              <p className="user-name">{user?.username}</p>
              <p className="user-role">Student Account</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.end} className={({ isActive }) => cn("nav-link", isActive && "active")}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="db-main" ref={mainContentRef}>
        <header className="db-topbar glass">
          <div className="topbar-left">
            <button className="menu-toggle" onClick={() => setSidebarOpen(!isSidebarOpen)}><Menu size={20} /></button>
            <div className="db-search card glass">
              <Search size={18} />
              <input type="text" placeholder="Search courses, mentors..." />
            </div>
          </div>

          <div className="topbar-right">
            <ThemeToggle />

            {/* Notification Dropdown */}
            <div className="topbar-dropdown-wrap" ref={notifRef}>
              <button className="icon-btn glass" onClick={() => { setNotifOpen(o => !o); setProfileOpen(false); }}>
                <Bell size={20} />
                {unreadCount > 0 && <span className="notif-badge" />}
              </button>
              <AnimatePresence>
                {notifOpen && (
                  <motion.div className="topbar-dropdown notif-dropdown card glass"
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, minWidth: '300px', zIndex: 200 }}
                  >
                    <div className="dropdown-header">
                      <span>Notifications</span>
                      {unreadCount > 0 && <span className="unread-pill">{unreadCount} new</span>}
                    </div>
                    {NOTIFICATIONS.map(n => (
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
                <div className="mini-avatar"><User size={16} /></div>
              </div>
              <AnimatePresence>
                {profileOpen && (
                  <motion.div className="topbar-dropdown profile-dropdown card glass"
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, minWidth: '220px', zIndex: 200 }}
                  >
                    <div className="dropdown-header profile-header">
                      <div className="profile-avatar-lg"><User size={28} /></div>
                      <div>
                        <div className="profile-name">{user?.username}</div>
                        <div className="profile-role">Student Account</div>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                    <NavLink to="/student-dashboard/profile" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                      <User size={16} /> Profile
                    </NavLink>
                    <div className="dropdown-divider" />
                    <button className="dropdown-item danger" onClick={handleLogout}>
                      <LogOut size={16} /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        <div className="db-content">
          <AnimatePresence mode="wait">
            <motion.div key={window.location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;