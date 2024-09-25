import React from "react";
import "./BottomNav.css";
import my_navbar_data from "../assets/NavData";
import { HashLink } from "react-router-hash-link";
import personal_info_data from "../assets/AboutIn";
import Githubcomp from "./Githubcomp";

const BottomNav = () => {
  return (
    <div className="bottom_nav_container">
      <div className="bottom_nav_section">
        <div className="bot_nav_left">
          <div className="bot_left_header">
            <HashLink
              to="/admin/login"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <h3>Darren | Portfolio</h3>
            </HashLink>
          </div>
          <div className="bot_middle_info">
            <p className="basic_info"></p>
            <p className="f_info">Follow me for more such Projects.</p>
          </div>
          <div>
            <Githubcomp
              href="https://github.com/golangman0523"
              shadow="#482e87 0px 0px 13px"
            />
          </div>
        </div>
        <div className="bot_nav_middle">
          <div className="bot_middle_header">
            <h3>Quick Links</h3>
          </div>
          <div className="bot_nav">
            {my_navbar_data.map((data, index) => (
              <a key={index} href={data.nav_link}>
                <i className="fa-solid fa-angles-right"></i>
                <p> {data.navbar_name}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="bot_nav_right">
          <div className="bot_right_header">
            <h3>Contact Info</h3>
          </div>
          <div className="bot_contact_info">
            {personal_info_data.map((data, index) => {
              return (
                <div className="bot_cdiv" key={index}>
                  {data.section_two.map((e, i) => {
                    return (
                      <div className="contact_me_here" key={i}>
                        <i
                          className={e.icon_class}
                          style={{ color: e.ic_color }}
                        ></i>
                        <p>{e.data_value}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
