import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

/* Home */
import Home from "./pages/Home/Home";

/* About Pages */
import About from "./pages/About/About";
import Mission from "./pages/About/Mission";
import Methodology from "./pages/About/Methodology";

/* Courses Pages */
import Courses from "./pages/Courses/Courses";
import Structure from "./pages/Courses/Structure";
import Enrollment from "./pages/Courses/Enrollment";
import LearningPath from "./pages/Courses/LearningPath";

/* Trainers Pages */
import Trainers from "./pages/Trainers/Trainers";
import BecomeTrainer from "./pages/Trainers/BecomeTrainer";

/* Career Support Pages */
import Placement from "./pages/CareerSupport/Placement";
import Resume from "./pages/CareerSupport/Resume";
import Interview from "./pages/CareerSupport/Interview";
import CareerGuidance from "./pages/CareerSupport/CareerGuidance";

/* Contact Pages */
import Contact from "./pages/Contact/Contact";
import Support from "./pages/Contact/Support";
import FAQ from "./pages/Contact/FAQ";

/* Auth Pages */
import StudentLogin from "./pages/Auth/StudentLogin";
import TrainerLogin from "./pages/Auth/TrainerLogin";
import AdminLogin from "./pages/Auth/AdminLogin";
import StudentRegister from "./pages/Auth/StudentRegister";
import TrainerRegister from "./pages/Auth/TrainerRegister";
import AdminRegister from "./pages/Auth/AdminRegister";

/* Dashboards */
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import TrainerDashboard from "./pages/TrainerDashboard/TrainerDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

/* Trainer Dashboard Internal Components */
import TrainerHome from "./pages/TrainerDashboard/components/TrainerHome";
import TrainerProfile from "./pages/TrainerDashboard/components/TrainerProfile";
import StudentPerformanceRecord from "./pages/TrainerDashboard/components/StudentPerformanceRecord";
import BatchScheduling from "./pages/TrainerDashboard/components/BatchScheduling";
import AssignedProjects from "./pages/TrainerDashboard/components/AssignedProjects";
import TrainerCourses from "./pages/TrainerDashboard/components/TrainerCourses";
import TrainerAssignments from "./pages/TrainerDashboard/components/TrainerAssignments";

/* Admin Dashboard Internal Components */
import AdminHome from "./pages/AdminDashboard/components/AdminHome";
import RevenueAnalytics from "./pages/AdminDashboard/components/RevenueAnalytics";
import BatchAssignment from "./pages/AdminDashboard/components/BatchAssignment";
import OverallProgress from "./pages/AdminDashboard/components/OverallProgress";
import StudentFeedback from "./pages/AdminDashboard/components/StudentFeedback";
import ReferralDriveList from "./pages/AdminDashboard/components/ReferralDriveList";
import AdminTrainersView from "./pages/AdminDashboard/components/AdminTrainersView";
import AdminStudentsView from "./pages/AdminDashboard/components/AdminStudentsView";

/* Student Dashboard Internal Pages */
import DashboardHome from "./pages/StudentDashboard/components/DashboardHome";
import MyCourses from "./pages/StudentDashboard/components/MyCourses";
import Assignments from "./pages/StudentDashboard/components/Assignments";
import Progress from "./pages/StudentDashboard/components/Progress";
import Certificates from "./pages/StudentDashboard/components/Certificates";
import Profile from "./pages/StudentDashboard/components/Profile";
import Assessment from "./pages/StudentDashboard/components/Assessment";

/* Other Pages */
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* ── Public Pages + Auth (under MainLayout for Navbar/Footer) ── */}
        <Route element={<MainLayout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/methodology" element={<Methodology />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/learning-path" element={<LearningPath />} />

          {/* Trainers */}
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/become-trainer" element={<BecomeTrainer />} />

          {/* Career Support */}
          <Route path="/placement" element={<Placement />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Auth — Login (MainLayout hides Navbar/Footer on these paths) */}
          <Route path="/login" element={<Login />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/trainer-login" element={<TrainerLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Auth — Register */}
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/trainer-register" element={<TrainerRegister />} />
          <Route path="/admin-register" element={<AdminRegister />} />

          {/* Reset Password */}
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* ─────────────────────────────────────────────────────────────────────
            Dashboards are OUTSIDE MainLayout.
            They are self-contained full-page apps with their own
            Sidebar + Topbar + <Outlet>. Nesting them inside MainLayout
            causes a double-Outlet conflict leading to blank screens.
            ───────────────────────────────────────────────────────────────────── */}

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="progress" element={<Progress />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Trainer Dashboard */}
        <Route path="/trainer-dashboard" element={<TrainerDashboard />}>
          <Route index element={<TrainerHome />} />
          <Route path="courses" element={<TrainerCourses />} />
          <Route path="assignments" element={<TrainerAssignments />} />
          <Route path="students" element={<StudentPerformanceRecord />} />
          <Route path="schedule" element={<BatchScheduling />} />
          <Route path="projects" element={<AssignedProjects />} />
          <Route path="profile" element={<TrainerProfile />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="revenue" element={<RevenueAnalytics />} />
          <Route path="batches" element={<BatchAssignment />} />
          <Route path="trainers" element={<AdminTrainersView />} />
          <Route path="students" element={<AdminStudentsView />} />
          <Route path="feedback" element={<StudentFeedback />} />
          <Route path="placements" element={<ReferralDriveList />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;