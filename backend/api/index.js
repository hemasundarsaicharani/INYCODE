const express = require("express");
const cors = require("cors");
const studentRoutes = require("../routes/studentRoutes");
const { initializeAdmin } = require("../controllers/studentController");

// Load Environment Variables
require('dotenv').config();

const app = express();

// Request Logging Middleware (Serverless-safe)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Configure CORS
app.use(cors({
    origin: "*", // Adjust this to your frontend URL for production security
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// One-time initialization guard
let isInitialized = false;
app.use(async (req, res, next) => {
    if (!isInitialized) {
        try {
            await initializeAdmin();
            isInitialized = true;
            console.log("Admin seeding check completed");
        } catch (error) {
            console.error("Initialization error:", error.message);
        }
    }
    next();
});

// Main API Routes
app.use("/api", studentRoutes);

// Dedicated Test Endpoint for Verification
app.get("/api/test", (req, res) => {
    res.json({
        status: "success",
        message: "API is reachable",
        environment: process.env.NODE_ENV || "development",
        timestamp: new Date().toISOString()
    });
});

// Dedicated Debug Endpoint (Safe for diagnostics)
app.get("/api/debug", (req, res) => {
    const firebaseKeyExists = !!process.env.FIREBASE_KEY;
    const firebaseKeyLength = process.env.FIREBASE_KEY ? process.env.FIREBASE_KEY.length : 0;
    
    res.json({
        status: "diagnostic",
        node_version: process.version,
        env: process.env.NODE_ENV,
        firebase_key_present: firebaseKeyExists,
        firebase_key_length: firebaseKeyLength,
        firebase_apps_initialized: require("firebase-admin").apps.length,
        timestamp: new Date().toISOString()
    });
});

// Root Health Check
app.get("/", (req, res) => {
    res.json({ 
        status: "success", 
        message: "Infycode Backend is running on Vercel Functions" 
    });
});

// Global Error Handler (Always JSON)
app.use((err, req, res, next) => {
    console.error(`[ERROR] ${err.stack}`);
    res.status(err.status || 500).json({
        status: "error",
        message: err.message || "Internal Server Error",
        // Only show full stack in non-production
        error: process.env.NODE_ENV !== 'production' ? err.stack : undefined
    });
});

module.exports = app;
