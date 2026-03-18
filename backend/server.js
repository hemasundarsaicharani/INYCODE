const app = require("./api/index");

/* ============================
   LOCAL SERVER
============================ */
const PORT = process.env.PORT || 5000;

// Only call listen if this file is run directly (local development)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Local development server running on port ${PORT}`);
    });
}

module.exports = app;