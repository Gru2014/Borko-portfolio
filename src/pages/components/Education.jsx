import React from "react";
import "./Education.css";
import college_img from "../../Image/university_img.jpg";
import college_logo from "../../Image/university_logo.jpg";
function Education() {
  const my_education_data = [
    {
      index: 1,
      education_logo_link: college_logo,
      education_img_link: college_img,
      college_name: "Arizona State University",
      college_degree_name: "Bachelor's degree in Computer science",
      education_spam: "2010-2014",
      education_info: [
        {
          index: 1,
          educ_info:
            "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, Ml , OS etc.",
        },
        {
          index: 2,
          educ_info:
            "⚡ Apart from this, I have done courses on Back-end Development, and Full Stack Development (MERN).",
        },
        {
          index: 3,
          educ_info:
            "⚡  I have implemented several projects based on what I've learnt by my Self.",
        },
      ],
      btn_name: "Visit Website",
      btn_link: "https://www.asu.edu",
    },
  ];
  return (
    <>
      <div className="educ_container">
        <h2>My Education</h2>
        <div>
          {my_education_data.map((data, index) => {
            return (
              <div className="educ_div_section" key={index}>
                <div className="educ_upper_section">
                  <div className="educ_container_one">
                    <img src={data.education_img_link} alt="educ_image" />
                  </div>
                  <div className="educ_container_two">
                    <div className="upper_container_section">
                      <div className="upper_left">
                        <img
                          src={data.education_logo_link}
                          alt="college logo"
                        />
                      </div>
                      <div className="upper_middle">
                        <h3>{data.college_name}</h3>
                        <div className="upper_right">
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: "green" }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="educ_lower_section">
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className="educ_data_info" key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                      <div className="educ_btn">
                        <a href={data.btn_link}>
                          <button>{data.btn_name}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
