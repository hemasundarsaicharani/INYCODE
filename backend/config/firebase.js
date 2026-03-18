const admin = require("firebase-admin");

if (admin.apps.length === 0) {
    try {
        if (!process.env.FIREBASE_KEY) {
            throw new Error("Missing FIREBASE_KEY environment variable.");
        }

        const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);
        
        if (serviceAccount.private_key) {
            serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
        }

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://infycode-db-default-rtdb.firebaseio.com"
        });
        console.log("Firebase Admin initialized successfully");
    } catch (error) {
        console.error("Firebase initialization error:", error.message);
    }
}

const db = admin.database();

module.exports = db;