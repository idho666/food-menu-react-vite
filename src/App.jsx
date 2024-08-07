import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Spinner from "./componen/Spinner";
import Navbar from "./componen/Navbar";
import Service from "./componen/Service";
import About from "./componen/About";
import FoodMenu from "./componen/FoodMenu";
import Reservation from "./componen/Reservation";
import Modal from "./componen/Modal";
import Team from "./componen/Team";
import Testimonial from "./componen/Testimonial";
import Footer from "./componen/Footer";

import "./assets/lib/animate/animate.min.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import "./assets/lib/animate/animate.min.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
