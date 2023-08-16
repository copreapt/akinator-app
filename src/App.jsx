import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login, Register, Contact, Play, About, VerifyEmail, EditProfile, PlayQuestions } from "./pages";
import { Navbar, Footer } from "./components";
import PrivateRoute from "./PrivateRoute";
import PrivateRouteLogin from "./PrivateRouteLogin";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Play />} />
        <Route
          path="play-questions"
          element={
            <PrivateRoute>
              <PlayQuestions />
            </PrivateRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route
          path="login"
          element={
            <PrivateRouteLogin>
              <Login />
            </PrivateRouteLogin>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route
          path="play"
          element={
            <PrivateRoute>
              <Play />
            </PrivateRoute>
          }
        />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-center" />
      <Footer />
    </BrowserRouter>
  );
}

export default App
