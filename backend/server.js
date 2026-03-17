const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const { initializeAdmin } = require("./controllers/studentController");

const app = express();

/* ============================
   MIDDLEWARE
============================ */

// Enable CORS (for frontend integration)
app.use(cors());

// Built-in body parser (replaces body-parser)
app.use(express.json());


/* ============================
   ROUTES
============================ */

// All routes handled inside studentRoutes
app.use("/api", studentRoutes);


/* ============================
   HEALTH CHECK ROUTE
============================ */
app.get("/", (req, res) => {
    res.send("API is running...");
});


/* ============================
   GLOBAL ERROR HANDLER
============================ */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something went wrong",
        error: err.message
    });
});


/* ============================
   SERVER
============================ */
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    initializeAdmin(); // Initialize default admin credentials
});