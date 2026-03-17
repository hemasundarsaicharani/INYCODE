const express = require("express");
const router = express.Router();

const {
    registerStudent,
    registerTrainer,
    getStudents,
    loginStudent,
    loginTrainer,
    loginAdmin,
    updateStudents
} = require("../controllers/studentController");


/* ============================
   STUDENT ROUTES
============================ */

// Register student
router.post("/students/register", registerStudent);

// Login student
router.post("/students/login", loginStudent);

// Get all students
router.get("/students", getStudents);

// Update student
router.put("/students/update/:id", updateStudents);



/* ============================
   TRAINER ROUTES
============================ */

// Register trainer
router.post("/trainers/register", registerTrainer);

// Login trainer
router.post("/trainers/login", loginTrainer);


/* ============================
   ADMIN ROUTES
============================ */

// Login admin
router.post("/admin/login", loginAdmin);


module.exports = router;