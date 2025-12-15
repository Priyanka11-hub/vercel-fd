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
import Dashboard from "./pages/Dashboard";

import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Contact from "./components/Contact";
import SchoolList from "./components/SchoolList";

/* Layout Wrapper */
function Layout({ children }) {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      {!isLanding && <Navbar />}
      <div className={!isLanding ? "pt-[96px]" : ""}>{children}</div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* Main Website */}
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

          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/achievementpage" element={<AchievementPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schools" element={<SchoolList />} />

          {/* Auth */}
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
