const admin = require("firebase-admin");

/**
 * Robust Firebase Admin Initialization for Serverless
 */
if (admin.apps.length === 0) {
    console.log("[FIREBASE] Starting initialization...");
    try {
        if (!process.env.FIREBASE_KEY) {
            console.error("[FIREBASE ERROR] FIREBASE_KEY environment variable is MISSING.");
            // We don't throw here to avoid crashing the whole process instantly, 
            // but the db export will be invalid.
        } else {
            let serviceAccount;
            try {
                serviceAccount = JSON.parse(process.env.FIREBASE_KEY);
                console.log("[FIREBASE] FIREBASE_KEY parsed successfully.");
            } catch (parseError) {
                console.error("[FIREBASE ERROR] Failed to parse FIREBASE_KEY JSON:", parseError.message);
                throw parseError;
            }
            
            if (serviceAccount.private_key) {
                // Ensure private key newlines are handled correctly
                serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
            } else {
                console.warn("[FIREBASE WARNING] serviceAccount.private_key is missing.");
            }

            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: "https://infycode-db-default-rtdb.firebaseio.com"
            });
            console.log("[FIREBASE] Firebase Admin initialized contextually.");
        }
    } catch (error) {
        console.error("[FIREBASE CRITICAL ERROR] Initialization failed:", error.message);
    }
} else {
    console.log("[FIREBASE] Reusing existing application instance.");
}

// Safely export the database, or null if initialization failed
let db = null;
try {
    if (admin.apps.length > 0) {
        db = admin.database();
    }
} catch (dbError) {
    console.error("[FIREBASE ERROR] Could not access database instance:", dbError.message);
}

module.exports = db;