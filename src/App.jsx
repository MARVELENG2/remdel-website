import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import CtaStrip from "./components/CtaStrip";
import Footer from "./components/Footer";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

function HomePage() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <WhyChooseUs />
      <CtaStrip />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;