import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIc from "../../assets/logo_ic.png";

const Loader = ({ onFinish }) => {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Progress counter animation
        const duration = 1000; // 1 second counter
        const interval = 20; // ms
        const step = 100 / (duration / interval);
        
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(prev + step, 100);
            });
        }, interval);

        // Main loader timeout
        const t = setTimeout(() => {
            setVisible(false);
            setTimeout(onFinish, 300);
        }, 1200);

        return () => {
            clearInterval(timer);
            clearTimeout(t);
        };
    }, [onFinish]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
                        zIndex: 9999,
                    }}
                >
                    {/* Blobs */}
                    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                        <div className="blob blob-1" style={{ width: 300, height: 300, top: "10%", left: "20%" }} />
                        <div className="blob blob-2" style={{ width: 250, height: 250, bottom: "15%", right: "15%" }} />
                    </div>

                    {/* Logo pulse */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
                    >
                        <div
                            style={{
                                width: 180,
                                height: 180,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 1.5rem",
                            }}
                        >
                            <img src={logoIc} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <h1
                            className="gradient-text"
                            style={{ fontFamily: '"Revue", sans-serif', fontSize: "2.8rem", fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}
                        >
                            INFYCODE
                        </h1>
                        <p style={{ color: "#64748b", marginTop: "0.5rem", fontSize: "1.1rem", letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: "'Copperplate Gothic Bold', 'Copperplate', serif" }}>
                            INFINITE LEARNING SOLUTIONS
                        </p>
                    </motion.div>

                    {/* Loading section */}
                    <div style={{ position: "absolute", bottom: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                        <div style={{ color: "#38bdf8", fontFamily: "monospace", fontSize: "1.2rem", fontWeight: 700 }}>
                            {Math.round(progress)}%
                        </div>
                        <div style={{ width: 200, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 9999, overflow: "hidden" }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ type: "spring", bounce: 0, duration: 0.1 }}
                                style={{
                                    height: "100%",
                                    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                                    boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
