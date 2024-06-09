import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import AnimatedSection from "./components/HomePage/FramerAnimate";
import PetCat from "./components/PetsCategories/PetCat";
import Gallery from "./components/Gallery/Gallery";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { AuthProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

const App = () => {
  const location = useLocation();

  const isDashboard = location.pathname === "/Dashboard";

  return (
    <AuthProvider>
      {!isDashboard && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PetCategories" element={<PetCat />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />{" "}
      </Routes>
      {!isDashboard && (
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      )}
    </AuthProvider>
  );
};

export default App;
