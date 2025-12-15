import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Achievement from "./components/Achievement";
import Categories from "./components/Categories";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import About from "./pages/About";
import AchievementPage from "./pages/AchievementPage";
import Landing from "./pages/Landing";

import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Contact from "./components/Contact";
import Dashboard from "./pages/Dashboard";


/* ---------- Layout Wrapper ---------- */
function Layout({ children }) {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      {/* Navbar only for NON-landing pages */}
      {!isLanding && <Navbar />}

      {/* Add top spacing only when navbar exists */}
      <div className={!isLanding ? "pt-[96px]" : ""}>{children}</div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* LANDING PAGE (NO NAVBAR) */}
          <Route path="/" element={<Landing />} />

          {/* MAIN WEBSITE */}
          <Route
            path="/home"
            element={
              <>
                <HeroSection />
                <Companies />
                <Courses />
                <Achievement />
                <Categories />
                <CTA />
                <Footer />
              </>
            }
          />

          {/* OTHER PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/achievementpage" element={<AchievementPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
