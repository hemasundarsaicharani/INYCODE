const db = require("../config/firebase");

/* ============================
   STUDENT REGISTRATION
============================ */
exports.registerStudent = async (req, res) => {
    try {
        const { username, fullname, email, password } = req.body;

        if (!username || !fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const snapshot = await db.ref("students")
            .orderByChild("email")
            .equalTo(email)
            .once("value");

        if (snapshot.exists()) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const studentRef = db.ref("students").push();

        await studentRef.set({
            username,
            fullname,
            email,
            password   // stored as plain text
        });

        res.status(201).json({
            message: "Student Registered Successfully",
            id: studentRef.key
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* ============================
   TRAINER REGISTRATION
============================ */
exports.registerTrainer = async (req, res) => {
    try {
        const { username, fullname, email, password } = req.body;

        if (!username || !fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const snapshot = await db.ref("trainers")
            .orderByChild("email")
            .equalTo(email)
            .once("value");

        if (snapshot.exists()) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const trainerRef = db.ref("trainers").push();

        await trainerRef.set({
            username,
            fullname,
            email,
            password   // plain text
        });

        res.status(201).json({
            message: "Trainer Registered Successfully",
            id: trainerRef.key
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* ============================
   GET STUDENTS
============================ */
exports.getStudents = async (req, res) => {
    try {
        const snapshot = await db.ref("students").once("value");
        const students = snapshot.val();

        res.status(200).json(students || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* ============================
   STUDENT LOGIN
============================ */
exports.loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        const snapshot = await db.ref("students")
            .orderByChild("email")
            .equalTo(email)
            .once("value");

        if (!snapshot.exists()) {
            return res.status(404).json({ message: "Student not found" });
        }

        const students = snapshot.val();
        // Since email is unique, we get the first key
        const id = Object.keys(students)[0];
        const user = students[id];

        // Plain text comparison
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id,
                username: user.username,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* ============================
   ADMIN LOGIN
============================ */
exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const snapshot = await db.ref("admin")
            .orderByChild("email")
            .equalTo(email)
            .once("value");

        if (!snapshot.exists()) {
            return res.status(404).json({ message: "Admin not found" });
        }

        const admins = snapshot.val();
        const id = Object.keys(admins)[0];
        const admin = admins[id];

        if (admin.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({
            message: "Admin Login successful",
            user: {
                id,
                username: admin.username,
                email: admin.email,
                role: "admin"
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* ============================
   INITIALIZE DEFAULT ADMIN
============================ */
exports.initializeAdmin = async () => {
    try {
        const snapshot = await db.ref("admin").once("value");
        const admins = snapshot.val();

        if (!admins) {
            console.log("Seeding default admin...");
            const adminRef = db.ref("admin").push();
            await adminRef.set({
                username: "admin",
                email: "admin@infycode.com",
                password: "admin123",  // default password
                role: "admin"
            });
            console.log("Default admin seeded successfully");
        }
    } catch (error) {
        console.error("Error initializing admin:", error.message);
    }
};


/* ============================
   UPDATE STUDENT
============================ */
exports.updateStudents = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        await db.ref(`students/${id}`).update(updates);

        res.status(200).json({ message: "Student updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* ============================
   TRAINER LOGIN
============================ */
exports.loginTrainer = async (req, res) => {
    try {
        const { email, password } = req.body;

        const snapshot = await db.ref("trainers")
            .orderByChild("email")
            .equalTo(email)
            .once("value");

        if (!snapshot.exists()) {
            return res.status(404).json({ message: "Trainer not found" });
        }

        const trainers = snapshot.val();
        const id = Object.keys(trainers)[0];
        const user = trainers[id];

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id,
                username: user.username,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};