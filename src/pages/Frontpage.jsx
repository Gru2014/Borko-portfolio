import React, { useContext } from "react";
import SvgBackground from "./components/SvgBackground";
import "./Frontpage.css";
import TypeWriterEffect from "react-typewriter-effect";
import { ButtonContext } from "../Context/buttonContext";

function Frontpage() {
  const { setBtnClick } = useContext(ButtonContext);

  return (
    <>
      <div className="profile-container" id="home_page">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text">Darren Jensen</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1 style={{ display: "flex", gap: "6px", color: "#fff" }}>
                  I've worked as a
                  <span style={{ color: "#5198ff" }} className="type_effect">
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor="#f3f4f6"
                      multiText={[
                        "Senior Software Engineer",
                        "Fullstack Engineer",
                        "Frontend Engineer",
                        "Backend Engineer",
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
                </h1>
                <span className="profile-role-tagline">
                  I've been working as a software engineer for more than 9 years
                  until now.<br></br>
                  I'm self-motivated and open-minded person who can learn very
                  fast.<br></br>I have a lot of experience with the tect stacks
                  that you are looking for.<br></br>I think I'm suitable for
                  this position.<br></br>
                  LOOKING FORWARD TO WORKING WITH YOU. :)
                </span>
              </span>
            </div>

            <div className="profile-options">
              <a href="#contact_page">
                <button
                  className="btn primary-btn"
                  onClick={() => {
                    setBtnClick(5);
                  }}
                >
                  <h3>Hire Me</h3>
                </button>
              </a>
              <a href="./DarrenJensen.pdf" download>
                <button className="btn highlighted-btn">
                  <h3>Get Resume</h3>
                </button>
              </a>
            </div>
          </div>
          <div
            className="profile-picture"
            onClick={() => {
              setBtnClick(1);
            }}
          >
            <a href="#about_myself" className="profile-picture-background"></a>
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
