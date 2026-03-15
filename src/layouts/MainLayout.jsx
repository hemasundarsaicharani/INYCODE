import React, { useState, useEffect, useRef, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";


const pageVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

/* ─── Hint badge styles (inline so no extra CSS file needed) ─── */
const hintStyle = {
    position: "fixed",
    bottom: "1.25rem",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(15,23,42,0.85)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(56,189,248,0.25)",
    color: "#94a3b8",
    fontSize: "0.78rem",
    padding: "0.45rem 1rem",
    borderRadius: "9999px",
    pointerEvents: "none",
    zIndex: 9998,
    whiteSpace: "nowrap",
    letterSpacing: "0.02em",
};

const MainLayout = () => {
    const location = useLocation();

    // One-time loader
    const [loading, setLoading] = useState(!window.__infycode_loaded);

    // Paths where Navbar and Footer should be hidden entirely (auth pages)
    const hideOnPaths = [
        "/login",
        "/student-login",
        "/trainer-login",
        "/admin-login",
        "/student-register",
        "/trainer-register",
        "/admin-register",
        "/reset-password"
    ];

    const isAuthPage = hideOnPaths.includes(location.pathname);
    const isDashboard = location.pathname.startsWith("/student-dashboard") ||
                        location.pathname.startsWith("/trainer-dashboard") ||
                        location.pathname.startsWith("/admin-dashboard");

    const shouldHideBranding = isAuthPage || isDashboard;

    // On the home page "/" the navbar is always visible.
    // On every other page it starts hidden and appears only on double-click.
    const isHomePage = location.pathname === "/";

    const [navVisible, setNavVisible] = useState(isHomePage);
    const hideTimerRef = useRef(null);

    // Reset state whenever the route changes
    useEffect(() => {
        setNavVisible(isHomePage);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    }, [location.pathname, isHomePage]);

    // Shared reveal function — used by both double-click and top-hover
    const revealNavbar = useCallback(() => {
        if (isHomePage || shouldHideBranding) return;
        setNavVisible(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
            setNavVisible(false);
        }, 4000);
    }, [isHomePage, shouldHideBranding]);

    // Double-click anywhere on the page reveals the navbar
    const handleDoubleClick = useCallback(() => {
        revealNavbar();
    }, [revealNavbar]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        };
    }, []);

    const handleLoaderFinish = () => {
        window.__infycode_loaded = true;
        setLoading(false);
    };

    if (loading) {
        return <Loader onFinish={handleLoaderFinish} />;
    }

    // Whether we should render the navbar at all
    const showNavbar = !shouldHideBranding && (isHomePage || navVisible);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
            onDoubleClick={handleDoubleClick}
        >
            {/* Invisible hover sentinel — fixed 8px strip at the very top.
                 Only active on non-home pages when the navbar is hidden.
                 Moving the cursor into this zone slides the navbar in. */}
            {!isHomePage && !shouldHideBranding && !navVisible && (
                <div
                    onMouseEnter={revealNavbar}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "8px",
                        zIndex: 10000,
                        cursor: "default",
                    }}
                />
            )}

            {/* Navbar — animated slide in/out from top */}
            <AnimatePresence>
                {showNavbar && (
                    <motion.div
                        key="navbar-wrapper"
                        initial={isHomePage ? false : { y: -80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ position: "sticky", top: 0, zIndex: 9999 }}
                    >
                        <Navbar />
                    </motion.div>
                )}
            </AnimatePresence>

            <main style={{ flex: 1 }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {!shouldHideBranding && <Footer />}

            {/* Floating hint badge — only on non-home pages where navbar is hidden */}
            <AnimatePresence>
                {!isHomePage && !shouldHideBranding && !navVisible && (
                    <motion.div
                        key="nav-hint"
                        style={hintStyle}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.4 }}
                    >
                        Move cursor to top · or double-click to show navigation
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default MainLayout;
