import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EducationCert from "./pages/EducationCert";
import ProjectExp from "./pages/Project_exp";
import Skills from "./pages/Skills";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Login from "./pages/components/Login";
import AdminUser from "./pages/components/AdminUser";
import { ButtonProvider } from "./Context/buttonContext";

const App = () => {
  return (
    <ButtonProvider>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Frontpage />
              <About />
              <Skills />
              <EducationCert />
              <ProjectExp />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route exact path="/admin/login" element={<Login />} />
        <Route exact path="/user-backend" element={<AdminUser />} />
      </Routes>
    </ButtonProvider>
  );
};

export default App;
