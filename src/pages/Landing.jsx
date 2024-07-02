import React, { useEffect, useRef } from "react";
import Frontpage from "./Frontpage";
import About from "./About";
import Skills from "./Skills";
import EducationCert from "./EducationCert";
import Project_exp from "./Project_exp";
import Contact from "./Contact";

const Landing = () => {

  return (
    <div>
      <Frontpage />
      <About />
      <Skills />
      <EducationCert />
      <Project_exp />
      <Contact />
    </div>
  );
};

export default Landing;
