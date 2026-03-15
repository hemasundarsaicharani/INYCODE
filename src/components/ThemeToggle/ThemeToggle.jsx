import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileTap={{ scale: 0.9 }}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1.5px solid rgba(56,189,248,0.35)",
                background: isDark ? "rgba(56,189,248,0.1)" : "rgba(14,165,233,0.1)",
                color: isDark ? "#38bdf8" : "#0284c7",
                cursor: "pointer",
                transition: "all 0.3s ease",
                outline: "none",
            }}
        >
            <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
