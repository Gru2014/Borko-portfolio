import React from "react";
import BottomNav from "./components/BottomNav";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer_section">
        <BottomNav />
        <div className="line"></div>
        <h2>{new Date().getFullYear()} &copy; All Reversed, Darren</h2>
      </div>
    </div>
  );
}

export default Footer;
