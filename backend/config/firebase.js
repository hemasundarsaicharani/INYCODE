const admin = require("firebase-admin");

if (!process.env.FIREBASE_KEY) {
  throw new Error("Missing FIREBASE_KEY environment variable. Please check your .env file.");
}

const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);
if (serviceAccount.private_key) {
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://infycode-db-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;