import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logoIc from "../../assets/logo_ic.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Mission & Vision", path: "/mission" },
      { label: "Learning Methodology", path: "/methodology" },
    ],
  },
  {
    label: "Courses",
    path: "/courses",
    children: [
      { label: "All Courses", path: "/courses" },
      { label: "Course Structure", path: "/structure" },
      { label: "Course Enrollment", path: "/enrollment" },
      { label: "Learning Path", path: "/learning-path" },
    ],
  },
  {
    label: "Trainers",
    path: "/trainers",
    children: [
      { label: "Our Trainers", path: "/trainers" },
      { label: "Become a Trainer", path: "/become-trainer" },
    ],
  },
  {
    label: "Career Support",
    path: "/placement",
    children: [
      { label: "Placement Assistance", path: "/placement" },
      { label: "Resume Building", path: "/resume" },
      { label: "Interview Preparation", path: "/interview" },
      { label: "Career Guidance", path: "/career-guidance" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    children: [
      { label: "Contact Us", path: "/contact" },
      { label: "Support", path: "/support" },
      { label: "FAQs", path: "/faq" },
    ],
  },
];

const DropdownItem = ({ link }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === link.path ||
    link.children?.some(c => location.pathname === c.path);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!link.children) {
    return (
      <li>
        <Link
          to={link.path}
          className={`nav-link ${isActive ? "nav-link-active" : ""}`}
        >
          {link.label}
          {isActive && <span className="nav-underline" />}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`nav-link nav-dropdown-btn ${isActive ? "nav-link-active" : ""}`}
        onClick={() => navigate(link.path)}
      >
        {link.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "inline-flex", marginLeft: 4 }}
        >
          <ChevronDown size={14} />
        </motion.span>
        {isActive && <span className="nav-underline" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="dropdown-menu"
          >
            {link.children.map((child) => (
              <li key={child.path}>
                <Link
                  to={child.path}
                  className="dropdown-item"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setHidden(currentY > lastScrollY.current && currentY > 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Brand */}
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <div className="brand-logo-wrap">
            <img src={logoIc} alt="IC" className="brand-logo-img" />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">INFYCODE</span>
            <div className="brand-divider" />
            <span className="brand-tagline">INFINITE LEARNING SOLUTIONS</span>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <DropdownItem key={link.path} link={link} />
          ))}
        </ul>

        {/* Right actions */}
        <div className="navbar-actions">
          <ThemeToggle />
          <Link to="/login" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
            <span>Login</span>
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="mobile-drawer-header">
                <div className="navbar-brand" style={{ pointerEvents: 'none' }}>
                    <div className="brand-logo-wrap" style={{ width: 32, height: 32 }}>
                        <img src={logoIc} alt="IC" className="brand-logo-img" />
                    </div>
                    <div className="brand-text-wrap">
                        <span className="brand-title" style={{ fontSize: '1rem' }}>INFYCODE</span>
                        <div className="brand-divider" />
                        <span className="brand-tagline" style={{ fontSize: '0.6rem' }}>INFINITE LEARNING SOLUTIONS</span>
                    </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="mobile-close-btn">
                  <X size={22} />
                </button>
              </div>

              <nav className="mobile-nav">
                {navLinks.map((link) => (
                  <div key={link.path} className="mobile-nav-item">
                    {link.children ? (
                      <>
                        <button
                          className="mobile-nav-btn"
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === link.path ? null : link.path)
                          }
                        >
                          {link.label}
                          <motion.span
                            animate={{ rotate: mobileExpanded === link.path ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.path && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              style={{ overflow: "hidden" }}
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className="mobile-sub-link"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className="mobile-nav-btn"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(148,163,184,0.1)" }}>
                <Link
                  to="/login"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Login</span>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
