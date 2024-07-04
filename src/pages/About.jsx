import React from "react";
import about_me_img from "../Image/about_me_img.png";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
function About() {
  return (
    <section className="about_me" id="about_myself">
      <div className="container_01">
        <div className="my_img">
          <img id="img" src={about_me_img} alt="profile_image" />
        </div>
        <div className="my_info">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Experienced software engineers proficient in ASP.NET, Blockchain and
            modern JS frameworks, I possess a strong background in full-stack
            development, DevOps, and cloud technologies. Proficient in backend
            development using a variety of languages to build high-performance
            server-side applications and APIs. I am skilled in building scalable
            applications on AWS using Docker and Kubernetes. I am currently
            seeking a challenging role where I can leverage my expertise to
            drive innovation and deliver high- quality software solutions.
          </p>
          <div className="personal_info">
            {personal_info_data.map((data, index) => {
              return (
                <>
                  <div className="abc">
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="xyz">
                    {data.section_two.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
